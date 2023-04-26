<script setup>
const emit = defineEmits(['onScrollClick'])
const title = ref('Front-End Software Developer')
const letterArray = computed(() => {
  return title.value.split(' ')
})

function handleScrollClick() {
  emit('onScrollClick', 1)
}
</script>

<template>
  <div
    h="full"
    w="full"
    flex="~ col-reverse md:row"
    class="max-w-7xl justify-end md:items-center"
  >
    <div
      w="full md:1/2"
      p="2"
    >
      <div
        font="alfaslabone"
        h="fit"
        w="full"
        class="mb-5 flex flex-wrap gap-4"
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
      <div m="b-8" text="lg">
        Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
      </div>
      <div
        text="lg purple-700 dark:amber"
        class="cursor-pointer"
        @click="handleScrollClick"
      >
        <span>About me</span>
        <span i-charm-chevron-right ml-3 />
      </div>
    </div>
    <div w="full md:1/2" m="t-20 md:0">
      <div
        bg="contain no-repeat [url(~/assets/computer.svg)] center"
        w="60% md:80%"
        h="full"
        m="auto md:0"
        class="aspect-square w-2/3"
      />
    </div>
  </div>
</template>
