<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-gray-900 text-gray-300 px-6">
    <h1 class="text-6xl font-bold text-cyan-400 mb-4">404</h1>
    <h2 class="text-2xl font-semibold mb-6">{{ t('errors.not_found') }}</h2>
    <p class="text-center max-w-lg mb-8">
      {{ t('errors.description_not_found') }}
    </p>
    <NuxtLink
      to="/"
      class="bg-cyan-400 hover:bg-cyan-300 text-gray-900 px-4 py-2 rounded font-bold transition"
    >
      {{ t('errors.go_home') }}
    </NuxtLink>
    <img
      src="/assets/images/404-illustration.gif"
      :alt="t('errors.404_illustration')"
      class="mt-12 max-w-md opacity-80"
    />
  </div>
</template>
