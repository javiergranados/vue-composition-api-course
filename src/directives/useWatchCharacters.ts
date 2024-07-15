import { Ref, computed } from 'vue'

export function useWatchCharacters(text: Ref<string>, maxLength = 100) {
  const maxLengthReached = computed(() => {
    return text.value.length >= maxLength
  })

  return maxLengthReached
}
