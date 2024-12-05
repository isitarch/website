<script setup lang="ts">
const { t, locale } = useI18n()
const router = useRouter()

const props = defineProps({
  error: Object as () => NuxtError
})

const goHome = async () => {
  await navigateTo(`/${locale.value}`, {
    external: true
  })
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center bg-gray-900 text-gray-300 px-6" style="min-height: 100vh;">
      <h1 class="text-6xl font-bold text-cyan-400 mb-4">{{ error.statusCode }}</h1>
      <h2 class="text-2xl font-semibold mb-6">{{ t('errors.not_found') }}</h2>
      <p class="text-center max-w-lg mb-8">
        {{ t('errors.description_not_found') }}
      </p>
      <p class="text-center max-w-lg mb-8 text-xs">
        <slot />
      </p>
      <NuxtLink @click="goHome"
        class="bg-cyan-400 hover:bg-cyan-300 text-gray-900 px-4 py-2 rounded font-bold transition">
        {{ t('errors.go_home') }}
      </NuxtLink>
      <img src="/assets/images/404-illustration.gif" :alt="t('errors.404_illustration')"
        class="mt-12 max-w-md opacity-80" />
    </div>
  </div>
</template>
