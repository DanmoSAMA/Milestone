<template>
  <div class="app_wrapper-home">
    <Post
      v-for="item in postsStore.posts"
      :post="item"
      :key="item.id"
      :id="item.id"
    />
  </div>
</template>

<script setup lang="ts">
import Post from './components/Post/Post.vue';
import { usePosts } from '../../pinia/posts';

const postsStore = usePosts();
</script>

<style lang="scss">
.app_wrapper-home {
  width: 850px;
}
</style>
