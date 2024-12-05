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
