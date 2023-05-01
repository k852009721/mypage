<script setup>
const title = ref('Let\'s make something fantastic!')
const letterArray = computed(() => {
  return title.value.split(' ')
})
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
      data-aos="flip-right"
    >
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
            class="transition-all hover:animate-rubberband"
          >{{ letter }}</span>
        </div>
        <div class="flex gap-x-0.5">
          <span
            v-for="(letter, index) in letterArray[1]" :key="`letter${index}`"
            text="dark:hover:amber hover:purple 3xl lg:5xl"
            class="transition-all hover:animate-rubberband"
          >{{ letter }}</span>
        </div>
        <div class="flex gap-x-0.5">
          <span
            v-for="(letter, index) in letterArray[2]" :key="`letter${index}`"
            text="dark:hover:amber hover:purple 3xl lg:5xl"
            class="transition-all hover:animate-rubberband"
          >{{ letter }}</span>
        </div>
        <div class="flex gap-x-0.5">
          <span
            v-for="(letter, index) in letterArray[3]" :key="`letter${index}`"
            text="dark:hover:amber hover:purple 3xl lg:5xl"
            class="transition-all hover:animate-rubberband"
          >{{ letter }}</span>
        </div>
      </div>
    </div>
    <div w="full md:2/3" m="md:0">
      <div
        w="100%"
        p="2"
        flex="~ col"
        items="center"
        gap="4"
        class="justify-center"
      >
        <p text="lg">
          Feel free to reach out through any platforms bellow:
        </p>
        <div flex="~" gap="x-4 md:8">
          <a href="https://github.com/k852009721" target="_blank" rel="noreferrer noopenner">
            <div i-fa6-brands-github text="5xl" bg="hover:purple dark:hover:amber" />
          </a>
          <a href="mailto:k120435@gmail.com" target="_blank" rel="noreferrer noopenner">
            <div i-fa6-regular-envelope text="5xl" bg="hover:purple dark:hover:amber" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
