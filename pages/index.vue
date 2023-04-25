<script setup>
const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)
const section5 = ref(null)
const sections = ref([section1, section2, section3, section4, section5])
const { activeSection } = useWheelSwitch(sections)
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
    <div class="fixed right-10 top-50%">
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
      <SectionHome />
    </section>
    <section
      ref="section2"
      class="full-page"
    >
      <SectionAbout />
    </section>
    <section
      ref="section3"
      class="full-page"
    >
      <SectionSkill />
    </section>
    <section
      ref="section4"
      class="full-page"
    >
      <SectionProject />
    </section>
    <section
      ref="section5"
      class="full-page"
    >
      <SectionContact />
    </section>
  </div>
</template>
