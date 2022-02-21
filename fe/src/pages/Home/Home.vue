<template>
  <div class="app_wrapper-home">
    <Post
      v-for="item in filteredPosts"
      :post="item"
      :key="item.id"
      :id="item.id"
    />
  </div>
</template>

<script setup lang="ts">
import Post from './components/Post/Post.vue';
import { usePosts } from '../../pinia/posts';
import getQuery from '../../utils/getQuery';

const postsStore = usePosts();
const tag = <string>getQuery().tag;
const filteredPosts = tag ? postsStore.posts.filter((item) =>
  item.tags.find((item) => item === tag)
) : postsStore.posts

</script>

<style lang="scss">
.app_wrapper-home {
  width: 850px;
}
</style>
