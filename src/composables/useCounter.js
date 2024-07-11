import { nextTick, reactive, ref } from 'vue'

export function useCounter() {
  const counterData = reactive({
    count: 0,
    title: 'Example'
  })

  const isButtonDisabled = ref(false)

  const decreaseCounter = async () => {
    isButtonDisabled.value = true
    counterData.count--

    await nextTick()
    setTimeout(() => {
      isButtonDisabled.value = false
    }, 300)
  }

  const increaseCounter = async () => {
    isButtonDisabled.value = true
    counterData.count++

    await nextTick()
    setTimeout(() => {
      isButtonDisabled.value = false
    }, 300)
  }

  return {
    counterData,
    isButtonDisabled,
    decreaseCounter,
    increaseCounter
  }
}
