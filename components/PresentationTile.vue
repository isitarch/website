<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const props = defineProps({
  /**
   * Post to render.
   */
  post: {
    type: Object,
  }
})
const hide = ref(true)
const newRange = 7 * 24 * 60 * 60 * 1000 // = 7 days
const isNewPost = computed(() => Date.now() - Date.parse(props.post?.publishedAt) < newRange)
</script>

<template>
  <div v-if="post"
    class="border bg-gray-800 border-gray-700 rounded hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
    @mouseenter="hide = false" @mouseleave="hide = true">
    <div class="relative">
      <img :src="post.image" v-if="post.image" :alt="post.title" />
      <div class="absolute inset-x-0 inset-y-0 flex flex-wrap items-center justify-center overflow-hidden" v-if="!hide">
        <div class="flex flex-wrap justify-center">
          <NuxtLink :to="{ path: route.path, query: { categories: category } }" v-for="category in post.categories"
            :key="category"
            class="opacity-80 hover:opacity-100 rounded m-1 px-2 py-1 text-sm bg-indigo-600 hover:bg-indigo-500 text-white">
            {{ t(category) }}</NuxtLink>
        </div>
      </div>
      <div
        class="absolute top-2 right-3 px-1 rounded flex transition-transform duration-300 hover:scale-110 bg-white text-black"
        v-if="!hide">
        <NuxtLink :to="post.path" class="font-bold text-xs hover:text-gray-600">➜ {{ t('buttons.learn_more') }}
        </NuxtLink>
      </div>
      <div v-if="isNewPost" class="absolute top-0 left-0 px-2 bg-red-700 text-white -rotate-12">{{ t('tile.new') }}
      </div>
    </div>
    <div class="p-2 leading-tight">
      <NuxtLink :to="post.path" class="text-cyan-400 hover:text-cyan-200">{{ post.title }}</NuxtLink>
      <div v-if="post.speaker" class="mt-3 text-sm text-gray-400">
        <span>{{ post.speaker }}</span>
        <div class="mt-1 text-sm text-gray-500" v-if="post.conference">
          {{ post.conference }}
        </div>
      </div>
    </div>
  </div>
</template>