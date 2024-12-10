<script setup lang="ts">
const { t } = useI18n()
const props = defineProps({
  /**
   * Knowledge page to render.
   */
  page: {
    type: Object,
  }
})
</script>

<template>
  <article v-if="page"
    class="flex flex-col border bg-gray-800 border-gray-700 rounded hover:bg-gray-700 hover:scale-105 transition-transform duration-300 p-4 mb-8">
    <h2 class="leading-tight">
      <NuxtLink :to="page.path" class="text-cyan-400 hover:text-cyan-200">{{ page.title }}</NuxtLink>
    </h2>
    <p class="text-gray-400 mt-2 line-clamp-4">
      {{ page.description }}
    </p>
    <p class="text-end mt-3">
      <NuxtLink :to="page.path" class="font-bold hover:text-gray-600">➜ {{ t('buttons.learn_more') }}</NuxtLink>
    </p>
  </article>
</template>