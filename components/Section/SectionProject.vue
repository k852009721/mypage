<script setup>
const title = ref('Portfolio & Previous Projects')
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
    <div w="full" m="md:0" p="md:r-20">
      <div
        w="100%"
        p="2"
        flex="~ col"
        gap="4"
        class="justify-center"
      >
        <div flex="~ col md:row" items="center md:start">
          <div flex="~ col" text="lg" m="b-6 md:b-0">
            <div text="3xl" font="alfaslabone">
              Realtime Chat App
            </div>
            <div m="y-4">
              Real-time chat room with one-on-one chat and AI chat capabilities.
            </div>
            <div>
              <span text="purple dark:gray-100">Built with:</span> VueJS, Pinia, TailwindCSS, NodeJS, ExpressJS, Socketio, OpenAI
            </div>
            <a
              href="https://github.com/k852009721/socketio-vue3"
              target="_blank"
              rel="noreferrer noopenner"
              text="lg purple-700 dark:amber"
              class="group cursor-pointer"
            >
              <span>View the code</span>
              <span i-charm-chevron-right m="l-2 group-hover:l-5" duration-400 />
            </a>
          </div>
          <img src="~/assets/chat.png" w="60%" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
