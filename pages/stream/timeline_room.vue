<script lang="ts" setup>
const route = useRoute()
const roomName = route.query.room as string || 'default-room'
const roomPassword = route.query.password as string || undefined
const room = createRoom(roomName, roomPassword)

const youtubeLink = ref("")
const videoTitle = ref("")
const speaker = ref("")
const markdownInput = ref("")
const listRef = ref<HTMLUListElement | null>(null) // Referenz zur Liste

let lastHighlightedListItem: HTMLLIElement | undefined
// Scroll-Steuerung
const scrollToIndex = (index: number) => {
  if (!listRef.value) return;
  if (lastHighlightedListItem) lastHighlightedListItem.classList.remove('bg-slate-700')
  const listItems = listRef.value.querySelectorAll('li')
  const targetItem = listItems[Math.min(listItems.length-1, listItems.length-index * 2-1)]
  if (targetItem) {
    targetItem.classList.add('bg-slate-700')
    lastHighlightedListItem = targetItem
    targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

// Zeit-Konvertierung und Parsing
const TIME_PATTERN = /^(\d+)(?::([0-5]?\d?)?)?$/
const convertTimeInput = (input: string) => {
  const result = TIME_PATTERN.exec(input)
  if (!result) return '' // non valid input
  
  if (!result[2]) { // just minutes, no seconds
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
        description,
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

// Synchronisation mit Trystero
const [sendScrollCommand, getScrollCommand] = room.makeAction('scroll')
getScrollCommand((data: any) => {
  if (typeof data.index === 'number') {
    scrollToIndex(data.index) // Scroll zur gewünschten Zeile
  }
})

// Daten aktualisieren
const [sendTimeline, getTimeline] = room.makeAction('timeline')
getTimeline((data: any) => {
  if ('youtubeLink' in data) youtubeLink.value = data.youtubeLink
  if ('videoTitle' in data) videoTitle.value = data.videoTitle
  if ('speaker' in data) speaker.value = data.speaker
  if ('markdownInput' in data) markdownInput.value = data.markdownInput
})
</script>

<template>
  <div class="min-h-screen flex items-stretch justify-stretch">
    <div class="border bg-gray-800 border-gray-700 rounded p-4 m-2 w-full">
      <h2 class="text-2xl text-cyan-400 leading-tight mb-1">{{ videoTitle }}</h2>
      <div class="mb-4 text-sm text-gray-400"><span v-if="speaker">von {{ speaker }}</span></div>
      <ul ref="listRef">
        <template v-for="(entry, index) in parsedTimeline.toReversed()" :key="index">
          <li class="flex items-center gap-4 m-0 py-1 my-1 transition-colors duration-500">
            <span class="min-w-14 text-right" v-if="entry.time">{{ entry.time }}</span>
            <span class="min-w-14 text-cyan-400 text-right" v-else>⎯</span>
            <span>{{ entry.description }}</span>
          </li>
          <li v-if="index!=parsedTimeline.length - 1" class="m-0 p-0 border-solid border border-gray-700" aria-hidden="true"></li>
        </template>
      </ul>
    </div>
  </div>
</template>