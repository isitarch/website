<script setup lang="ts">
useServerHead({
  htmlAttrs: { lang: 'de' },
})
useSeoMeta({
  titleTemplate: 'IsItArch | %s',
  description: 'Wir schauen gemeinsam Konferenzvoträge zu Software Architektur, Domain-Driven Design und vielem mehr.'
})
</script>

<template>
  <DefaultHeader />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
/* body {
  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));
  color: rgb(229 231 235 / var(--tw-text-opacity, 1));
} */
</style>