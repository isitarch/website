<script setup lang="ts">
const { locale, t } = useI18n()
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
  <DefaultHeader />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <DefaultFooter />
</template>


