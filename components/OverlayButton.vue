<script setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)
const darkLightIcon = computed(() => {
  return isDark.value ? 'i-material-symbols-mode-night' : 'i-material-symbols:light-mode-outline'
})

const string = ref('WELCOME')
</script>

<template>
  <div>
    <div
      class="fixed left-10 flex items-center gap-2"
      top="5 md:10 lg:20"
      z="2"
    >
      <IconType />
      <div class="font-alfaslabone text-2xl tracking-4px">
        {{ string }}
      </div>
    </div>
    <div
      class="fixed right-10 h-6 w-6 cursor-pointer"
      :class="darkLightIcon"
      top="5 md:10 lg:20"
      z="2"
      @click="toggleDark()"
      @touchstart="toggleDark()"
    />
  </div>
</template>

<style scoped>
@keyframes twinkling {
  0%,49%,100% { visibility: visible; }
  60%,99% { visibility: hidden; }
}
</style>
