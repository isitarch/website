<script lang="ts" setup>
const { locale, t } = useI18n()
const knowledgePages = ref()
watchEffect(async () => {
  const data = await queryCollection('knowledge')
    .where('path', 'LIKE', `/${locale.value}/%`)
    .order('createdAt', 'ASC')
    .all()

  knowledgePages.value = data
})
useSeoMeta({
  title: t('menu.knowledge-base')
})
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold text-cyan-400 mb-8">{{ t('knowledge-base.title') }}</h1>
    <div class="columns-2 md:columns-3 lg:columns-4 gap-8">
      <KnowledgeTile v-for="page in knowledgePages" :key="page.id" :page="page"
        class="break-inside-avoid-column"></KnowledgeTile>
    </div>
  </div>
</template>


<style></style>