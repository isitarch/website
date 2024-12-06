<script setup lang="ts">
clearError()

const route = useRoute()
const router = useRouter()
const {locale, t} = useI18n()
const rawPosts = ref([])
watchEffect(async () => {
  const data = await queryCollection('posts')
    .where('path', 'LIKE', `/${locale.value}/posts/%`)
    .all()
  
  rawPosts.value = data || []
})

const { data: presentations } = await useAsyncData('presentations', () => queryCollection('presentations').all())
const posts = computed(() => rawPosts.value.map(p => {
  const presentation = presentations.value.filter(pr => p.visit === pr.visit)[0] || {}
  return {
    ...p,
    ...presentation
  }
}))

const filterCategories = computed(() => {
  return route.query.categories ? route.query.categories.split(',') : []
})
const categoriesToCount = computed(() =>
  posts.value.reduce((a, p) => {
    p.categories?.forEach(c => {
      if (!(c in a)) {
        a[c] = {key: c, label: t(c), count: 0}
      }
      a[c].count = ++a[c].count
    })
    return a
  }, {})
  
)
const filteredPosts = computed(() => posts.value.filter(p => filterCategories.value.length === 0 || filterCategories.value.filter(c => p.categories.includes(c)).length !== 0))

const quotes = computed(() => presentations.value.map(pr => pr.quotes?.map(q=>{return {...q, presentation: pr.title}})).reduce((q1, q2) => q1.concat(q2), []))
const INSERT_QUOTE_EVERY_N_TILES = 7
const tiles = computed(() => {
  let tiles = [...filteredPosts.value.map(p => {return {id: p.id, content: p, type: 'presentation'}})]
  if (quotes.value.length > 0) {
    for (let i = 0; i < filteredPosts.value.length; i+=INSERT_QUOTE_EVERY_N_TILES) {
      const quote = quotes.value[Math.floor(Math.random() * quotes.value.length)]
      tiles.splice(3+i*INSERT_QUOTE_EVERY_N_TILES,0,{id: quote.link, content: quote, type: 'quote'})
    }
  }
  return tiles
})

const toggleCategory = category => {
  if (filterCategories.value.includes(category)) {
    router.push({ name: route.name, query: { ...route.query, categories: filterCategories.value.filter(c => c !== category).join(',') } })
  } else {
    router.push({ name: route.name, query: { ...route.query, categories: [...filterCategories.value, category].join(',') } })
  }
}
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-center my-4">
      <button v-for="category in Object.values(categoriesToCount).sort((a,b) => a.label.localeCompare(b.label))" :key="category.key" @click="toggleCategory(category.key)"
        :class="'px-2 py-1 m-1 border rounded-md text-xs transition duration-300 ease-in-out border-gray-700 ' + (filterCategories.includes(category.key) ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'text-gray-600 hover:text-gray-400 text-white')">
        {{ category.label }} ({{ category.count }})
      </button>
    </div>
    <!-- LARGE DISPLAYS -->
    <div class="hidden lg:grid grid-cols-4 content-start gap-8">
      <div class="col-span-2 flex flex-col gap-8">
        <PurposeTile />
        <div class="columns-2 gap-8">
          <div class="flex flex-col  gap-8" v-for="columnIndex in [2, 3]" :key="columnIndex">
            <Tile v-for="tile in tiles.filter((_, index) => (index - columnIndex) % 4 === 0)" :key="tile.id"
              :content="tile.content" :type="tile.type" class="break-inside-avoid-column"></Tile>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-8" v-for="columnIndex in [0, 1]" :key="columnIndex">
        <Tile v-for="tile in tiles.filter((_, index) => (index - columnIndex) % 4 === 0)" :key="tile.id"
          :content="tile.content" :type="tile.type" class="break-inside-avoid-column"></Tile>
      </div>
    </div>
    <!-- MEDIUM DISPLAYS -->
    <div class="hidden sm:grid lg:hidden grid-cols-3 content-start gap-8">
      <div class="col-span-2 flex flex-col gap-8">
        <PurposeTile />
        <div class="columns-2 gap-8">
          <div class="flex flex-col  gap-8" v-for="columnIndex in [1, 2]" :key="columnIndex">
            <Tile v-for="tile in tiles.filter((_, index) => (index - columnIndex) % 3 === 0)" :key="tile.id"
              :content="tile.content" :type="tile.type" class="break-inside-avoid-column"></Tile>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-8" v-for="columnIndex in [0]" :key="columnIndex">
        <Tile v-for="tile in tiles.filter((_, index) => (index - columnIndex) % 3 === 0)" :key="tile.id"
          :content="tile.content" :type="tile.type" class="break-inside-avoid-column text-sm"></Tile>
      </div>
    </div>
    <!-- SMALL DISPLAYS -->
    <div class="grid sm:hidden grid-cols-2 content-start gap-8">
      <div class="col-span-2 flex flex-col gap-8">
        <PurposeTile />
        <div class="columns-2 gap-8">
          <div class="flex flex-col gap-8" v-for="columnIndex in [0, 1]" :key="columnIndex">
            <Tile v-for="tile in tiles.filter((_, index) => (index - columnIndex) % 2 === 0)" :key="tile.id"
              :content="tile.content" :type="tile.type" class="break-inside-avoid-column text-xs"></Tile>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
