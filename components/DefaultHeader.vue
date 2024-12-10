<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const { locale, availableLocales, t } = useI18n()
const showMenu = ref(false)

const pages = computed(() => [
  {
    id: 'home',
    title: t('menu.home'),
    path: `/${locale.value}/`,
  },
  {
    id: 'about',
    title: t('menu.about'),
    path: `/${locale.value}/about`,
  },
  {
    id: 'contact',
    title: t('menu.contact'),
    path: `/${locale.value}/contact`,
  },
])

watchEffect(async () => {
  router.push({
    path: route.path.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, `/${locale.value}`),
    query: route.query || {},
  })
})
</script>

<template>
  <header class="header">
    <nav class="bg-black text-white">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button" @click="showMenu = !showMenu"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Öffne Hauptmenü</span>
              <svg v-if="!showMenu" class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg v-if="showMenu" class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="ml-10 flex shrink-0 items-center justify-center">
              <NuxtImg src="/assets/images/logo.png" class="h-8 w-auto" alt="Logo green field"></NuxtImg>
            </div>
            <div class="hidden sm:ml-auto sm:block">
              <div class="flex ">
                <NuxtLink v-for="page in pages" :key="page.id" :to="page.path"
                  class="rounded-md px-3 py-2 text-sm text-stone-200 hover:text-white" activeClass="active">
                  {{ page.title }}
                </NuxtLink>
              </div>
            </div>
            <div class="hidden sm:block sm:ml-4 flex justify-end">
              <select v-model="locale" class="bg-gray-800 text-gray-200 rounded p-2">
                <option v-for="lang in availableLocales" :key="lang" :value="lang">
                  {{ t('template.' + lang.toLowerCase()) }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu" v-if="showMenu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <NuxtLink v-for="page in pages" :key="page.id" :to="page.path"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            activeClass="bg-gray-900 text-white">
            {{ page.title }}
          </NuxtLink>
            <div class="flex justify-center">
              <select v-model="locale" class="text-center bg-gray-800 text-gray-200 rounded p-2">
                <option v-for="lang in availableLocales" :key="lang" :value="lang">
                  {{ t('template.' + lang.toLowerCase()) }}
                </option>
              </select>
            </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="css" scoped>
nav a {
  display: block;
  position: relative;
  padding-bottom: 0.2em;
}

/* Fade in */
nav a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: -3px;
  width: calc(100% + 6px);
  height: 0.165em;
  background-color: white;
  transition: transform ease-out 444ms;
  transform: scale(0);
  transform-origin: center;
}

nav a:hover::after,
nav a:focus::after,
nav .active::after {
  transform: translate3d(0, 0.1em, 0);
  transform: scale(1);
}
</style>