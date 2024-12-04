<script setup lang="ts">
const { locale, t } = useI18n()
const router = useRouter()
const route = useRoute()

const { data: page, refresh } = await useAsyncData(async () => {
  const data = await queryCollection('knowledge').path(route.path).first()
  if (!data) {
    router.push({path: '/404'})
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }
  return data
})
watchEffect(() => {//update data on language change
  locale.value
  refresh()
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <div v-if="page" class="max-w-4xl mx-auto px-6">
    <h1 class="text-4xl font-bold text-cyan-400 mb-6">{{ page.title }}</h1>

    <div class="text-sm text-gray-400 mb-4">
      {{ t('knowledge.published_on', { date: new Date(page.createdAt).toLocaleDateString(locale.value, { year: 'numeric', month: 'long', day: 'numeric' }) }) }}
    </div>

    <div class="prose prose-invert">
      <ContentRenderer v-if="page" :value="page" />
    </div>
  </div>
</template>