<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const {locale, t} = useI18n()
const knowledgePages = ref(await queryCollection('knowledge')
    .where('path', 'LIKE', `/${locale.value}/%`)
    .all())
watchEffect(async () => {
  const data = await queryCollection('knowledge')
    .where('path', 'LIKE', `/${locale.value}/%`)
    .all()
  
    knowledgePages.value = data
})
useSeoMeta({
  title: t('menu.knowledge')
})
</script>

<template>
  <div class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 my-8">
    <div v-for="page in knowledgePages" :key="page.id"
      class="border relative bg-gray-800 border-gray-700 rounded hover:bg-gray-700 hover:scale-105 transition-transform duration-300 p-4 mb-8 break-inside-avoid-column">
      <h2 class="mb-4">{{ page.title }}</h2>
      <p>
        {{ page.description }}
      </p>
      <NuxtLink
        :to="page.path"
        class="text-cyan-400 hover:text-cyan-200">
        {{ t('buttons.learn_more') }}
      </NuxtLink>
    </div>
  </div>
</template>


<style></style>