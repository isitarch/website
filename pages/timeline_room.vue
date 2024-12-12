<script lang="ts" setup>
const route = useRoute()
const roomName = route.query.room as string || 'default-room'
const roomPassword = route.query.password as string || undefined
const room = createRoom(roomName, roomPassword)

const youtubeLink = ref("")
const videoTitle = ref("")
const speaker = ref("")
const markdownInput = ref("")

const convertTimeInput = (input: string) => {
  if (!input.includes(':')) return '' // non valid input

  let [minutes, seconds] = input.split(":")
  if (!Number.parseInt(seconds)) { // just the minutes
    return Number.parseInt(input).toString() + ':00'
  }

  if (Number.parseInt(minutes) && Number.parseInt(seconds)) {
    seconds = ('0' + Number.parseInt(seconds)).slice(-2)
    minutes = Number.parseInt(minutes).toString()
  } else if (Number.parseInt(minutes) && !seconds) {
    seconds = '00'
    minutes = Number.parseInt(minutes).toString()
  }
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

const [sendTimeline, getTimeline] = room.makeAction('timeline')
getTimeline((data: any) => {
  if ('youtubeLink' in data) youtubeLink.value = data.youtubeLink
  if ('videoTitle' in data) videoTitle.value = data.videoTitle
  if ('speaker' in data) speaker.value = data.speaker
  if ('markdownInput' in data) markdownInput.value = data.markdownInput
})
</script>

<template>
  <div class="w-screen h-screen flex items-stretch justify-stretch">
  <div class="border bg-gray-800 border-gray-700 rounded p-8 m-4 w-full">
    <h2 class="text-2xl text-cyan-400 leading-tight mb-1">{{ videoTitle }}</h2>
    <div class="mb-4 text-sm text-gray-400"><span v-if="speaker">von {{ speaker }}</span></div>
    <ul class="space-y-2">
      <li v-for="(entry, index) in parsedTimeline" :key="index" class="flex items-center gap-4">
        <span class="w-14 text-right" v-if="entry.time">{{ entry.time }}</span>
        <span class="w-14 text-cyan-400 text-right" v-else>⎯</span>
        <span class="font-bold">{{ entry.description }}</span>
      </li>
    </ul>
  </div>
  </div>
</template>