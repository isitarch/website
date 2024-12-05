<script setup lang="ts">
const props = defineProps({
  /**
   * Quote to render.
   */
  quote: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        typeof value.text === 'string' &&
        typeof value.author === 'string' &&
        typeof value.presentation === 'string' &&
        typeof value.link === 'string'
      )
    },
  },
})
const { t } = useI18n()
</script>

<template>
  <div class="border bg-gray-800 border-gray-700 rounded hover:bg-gray-700 hover:scale-105 transition-transform duration-300 p-4 flex flex-col">
    <blockquote class="italic text-gray-200">
      "{{ quote.text }}"
    </blockquote>
    <div class="mt-3 text-sm text-gray-400">
      <span v-if="quote.author">— {{ quote.author }}</span>
    </div>
    <div class="mt-2 text-sm text-gray-500" v-if="quote.presentation">
        {{ t('quotes.in', {title: quote.presentation}) }}
    </div>
    <div class="mt-2 flex items-center justify-end text-sm">
      <NuxtLink
        :to="quote.link"
        class="text-cyan-400 hover:text-cyan-200"
        target="_blank"
      >
        {{t('buttons.watch')}} ↗
      </NuxtLink>
    </div>
  </div>
</template>