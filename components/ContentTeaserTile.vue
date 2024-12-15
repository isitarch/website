<script setup lang="ts">
const { t, locale } = useI18n()
const randomPostPath = ref()
watchEffect(async () => {
  const posts = await queryCollection('posts')
    .where('path', 'LIKE', `/${locale.value}/posts/%`)
    .all()
  if (posts && posts.length) {
    randomPostPath.value = posts[Math.floor(Math.random() * posts.length)].path
  } else {
    randomPostPath.value = undefined
  }
})
</script>

<template>
  <div class="border bg-gray-800 border-gray-700 rounded p-4 text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-300">
    <h1 class="text-xl font-bold mb-3">{{ t('tile.content_teaser_title') }}</h1>
    <p class="text-sm mb-4">{{ t('tile.content_teaser_body') }}</p>
    <div class="flex justify-center gap-4 mt-4">
      <NuxtLink :to="{path: randomPostPath}" class="mt-4 inline-block bg-indigo-600 px-3 py-2 rounded text-white hover:bg-indigo-500">
        {{ t('buttons.random') }}
      </NuxtLink>
    </div>
  </div>
</template>