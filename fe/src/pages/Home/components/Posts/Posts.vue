<template>
  <div class="home-posts">
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script setup lang="ts">
import Post from './components/Post/Post.vue'
</script>

<style lang="scss">
.home-posts {
  width: 850px;
  // background-color: orange;
}
</style>