<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const query = queryCollection('posts')
  .where('publishedAt', '<', new Date().toISOString())
const { data: posts } = await useAsyncData('posts', () => query.all())
const post = computed(() => posts.value[Math.floor(Math.random() * posts.value?.length)])
const { t } = useI18n()
</script>

<template>
  <div class="border bg-indigo-600 text-white rounded hover:bg-indigo-500 hover:scale-105 transition-transform duration-300 p-6 text-center">
    <h1 class="text-xl font-bold mb-3">{{ t('welcome') }}</h1>
    <p class="text-sm mb-4">{{ t('description') }}</p>
    <div class="flex justify-center gap-4 mt-4">
        <NuxtLink
          :to="post.path"
          class="inline-block bg-white text-indigo-600 px-4 py-2 rounded font-bold hover:text-indigo-500"
        >
        {{ t('buttons.random') }}
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="text-cyan-400 hover:text-cyan-200 px-4 py-2 text-sm font-bold"
      >
        {{ t('buttons.learn_more') }}
      </NuxtLink>
    </div>
  </div>
</template>