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
    <div v-if="tiles" class="grid grid-cols-4 content-start gap-8">
      <div class="col-span-2 flex flex-col gap-8">
        <slot name="hero"></slot>
        <div class="columns-2 gap-8">
          <div class="flex flex-col gap-8" v-for="columnIndex in [2, 3]" :key="columnIndex">
            <div v-for="tile in tiles.filter((_, index) => (index - columnIndex) % 4 === 0)" :key="tile.id"
              class="break-inside-avoid-column">
              <slot :tile="tile" name="content"></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-8" v-for="columnIndex in [0, 1]" :key="columnIndex">
        <div v-for="tile in tiles.filter((_, index) => (index - columnIndex) % 4 === 0)" :key="tile.id"
          class="break-inside-avoid-column">
          <slot :tile="tile" name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>