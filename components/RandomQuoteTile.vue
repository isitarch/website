<template>
  <QuoteTile v-if="randomQuote" :quote="randomQuote" />
  <div v-else></div>
</template>

<script lang="ts" setup>
const { data: presentations } = await useAsyncData('presentations', () => queryCollection('presentations').all())
const quotes = computed(() => !presentations.value ? [] : presentations.value.map(pr => pr.quotes?.map(q => { return { ...q, presentation: pr.title } })).reduce((q1, q2) => q1.concat(q2), []))
const randomQuote = computed(() => quotes.value?.length > 0 ? quotes.value[Math.floor(Math.random() * quotes.value.length)] : undefined)
</script>
