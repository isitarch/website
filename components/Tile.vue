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
    <QuoteTile :quote="content" v-else-if="type==='quote'" />
</template>