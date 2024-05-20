<template>
  <div class="post-list">
    <h1>Post List</h1>
    <ul>
      <li><RouterLink to="/post-list/1">Post 1</RouterLink></li>
      <li><RouterLink to="/post-list/2">Post 2</RouterLink></li>
      <li><RouterLink to="/post-list/3">Post 3</RouterLink></li>
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
