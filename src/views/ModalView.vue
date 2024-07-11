<template>
  <div class="modalView">
    <h1>Modal</h1>
    <button class="openButton" @click="showModal = true">Open Modal</button>
    <Teleport to="body">
      <modal-component :show-modal="showModal" @closeModal="closeModal">
        <template #title>New Modal Title</template>
        <p>
          New body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptates beatae
          eveniet doloremque placeat sint corrupti a, adipisci cupiditate praesentium. Animi aliquid
          illum adipisci dolorem recusandae doloremque, atque maiores tenetur.
        </p>
      </modal-component>
    </Teleport>
  </div>
</template>

<script setup>
import ModalComponent from '@/components/ModalComponent.vue'
import { ref } from 'vue'

const showModal = ref(false)

defineEmits(['closeModal'])

function closeModal() {
  showModal.value = false
}
</script>

<style scoped>
.modalView {
  text-align: center;
  padding: 20px;
}
.openButton {
  margin-bottom: 135px;
}
</style>
