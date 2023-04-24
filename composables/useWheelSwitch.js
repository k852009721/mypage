import { onMounted, onUnmounted, ref } from 'vue'

export function useWheelSwitch(sections) {
  const sectionOffsets = ref([])
  const inMove = ref(false)
  const inMoveDelay = ref(400)
  const activeSection = ref(0)
  const touchStartY = ref(0)

  function calculateSectionOffsets() {
    sections.value.forEach((section) => {
      sectionOffsets.value.push(section.offsetTop)
    })
  }

  function handleMouseWheel(e) {
    if (e.deltaY > 0 && !inMove.value)
      // routerUP()
      // console.log(e.deltaY)
      moveUp()

    if (e.deltaY < 0 && !inMove.value)
      // routerDown()
    // console.log(e.deltaY)
      moveDown()

    e.preventDefault()
    return false
  }

  function moveUp() {
    inMove.value = true
    activeSection.value++

    if (activeSection.value > sectionOffsets.value.length - 1)
      activeSection.value = 0

    scrollToSection(activeSection.value, true)
  }

  function moveDown() {
    inMove.value = true
    activeSection.value--

    if (activeSection.value < 0)
      activeSection.value = sectionOffsets.value.length - 1

    scrollToSection(activeSection.value, true)
  }

  function scrollToSection(id, force = false) {
    if (inMove.value && !force)
      return false

    activeSection.value = id
    inMove.value = true

    // get section and scroll into view if it exists
    if (sections)
      sections.value[id].value.scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => {
      inMove.value = false
    }, inMoveDelay.value)
  }

  function touchStart(e) {
    e.preventDefault()

    touchStartY.value = e.touches[0].clientY
  }

  function touchMove(e) {
    if (inMove.value)
      return false
    e.preventDefault()

    const currentY = e.touches[0].clientY

    if (touchStartY.value < currentY)
      moveDown()

    else
      moveUp()

    touchStartY.value = 0
    return false
  }
  // useFullpage(sections)
  onMounted(() => {
    calculateSectionOffsets()
    window.addEventListener('wheel', handleMouseWheel, { passive: false }) // Other browsers
    window.addEventListener('touchstart', touchStart, { passive: false }) // mobile devices
    window.addEventListener('touchmove', touchMove, { passive: false }) // mobile devices
  })
  onUnmounted(() => {
    window.removeEventListener('mousewheel', handleMouseWheel, { passive: false }) // Other browsers
    window.removeEventListener('touchstart', touchStart) // mobile devices
    window.removeEventListener('touchmove', touchMove) // mobile devices
  })

  return { activeSection }
}
