<template>
  <div class="modalView">
    <h1>Modal</h1>
    <div>
      <input
        type="checkbox"
        v-model="useDarkModal"
        @click="useDarkModal = !useDarkModal"
        id="useDarkModal"
      />
      <label for="useDarkModal" class="checkboxLabel">Use Dark Modal</label>
    </div>
    <button class="openButton" @click="showModal = true">Open Modal</button>
    <Teleport to="body">
      <component
        :is="useDarkModal ? DarkModal : LightModal"
        :show-modal="showModal"
        @closeModal="closeModal"
      >
        <template #title>New Modal Title</template>
        <p>
          New body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptates beatae
          eveniet doloremque placeat sint corrupti a, adipisci cupiditate praesentium. Animi aliquid
          illum adipisci dolorem recusandae doloremque, atque maiores tenetur.
        </p>
      </component>
    </Teleport>
  </div>
</template>

<script setup>
import LightModal from '@/components/LightModal.vue'
import DarkModal from '@/components/DarkModal.vue'
import { ref } from 'vue'

const showModal = ref(false)
const useDarkModal = ref(false)

defineEmits(['closeModal'])

function closeModal() {
  showModal.value = false
}
</script>

<style scoped>
.modalView {
  display: 'flex';
  flex-direction: 'column';
  text-align: center;
  padding: 20px;
}
.checkboxLabel {
  margin-left: 10px;
}
.openButton {
  margin-top: 20px;
  margin-bottom: 135px;
}
</style>
