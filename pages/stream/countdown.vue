<script lang="ts" setup>
const route = useRoute()
const timerText = ref()
const timerContainer = ref()
let interval: NodeJS.Timeout|undefined = undefined
const routeTime = computed(() => {
  const newVal = Number.parseInt(route.query?.time?.toString() || '')
  return Number.isInteger(newVal) ? newVal : 0
})
const countdown = ref()
const time = computed(() => {
  return ('0' + Math.floor(countdown.value / 60)).slice(-2) + ':' + ('0' + countdown.value % 60).slice(-2)
})
const startCountdown = () => {
  if (!!interval) {clearInterval(interval)}
  timerText.value?.classList.add('heartbeat')
  interval = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value = countdown.value - 1
    } else {
      clearInterval(interval)
      timerText.value?.classList.remove('heartbeat')
      timerText.value?.classList.add('vibrate')
      timerContainer.value?.classList.add('bg-red-400')
      timerText.value?.classList.add('text-gray-700')
      setTimeout(() => {
        timerText.value?.classList.remove('vibrate')
      timerContainer.value?.classList.remove('bg-red-400')
        timerText.value?.classList.remove('text-gray-700')
      }, 10000)
    }
  }, 1000)
}
const resetTime = (value: Number) => {
  countdown.value = value
  if (!!countdown.value) {
    startCountdown()
  }
}
watch([routeTime], () => {
  resetTime(routeTime.value)
})
onMounted(() => {
  resetTime(routeTime.value)
})
</script>

<template>
  <div class="fullscreen rounded rounded-full flex items-center justify-center font-mono font-bold" ref="timerContainer">
    <div ref="timerText">
      {{ time }}
    </div>
  </div>
</template>

<style lang="css" scoped>
.fullscreen {
  height:100vh;
  width:100vw;
  font-size: min(80vh, 30vw);
}

.vibrate{-webkit-animation:vibrate .3s linear infinite both;animation:vibrate .3s linear infinite both}
.heartbeat{-webkit-animation:heartbeat 2s ease-in-out infinite both;animation:heartbeat 2s ease-in-out infinite both}
/* ----------------------------------------------
 * Generated by Animista on 2024-12-12 3:25:1
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
 @-webkit-keyframes heartbeat{from{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}10%{-webkit-transform:scale(.91);transform:scale(.91);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}17%{-webkit-transform:scale(.98);transform:scale(.98);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}33%{-webkit-transform:scale(.87);transform:scale(.87);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}45%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes heartbeat{from{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}10%{-webkit-transform:scale(.91);transform:scale(.91);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}17%{-webkit-transform:scale(.98);transform:scale(.98);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}33%{-webkit-transform:scale(.87);transform:scale(.87);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}45%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}
 /* ----------------------------------------------
 * Generated by Animista on 2024-12-12 3:25:45
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
@-webkit-keyframes vibrate{0%{-webkit-transform:translate(0);transform:translate(0)}20%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}40%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}60%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}80%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}@keyframes vibrate{0%{-webkit-transform:translate(0);transform:translate(0)}20%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}40%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}60%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}80%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}
</style>