<script lang="ts" setup>
const route = useRoute()
const {locale, t} = useI18n()
const props = defineProps({
  /**
   * Content array to display in each tile.
   */
   categorizedThing: {
    type: Array
  }
})

const filterCategories = computed(() => {
  return route.query.categories ? route.query.categories.split(',') : []
})
const categoriesToCount = computed(() =>
  props.categorizedThing.reduce((a, p) => {
    p.categories?.forEach(c => {
      if (!(c in a)) {
        a[c] = {key: c, label: t(c), count: 0}
      }
      a[c].count = ++a[c].count
    })
    return a
  }, {})
  
)

const toggleCategory = (category: String) => {
  if (filterCategories.value.includes(category)) {
    navigateTo({ name: route.name, query: { ...route.query, categories: filterCategories.value.filter(c => c !== category).join(',') } })
  } else {
    navigateTo({ name: route.name, query: { ...route.query, categories: [...filterCategories.value, category].join(',') } })
  }
}
</script>

<template>
  <div class="flex flex-wrap justify-center my-4">
    <button v-for="category in Object.values(categoriesToCount).sort((a,b) => a.label.localeCompare(b.label))" :key="category.key" @click="toggleCategory(category.key)"
      :class="'px-2 py-1 m-1 border rounded-md text-xs transition duration-300 ease-in-out border-gray-700 ' + (filterCategories.includes(category.key) ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'text-gray-600 hover:text-gray-400 text-white')">
      {{ category.label }} ({{ category.count }})
    </button>  
  </div>    
</template>