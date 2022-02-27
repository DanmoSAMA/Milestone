<template>
  <div class="app_wrapper-home">
    <Post
      v-for="item in filteredPosts"
      :post="item"
      :key="item._id"
      :id="item._id"
    />
  </div>
</template>

<script setup lang="ts">
import Post from './components/Post/Post.vue';
import getQuery from '../../utils/getQuery';
import { ref } from 'vue';
import { GetPostsResData } from '../../../shared/http/post';
import { usePosts } from '../../pinia/posts';

const postsStore = usePosts();

const filteredPosts = ref<GetPostsResData>([]);
const tag = <string>getQuery().tag;

function handlePosts() {
  // 根据query中的tag参数，筛选页面上的文章；如无tag，则不筛选
  filteredPosts.value = tag
    ? postsStore.posts.filter((item) => item.tags.find((item) => item === tag))
    : postsStore.posts;
}

handlePosts();
</script>

<style lang="scss">
.app_wrapper-home {
  width: 850px;
}
</style>
