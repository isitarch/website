<script setup lang="ts">
const { locale, t } = useI18n()
const pages = computed(() => [
  {
    id: 'privacy',
    title: t('menu.privacy'),
    path: `/${locale.value}/privacy`,
  },
  {
    id: 'impress',
    title: t('menu.impress'),
    path: `/${locale.value}/impress`,
  },
])
</script>

<template>
  <footer class="mt-10">
    <div class="pt-10">
      <nav class="bg-black text-white">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="flex h-12 items-center justify-center">
            <div>
              {{ t('copyright') }}
            </div>
            <NuxtLink :to="page.path" v-for="page in pages" :key="page.id"
              class="ms-4 text-cyan-400 hover:text-cyan-200">
              {{ page.title }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>