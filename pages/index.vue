<script setup lang="ts">
clearError()

const route = useRoute()
const { locale, t } = useI18n()
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
const filteredPosts = computed(() => posts.value.filter(p => filterCategories.value.length === 0 || filterCategories.value.filter(c => p.categories.includes(c)).length !== 0))

const quotes = computed(() => presentations.value.map(pr => pr.quotes?.map(q => { return { ...q, presentation: pr.title } })).reduce((q1, q2) => q1.concat(q2), []))
const INSERT_QUOTE_EVERY_N_TILES = 7
const tiles = computed(() => {
  let tiles = [...filteredPosts.value.map(p => { return { id: p.id, content: p, type: 'presentation' } })]
  if (quotes.value.length > 0) {
    for (let i = 0; i < filteredPosts.value.length; i += INSERT_QUOTE_EVERY_N_TILES) {
      const quote = quotes.value[Math.floor(Math.random() * quotes.value.length)]
      tiles.splice(3 + i * INSERT_QUOTE_EVERY_N_TILES, 0, { id: quote.link, content: quote, type: 'quote' })
    }
  }
  return tiles
})

useSeoMeta({
  title: t('menu.home')
})
</script>

<template>
  <div>
    <CategoriesFilter :categorizedThing="posts"></CategoriesFilter>
    <!-- LARGE DISPLAYS -->
    <FourColumnsWithHero :tiles="tiles" class="hidden lg:block">
      <template #hero>
        <PurposeTile />
      </template>
      <template #content="{ tile }">
        <Tile :content="tile.content" :type="tile.type" class="break-inside-avoid-column"></Tile>
      </template>
    </FourColumnsWithHero>
    <!-- MEDIUM DISPLAYS -->
    <ThreeColumnsWithHero :tiles="tiles" class="hidden sm:block lg:hidden">
      <template #hero>
        <PurposeTile />
      </template>
      <template #content="{ tile }">
        <Tile :content="tile.content" :type="tile.type" class="break-inside-avoid-column"></Tile>
      </template>
    </ThreeColumnsWithHero>
    <!-- SMALL DISPLAYS -->
    <TwoColumnsWithHero :tiles="tiles" class="block sm:hidden">
      <template #hero>
        <PurposeTile />
      </template>
      <template #content="{ tile }">
        <Tile :content="tile.content" :type="tile.type" class="break-inside-avoid-column"></Tile>
      </template>
    </TwoColumnsWithHero>
  </div>
</template>
