<script setup lang="ts">
const props = defineProps({
  /**
   * Thing to render.
   */
  content: {
    type: Object,
  },
  /**
   * Type of thing to render.
   */
  type: {
    type: String,
  }
})

const hide = ref(true)
</script>

<template>
    <PresentationTile :post="content" v-if="type==='presentation'" />
    <RandomQuoteTile v-else-if="type==='randomQuote'" />
    <ContentTeaserTile v-else-if="type==='contentTeaser'" />
    <SuggestTopicTile v-else-if="type==='suggestTopic'" />
    <UpcomingStreamTile v-else-if="type==='upcomingStream'" />
</template>