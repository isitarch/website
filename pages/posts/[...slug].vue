<script setup lang="ts">
const { t, d, locale } = useI18n()
const route = useRoute()
const page = ref()
const presentation = ref()

watchEffect(async () => {
  if (!locale.value) return
  const data = await queryCollection('posts').path(route.path).first()
  if (!data) {
    throw createError({
        statusCode: 404,
        statusMessage: t('errors.path_not_found', {path: route.path})
    })
  }
  page.value = data

  useSeoMeta({
    title: page.value?.title,
    description: page.value?.description
  })

  const matchingPresentation = await queryCollection('presentations').where('visit', '=', page.value.visit).first()
  if (!matchingPresentation) {
    throw createError({
        statusCode: 404,
        statusMessage: t('errors.path_not_found', {path: route.path})
    })
  }
  presentation.value = matchingPresentation
})
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- header -->
    <div class="border-b border-gray-700 pb-4 mb-6">
      <h1 class="text-3xl font-bold text-cyan-400 mb-2">{{ page?.title }}</h1>
      <p class="text-sm text-gray-400">Von {{ page?.speaker }} auf {{ page?.conference }}</p>
      <p class="text-sm text-gray-500 mt-1" v-if="presentation?.publicationdate"> {{ t('date.published', {
        date: d(new
          Date(presentation?.publicationdate), { dateStyle: 'long' }) }) }}
      </p>
    </div>

    <!-- main content -->
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- left col -->
      <div class="flex-1">
        <!-- img -->
        <div class="mb-4">
          <img :src="presentation.image" class="rounded shadow-md" :alt="presentation.meta['image_' + locale.toLowerCase()]" v-if="presentation" />
        </div>

        <!-- desc -->
        <div class="prose prose-invert max-w-none">
          <ContentRenderer v-if="page" :value="page" />
        </div>
      </div>

      <!-- right col -->
      <div class="flex-1 space-y-6">
        <!-- key points -->
        <div v-if="presentation?.keyPoints" class="p-4 bg-gray-800 rounded shadow-md">
          <h3 class="text-lg font-semibold text-cyan-400 mb-2">Wichtige Punkte</h3>
          <ul class="list-disc list-inside text-gray-200">
            <li v-for="(point, index) in presentation.keyPoints" :key="index">
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- timeline -->
        <div v-if="presentation?.timeline?.length" class="p-4 bg-gray-800 rounded shadow-md">
          <h3 class="text-lg font-semibold mb-2">Zeitleiste</h3>
          <ul class="space-y-3">
            <li v-for="(event, index) in presentation.timeline" :key="index" class="flex">
              <a :href="event.link" target="_blank" class="font-semibold text-cyan-400 me-2 hover:underline text-sm">{{ event.time }}</a>
              <span class="text-gray-200">{{ event['description_' + locale] }}</span>
            </li>
          </ul>
        </div>

        <!-- quotes -->
        <div v-if="presentation?.quotes?.length" class="p-4 bg-gray-800 rounded shadow-md">
          <h3 class="text-lg font-semibold mb-2">Zitate</h3>
          <ul class="space-y-3">
            <li v-for="(quote, index) in presentation.quotes" :key="index">
              <blockquote class="italic text-gray-200">
                “{{ quote.text }}”
              </blockquote>
              <p class="text-sm text-gray-400">
                <a :href="quote.link" target="_blank" class="text-cyan-400 hover:underline">
                  {{ quote.time }}
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- references -->
    <div v-if="presentation?.references?.length" class="mt-8 p-4 bg-gray-800 rounded shadow-md">
      <h3 class="text-lg font-semibold mb-2">Referenzen</h3>
      <ul class="space-y-4">
        <li v-for="(reference, index) in presentation.references" :key="index" class="border-t border-gray-700 pt-4">
          <h4 class="font-semibold text-gray-200">{{ reference.title }}</h4>
          <p v-if="reference.author" class="text-sm text-gray-400">Von: {{ reference.author }}</p>
          <p class="text-sm text-gray-500">{{ reference['description_' + locale] }}</p>
          <a v-if="reference.link" :href="reference.link" target="_blank" class="text-cyan-400 hover:underline text-sm">
            Mehr erfahren →
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>