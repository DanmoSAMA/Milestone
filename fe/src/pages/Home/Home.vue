<template>
  <div class="app_wrapper-home">
    <Post
      v-for="item in filteredPosts"
      :post="item"
      :key="item._id"
      :id="Number(item._id)"
    />
  </div>
</template>

<script setup lang="ts">
import Post from './components/Post/Post.vue';
import getQuery from '../../utils/getQuery';
import { ref } from 'vue';
import { getAllPosts } from '../../network/post/getAllPosts';
import { GetPostsResData } from '../../../shared/http/post';

let posts = ref<GetPostsResData>([]);
let filteredPosts = ref<GetPostsResData>([]);
const tag = <string>getQuery().tag;

async function getPosts() {
  const newPosts = await getAllPosts();
  if (newPosts && newPosts.length) {
    posts.value = newPosts;
    handlePosts();
  }
}

function handlePosts() {
  // 根据query中的id参数，筛选页面上的文章；如无id，则不筛选
  filteredPosts.value = tag
    ? posts.value.filter((item) => item.tags.find((item) => item === tag))
    : posts.value;
}

getPosts();
</script>

<style lang="scss">
.app_wrapper-home {
  width: 850px;
}
</style>
