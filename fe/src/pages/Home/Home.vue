<template>
  <div class="app_wrapper-home">
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script setup lang="ts">
import Post from './components/Post/Post.vue';
</script>

<style lang="scss">
.app_wrapper-home {
  width: 850px;
}
</style>
