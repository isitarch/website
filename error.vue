<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})
</script>

<template>
    <NuxtLayout name="error" :error="error">
    </NuxtLayout>
</template>