<script setup>
const title = ref('Hi! I\'m Kevin Front-End Developer')
const letterArray = computed(() => {
  return title.value.split(' ')
})
</script>

<template>
  <div
    h="full"
    w="full"
    flex="~ col md:row"
    class="max-w-7xl justify-center md:items-center"
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
        <div class="flex gap-x-0.5">
          <span
            v-for="(letter, index) in letterArray[3]" :key="`letter${index}`"
            text="dark:hover:amber hover:purple 3xl lg:5xl"
            class="hover:animate-rubberband transition-all"
          >{{ letter }}</span>
        </div>
        <div class="flex gap-x-0.5">
          <span
            v-for="(letter, index) in letterArray[4]" :key="`letter${index}`"
            text="dark:hover:amber hover:purple 3xl lg:5xl"
            class="hover:animate-rubberband transition-all"
          >{{ letter }}</span>
        </div>
      </div>
      <div m="b-8" text="lg purple dark:gray">
        Front End Developer / JavaScript Fan
      </div>
    </div>
    <div w="full md:1/2" m="t-20 md:0">
      <div
        w="100% md:80%"
        text="lg"
        p="2"
      >
        <p>I'm a frontend developer who specializes in the Vue.js development ecosystem. </p>
        <p>I love researching new technologies and finding solutions to problems, and I'm passionate about building innovative and appealing products.</p>
      </div>
    </div>
  </div>
</template>
