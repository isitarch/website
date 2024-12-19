<script lang="ts" setup>
// Room setup
const route = useRoute()
const roomName = route.query.room as string || 'default-room'
const roomPassword = route.query.password as string || undefined
const room = createRoom(roomName, roomPassword)

// Data binding
const youtubeLink = ref(localStorage.getItem("youtubeLink") || "")
const videoTitle = ref(localStorage.getItem("videoTitle") || "")
const speaker = ref(localStorage.getItem("speaker") || "")
const markdownInput = ref(localStorage.getItem("markdownInput") || "")

// Pattern and utilities for time parsing
const TIME_PATTERN = /^(\d+)(?::([0-5]?\d?)?)?$/
const convertTimeInput = (input: string) => {
  const result = TIME_PATTERN.exec(input)
  if (!result) return ''
  
  if (!result[2]) { 
    return Number.parseInt(result[1]).toString() + ':00'
  }

  const minutes = Number.parseInt(result[1]).toString()
  const seconds = ('0' + Number.parseInt(result[2])).slice(-2)
  return minutes + ':' + seconds
}

const parsedTimeline = computed(() => {
  return !markdownInput.value ? [] : markdownInput.value
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const [time, ...descriptionParts] = line.split(" ")
      const description = descriptionParts.join(" ").trim()
      const formattedTime = convertTimeInput(time)
      return {
        time: formattedTime,
        description_de: description,
        description_en: "", // Placeholder for translation
        link: youtubeLink.value
          ? `${youtubeLink.value}&t=${convertTimeToSeconds(time)}`
          : "",
      }
    })
})

const convertTimeToSeconds = (time: string) => {
  const [minutes, seconds] = time.split(":").map(Number)
  return minutes * 60 + seconds
}

// Synchronization with Trystero
const [sendTimeline, getTimeline] = room.makeAction('timeline')
const [sendScrollCommand, getScrollCommand] = room.makeAction('scroll')

const sendTimelineUpdate = () => {
  sendTimeline({
    youtubeLink: youtubeLink.value,
    videoTitle: videoTitle.value,
    speaker: speaker.value,
    markdownInput: markdownInput.value
  })
}

watchEffect(() => {
  localStorage.setItem("youtubeLink", youtubeLink.value)
  sendTimelineUpdate()
})
watchEffect(() => {
  localStorage.setItem("markdownInput", markdownInput.value)
  sendTimelineUpdate()
})
watchEffect(() => {
  localStorage.setItem("videoTitle", videoTitle.value)
  sendTimelineUpdate()
})
watchEffect(() => {
  localStorage.setItem("speaker", speaker.value)
  sendTimelineUpdate()
})

// JSON Export and clearing the timeline
const downloadAsJSON = () => {
  const timelineData = {
    youtubeLink: youtubeLink.value,
    videoTitle: videoTitle.value,
    speaker: speaker.value,
    timeline: parsedTimeline.value,
  };
  const blob = new Blob([JSON.stringify(timelineData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "timeline.json";
  a.click();
  URL.revokeObjectURL(url);
}

const clearTimeline = () => {
  if (confirm("Do you really want to clear the timeline?")) {
    youtubeLink.value = ""
    markdownInput.value = ""
    videoTitle.value = ""
    speaker.value = ""
    localStorage.removeItem("youtubeLink")
    localStorage.removeItem("markdownInput")
    localStorage.removeItem("videoTitle")
    localStorage.removeItem("speaker")
  }
}

const countdownTime = ref(60)
const countdown = ref(0)
let interval: NodeJS.Timeout | undefined = undefined
const startCountdown = () => {
  if (!!interval) { clearInterval(interval) }
  interval = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value = countdown.value - 1
    } else {
      clearInterval(interval)
    }
  }, 1000)
}

const [sendCommand, getCommand] = room.makeAction('countdown')
const controlCountdown = (command: string, time?: number) => {
  sendCommand({ command, time })

  if (command === 'start') startCountdown()
  if (command === 'pause') clearInterval(interval)
  if (command === 'reset') countdown.value = time || 0
}

const peerCount = ref(0)
room?.onPeerJoin(() => {
  peerCount.value = Object.keys(room?.getPeers() || {}).length
  sendTimelineUpdate()
  sendCommand({ command: 'synchronize', 'time': countdown.value, 'start': interval ? 'true' : 'false' })
})
room?.onPeerLeave(() => {
  peerCount.value = Object.keys(room?.getPeers() || {}).length
})


// Scroll management
const handleTextareaCursor = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  const cursorPosition = textarea.selectionStart
  const textBeforeCursor = textarea.value.slice(0, cursorPosition)
  const lines = textBeforeCursor.split("\n")
  const currentLineIndex = lines.length - 1

  // Send the scroll command to the overlay
  sendScrollCommand({ index: currentLineIndex })
}
</script>

<template>
  <div class="p-4 space-y-6 h-screen">
    <div class="grid grid-cols-2 gap-8 h-full">
      <!-- Peer connection information -->
      <div class="flex flex-col gap-8">
        <div class="bg-gray-800 border-gray-700 rounded p-8">
          {{ peerCount }} connected
        </div>

        <!-- Countdown controls -->
        <div class="bg-gray-800 border-gray-700 rounded p-8">
          <h2 class="text-lg font-semibold">Countdown</h2>
          <input v-model="countdownTime" type="number" placeholder="Countdown time (seconds)"
            class="block bg-gray-800 w-full p-2 border rounded-lg mb-4">
          <div class="mb-2">Current: {{ countdown }}</div>
          <div class="flex gap-2">
            <button @click="controlCountdown('start', countdownTime)"
              class="px-4 py-2 bg-green-500 text-white rounded-lg">Start</button>
            <button @click="controlCountdown('pause')"
              class="px-4 py-2 bg-yellow-500 text-white rounded-lg">Pause</button>
            <button @click="controlCountdown('reset', countdownTime)"
              class="px-4 py-2 bg-red-500 text-white rounded-lg">Reset</button>
          </div>
        </div>
      </div>

      <!-- Timeline editing -->
      <div class="border bg-gray-800 border-gray-700 rounded p-8 flex flex-col h-full">
        <div class="grid grid-cols-2 items-center gap-1 mb-4" style="grid-template-columns: min-content 1fr">
          <label for="video-title" class="block font-medium me-4">Title</label>
          <input v-model="videoTitle" id="video-title" type="text" class="bg-gray-800 w-full p-2 border rounded-lg"
            placeholder="The intersection of..." />
          <label for="speaker" class="block font-medium me-4">Speaker</label>
          <input v-model="speaker" id="speaker" type="text" class="bg-gray-800 w-full p-2 border rounded-lg"
            placeholder="Carola..." />
          <label for="youtube-link" class="block font-medium me-4">Link</label>
          <input v-model="youtubeLink" id="youtube-link" type="url" class="bg-gray-800 w-full p-2 border rounded-lg"
            placeholder="https://www.youtube.com/watch?v=..." />
        </div>

        <!-- Timeline textarea -->
        <label for="timeline-input" class="block font-medium mb-2">Timeline (Markdown)</label>
        <textarea v-model="markdownInput" id="timeline-input"
          class="bg-gray-800 w-full p-2 mb-2 border rounded-lg flex-grow h-full"
          placeholder="1:20 Introduction to the topic&#10;3:20 Safety with Zapfenströsel"
          @click="handleTextareaCursor"
          @keyup="handleTextareaCursor"></textarea>

        <!-- Timeline actions -->
        <div class="flex gap-4 mt-4">
          <button @click="downloadAsJSON" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Export JSON
          </button>
          <button @click="clearTimeline" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Clear timeline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
