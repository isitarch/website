<script setup lang="ts">
const { locale, t } = useI18n()
const route = useRoute()
const clean = computed(() => !!route.query?.clean)
watchEffect(() => {
  if (!!locale.value) {
    useServerHead({
      htmlAttrs: { lang: locale.value },
    })
  }
  useSeoMeta({
    titleTemplate: 'IsItArch | %s',
    description: t('seo.description')
  })
})

</script>

<template>
  <DefaultHeader v-if="!clean" />
  <NuxtLayout :name="clean ? 'clean' : 'default'">
    <NuxtPage />
  </NuxtLayout>
  <DefaultFooter v-if="!clean" />
</template>


