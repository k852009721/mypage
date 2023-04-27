<script setup>
const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)
const section5 = ref(null)
const sections = ref([section1, section2, section3, section4, section5])
const { activeSection, scrollToSection } = useWheelSwitch(sections)

function onScrollClick(val) {
  scrollToSection(val, true)
}

function activeTabClass(index) {
  if (index === activeSection.value)
    return 'border-r-gray-900 border-r-2 dark:border-r-purple-500'

  else
    return 'border-r-2 border-r-gray-300'
}
</script>

<template>
  <div class="font-sans bg-base color-base">
    <OverlayButton />
    <div class="fixed right-10 top-50% z-1">
      <div
        v-for="(item, index) in sections" :key="index"
        class="display-none h-14 items-center justify-center transition-all duration-150 ease-linear md:flex"
        p="r-4"
        :class="activeTabClass(index)"
      >
        {{ `0${index}` }}
      </div>
    </div>
    <section
      ref="section1"
      class="full-page"
    >
      <SectionHome z-1 @on-scroll-click="onScrollClick" />
      <IconCode class="absolute w-250 rotate-180 opacity-70 filter-blur-6 -bottom-450px -left-550px" />
    </section>
    <section
      ref="section2"
      class="full-page"
    >
      <SectionAbout z-1 />
      <IconCode class="absolute z-0 w-250 rotate-180 opacity-70 filter-blur-6 -left-550px -top-450px" />
      <IconCode class="absolute z-0 w-250 opacity-70 filter-blur-6 -bottom-450px -right-550px" />
    </section>
    <section
      ref="section3"
      class="full-page"
    >
      <SectionSkill z-1 />
      <IconCode class="absolute z-0 w-250 rotate-180 opacity-70 filter-blur-6 -bottom-450px -left-550px" />
      <IconCode class="absolute z-0 w-250 opacity-70 filter-blur-6 -right-550px -top-450px" />
    </section>
    <section
      ref="section4"
      class="full-page"
    >
      <SectionProject z-1 />
      <IconCode class="absolute z-0 w-250 rotate-180 opacity-70 filter-blur-6 -left-550px -top-450px" />
      <IconCode class="absolute z-0 w-250 opacity-70 filter-blur-6 -bottom-450px -right-550px" />
    </section>
    <section
      ref="section5"
      class="full-page"
    >
      <SectionContact z-1 />
      <IconCode class="absolute z-0 w-250 rotate-180 opacity-70 filter-blur-6 -bottom-450px -left-550px" />
      <IconCode class="absolute z-0 w-250 opacity-70 filter-blur-6 -right-550px -top-450px" />
    </section>
  </div>
</template>
