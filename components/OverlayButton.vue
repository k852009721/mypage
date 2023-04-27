<script setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)

const string = ref('WELCOME')
</script>

<template>
  <div>
    <div
      class="fixed flex items-center gap-2"
      top="5 md:10 lg:20"
      left="2 md:10"
      z="2"
    >
      <IconType />
      <div class="font-alfaslabone text-2xl tracking-4px">
        {{ string }}
      </div>
    </div>
    <div
      class="i-material-symbols:light-mode-outline dark:i-material-symbols-mode-night fixed cursor-pointer text-3xl"
      top="5 md:10 lg:20"
      right="2 md:10"
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
