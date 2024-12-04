<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const { t } = useI18n()
const page = ref()
const $t = t

watchEffect(async () => {
  const data = await queryCollection('pages').path(route.path).first()  
  if (!data) {
    router.push({path: '/404'})
  }
  page.value = data
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <div class="prose prose-invert mx-auto py-12">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
