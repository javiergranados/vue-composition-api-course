<script setup>
import { ref } from 'vue'

const posts = ref([
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' }
])
</script>

<template>
  <div class="post-list">
    <h1>Post List</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/post-list/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.post-list {
  text-align: center;
  padding: 20px;
}
ul {
  margin-bottom: 87px;
}
</style>
