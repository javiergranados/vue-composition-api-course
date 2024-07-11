<template>
  <div class="home">
    <div class="network">
      Network Status:
      <span style="color: green" v-if="isOnline">Online</span>
      <span v-else style="color: red">Offline</span>
    </div>
    <h3>My Counter: {{ store.title }}</h3>
    <div>
      <button :disabled="store.isButtonDisabled" @click="store.decrement()" class="btn">-</button>
      <span class="counter">{{ store.count }}</span>
      <button @click="store.increment()" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="store.title" v-autofocus />
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
// import { useCounter } from '../composables'
import { useOnline } from '@vueuse/core'
import { vAutofocus } from '../directives'

const isOnline = useOnline()

// const { counterData, isButtonDisabled, decreaseCounter, increaseCounter } = useCounter()
const store = useCounterStore()
</script>

<style scoped>
.network {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: beige;
  border-radius: 5px;
}
.home {
  text-align: center;
  padding: 20px;
}
.btn {
  cursor: pointer;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
