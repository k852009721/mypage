<script setup>
const title = ref('Front-End Software Developer')
const letterArray = computed(() => {
  return title.value.split(' ')
})
</script>

<template>
  <div h-full w-full flex flex-wrap>
    <div
      w="full lg:1/3"
      font-alfaslabone
    >
      <span v-for="(letter, index) in letterArray" :key="`letter${index}`">{{ letter }}</span>
    </div>
    <div
      bg="contain no-repeat [url(~/assets/computer.svg)] center"
      w="lg:2/3 full"
      h="full"
      class="aspect-square w-2/3"
    />
  </div>
</template>
