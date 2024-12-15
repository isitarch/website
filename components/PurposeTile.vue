<script setup lang="ts">
const { t, locale } = useI18n()
</script>

<template>
  <div
    class="border bg-indigo-600 text-white rounded hover:bg-indigo-500 hover:scale-105 transition-transform duration-300 p-6 text-center">
    <h1 class="text-xl font-bold mb-3">{{ t('tile.welcome_title') }}</h1>
    <p class="text-sm mb-4">{{ t('tile.welcome_description') }}</p>
    <div class="flex justify-center gap-4 mt-4">
      <NuxtLink :to="{path: 'about'}" class="inline-block bg-white text-indigo-600 px-4 py-2 rounded font-bold hover:text-indigo-500">
        {{ t('buttons.learn_more') }}
      </NuxtLink>
    </div>
  </div>
</template>