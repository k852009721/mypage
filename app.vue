<script setup>
useHead({
  title: 'Kevin HYN',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Kevin\'s personal website' },
    { name: 'keywords', content: 'Nuxt3, personal website, unocss' },
    { name: 'og:title', content: 'Kevin HYN' },
    { name: 'og:description', content: 'Kevin\'s personal website' },
    { property: 'og:image', content: 'https://i.imgur.com/3UGTIYx.png' },
  ],
})
</script>

<template>
  <NuxtPage />
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
/* hide scroll bar for firefox*/
html {
  overflow: -moz-hidden-unscrollable;
}
/* hide scroll bar for Chrome Edge*/
::-webkit-scrollbar {
  display: none;
}
</style>
