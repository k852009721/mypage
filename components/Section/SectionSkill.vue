<script setup>
const title = ref('Skills & Experience')
const letterArray = computed(() => {
  return title.value.split(' ')
})

const iconList = ref([
  { frontSide: 'i-fa6-brands-js', backSide: 'i-vscode-icons-file-type-js-official' },
  { frontSide: 'i-bx-bxl-vuejs', backSide: 'i-vscode-icons-file-type-vue' },
  { frontSide: 'i-simple-icons-nuxtdotjs', backSide: 'i-vscode-icons-file-type-nuxt' },
  { frontSide: 'i-uim-html5', backSide: 'i-vscode-icons-file-type-html' },
  { frontSide: 'i-ion-logo-css3', backSide: 'i-vscode-icons-file-type-css' },
  { frontSide: 'i-ion-logo-sass', backSide: 'i-vscode-icons-file-type-sass' },
  { frontSide: 'i-bxl-tailwind-css', backSide: 'i-vscode-icons-file-type-tailwind' },
  { frontSide: 'i-simple-icons-git', backSide: 'i-logos-git-icon' },
])
</script>

<template>
  <div
    h="full"
    w="full"
    flex="~ col"
    class="max-w-7xl items-center justify-center"
  >
    <div
      w="full md:2/3"
      p="2"
      text-center
    >
      <div m="b-4" text="sm lg:lg purple dark:gray">
        Programming is just another name for a lost art whose name is thinking.
      </div>
      <div
        font="alfaslabone"
        h="fit"
        w="full"
        flex="~ wrap"
        class="mb-5 justify-center gap-4"
      >
        <div class="flex gap-x-0.5">
          <span
            v-for="(letter, index) in letterArray[0]" :key="`letter${index}`"
            text="dark:hover:amber hover:purple 3xl lg:5xl"
            class="hover:animate-rubberband transition-all"
          >{{ letter }}</span>
        </div>
        <div class="flex gap-x-0.5">
          <span
            v-for="(letter, index) in letterArray[1]" :key="`letter${index}`"
            text="dark:hover:amber hover:purple 3xl lg:5xl"
            class="hover:animate-rubberband transition-all"
          >{{ letter }}</span>
        </div>
        <div class="flex gap-x-0.5">
          <span
            v-for="(letter, index) in letterArray[2]" :key="`letter${index}`"
            text="dark:hover:amber hover:purple 3xl lg:5xl"
            class="hover:animate-rubberband transition-all"
          >{{ letter }}</span>
        </div>
      </div>
    </div>
    <div w="full md:2/3" m="md:0">
      <div
        w="100%"
        p="2"
        flex="~ wrap"
        gap="4"
        class="justify-center"
      >
        <div
          v-for="(icon, index) in iconList" :key="index"
          h="15 md:20 lg:25"
          w="15 md:20 lg:25"
          text="5xl"
          class="transform-style-3d relative cursor-pointer duration-400"
        >
          <div :class="icon.frontSide" class="backface-hidden absolute h-full w-full" />
          <div :class="icon.backSide" class="transform-rotateY-180 backface-hidden absolute h-full w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transform-style-3d {
  transform-style: preserve-3d;
}
.transform-style-3d:hover {
  transform: rotateY(180deg);
}
.transform-rotateY-180 {
  transform: rotateY(180deg);
}
</style>
