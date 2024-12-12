<script lang="ts" setup>
const youtubeLink = ref(localStorage.getItem("youtubeLink") || "")
const videoTitle = ref(localStorage.getItem("videoTitle") || "")
const speaker = ref(localStorage.getItem("speaker") || "")
const markdownInput = ref(localStorage.getItem("markdownInput") || "")

const convertTimeInput = (input: String) => {
  if (input.includes(':')) {
    let [minutes, seconds] = input.split(":")
    if (Number.parseInt(minutes) && Number.parseInt(seconds)) {
      seconds = ('0' + Number.parseInt(seconds)).slice(-2)
      minutes = Number.parseInt(minutes).toString()
    } else if (Number.parseInt(minutes) && !seconds) {
      seconds = '00'
      minutes = Number.parseInt(minutes).toString()
    }
    return minutes + ':' + seconds
  } else if (Number.parseInt(input)) {
    return Number.parseInt(input).toString() + ':00'
  } else {
    return ''
  }
}
const parsedTimeline = computed(() => {
  return !markdownInput.value ? [] : markdownInput.value
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const [time, ...descriptionParts] = line.split(" ")
      let formattedTime, description
      description = descriptionParts.join(" ").trim()
      formattedTime = convertTimeInput(time)
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
watchEffect(() => {
  localStorage.setItem("youtubeLink", youtubeLink.value);
})
watchEffect(() => {
  localStorage.setItem("markdownInput", markdownInput.value)
})
watchEffect(() => {
  localStorage.setItem("videoTitle", videoTitle.value)
})
watchEffect(() => {
  localStorage.setItem("speaker", speaker.value)
})

const convertTimeToSeconds = (time) => {
  const [minutes, seconds] = time.split(":").map(Number)
  return minutes * 60 + seconds
}

const downloadAsJSON = () => {
  const timelineData = {
    youtubeLink: youtubeLink.value,
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
  if (confirm("Möchtest du die Zeitleiste wirklich löschen?")) {
    youtubeLink.value = "";
    markdownInput.value = "";
    localStorage.removeItem("youtubeLink");
    localStorage.removeItem("markdownInput");
  }
}
</script>

<template>
  <div class="p-4 space-y-6">
    <div class="grid grid-cols-2 gap-8">
      <!-- Vorschau -->
      <div class="border bg-gray-800 border-gray-700 rounded p-8">
        <h2 class="text-2xl text-cyan-400 leading-tight mb-1">{{ videoTitle }}</h2>
        <div class="mb-4 text-sm text-gray-400"><span v-if="speaker">von {{ speaker }}</span></div>
        <ul class="space-y-2">
          <li v-for="(entry, index) in parsedTimeline" :key="index" class="flex items-center gap-4">
            <span class="w-14 text-right" v-if="entry.time">{{ entry.time }}</span>
            <span class="w-14 text-cyan-400 text-right" v-else>⎯</span>
            <span class="font-bold">{{ entry.description_de }}</span>
          </li>
        </ul>
      </div>

      <!-- Eingabe -->
      <div class="border bg-gray-800 border-gray-700 rounded p-8">
        <div class="grid grid-cols-2 items-center gap-1 mb-4" style="grid-template-columns: min-content 1fr">
          <label for="video-title" class="block font-medium me-4">Titel</label>
          <input v-model="videoTitle" id="video-title" type="text" class="bg-gray-800 w-full p-2 border rounded-lg"
            placeholder="The interesection of..." />
          <label for="speaker" class="block font-medium me-4">Speaker</label>
          <input v-model="speaker" id="speaker" type="text" class="bg-gray-800 w-full p-2 border rounded-lg"
            placeholder="Carola..." />
          <label for="youtube-link" class="block font-medium me-4">Link</label>
          <input v-model="youtubeLink" id="youtube-link" type="url" class="bg-gray-800 w-full p-2 border rounded-lg"
            placeholder="https://www.youtube.com/watch?v=..." />
        </div>
        <label for="timeline-input" class="block font-medium mb-2">Zeitleiste (Markdown)</label>
        <textarea v-model="markdownInput" id="timeline-input" class="bg-gray-800 w-full h-40 p-2 border rounded-lg"
          placeholder="1:20 Einführung ins Thema\n3:20 Absicherung mit Zapfenströsel"></textarea>
      </div>
    </div>

    <!-- Aktionen -->
    <div class="flex gap-4">
      <button @click="downloadAsJSON" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        JSON exportieren
      </button>
      <button @click="clearTimeline" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Zeitleiste löschen
      </button>
    </div>
  </div>
</template>