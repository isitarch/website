<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const { t, locale } = useI18n()
const page = ref()
watchEffect(async () => {
  const data = await queryCollection('pages').path(route.path).first()  
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
})
</script>

<template>
  <div class="prose prose-invert mx-auto py-12">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
