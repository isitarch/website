<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="border bg-gray-800 border-gray-700 rounded p-4 text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-300">
    <h3 class="text-lg font-bold text-cyan-400">{{t('tile.next_live_title') }}</h3>
    <p class="text-sm text-gray-400 mt-2">
      {{ t('tile.next_live_body') }}
    </p>
    <NuxtLink href="https://twitch.tv/isitarch" target="_blank" class="mt-4 inline-block bg-indigo-600 px-3 py-2 rounded text-white hover:bg-indigo-500">
      {{ t('tile.next_live_button') }}
    </NuxtLink>
  </div>
</template>