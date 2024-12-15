<script lang="ts" setup>
const props = defineProps({
  /**
   * Content array to display in each tile.
   */
  tiles: {
    type: Array
  }
})
</script>
<template>
  <div>
    <div v-if="tiles" class="grid grid-cols-3 content-start gap-8">
      <div class="flex flex-col gap-8 column-1">
        <slot name="hero"></slot>
        <div v-for="(tile, index) in tiles.filter((_, index) => (index - 2) % 3 === 0)" :key="index"
          class="break-inside-avoid-column">
          <slot :tile="tile" name="content"></slot>
        </div>
      </div>
      <div :class="`flex flex-col gap-8 column-${columnIndex}`" v-for="columnIndex in [0, 1]" :key="columnIndex">
        <div v-for="(tile, index) in tiles.filter((_, index) => (index - columnIndex) % 3 === 0)" :key="index"
          class="break-inside-avoid-column">
          <slot :tile="tile" name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>