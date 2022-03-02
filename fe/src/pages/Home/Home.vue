<template>
  <div class="app_wrapper-home">
    <Post
      v-for="item in pagedPosts"
      :post="item"
      :key="item._id"
      :id="item._id"
    />
    <Pager />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { GetPostsResData } from '../../../shared/http/post';
import { usePosts } from '../../pinia/posts';
import { curPageNum, eachPagePostNum, totalPageNum } from '../../hooks/usePage';

import Pager from '../../components/Pager/Pager.vue';
import Post from './components/Post/Post.vue';

import getQuery from '../../utils/getQuery';

const postsStore = usePosts();

const filteredPosts = ref<GetPostsResData>([]);
const pagedPosts = ref<GetPostsResData>([]);

const tag = getQuery().tag;

function handlePosts() {
  // 根据query中的tag参数，筛选页面上的文章；如无tag，则不筛选
  filteredPosts.value = tag
    ? postsStore.posts.filter((item) => item.tags.find((item) => item === tag))
    : postsStore.posts;

  pagedPosts.value = filteredPosts.value.slice(
    curPageNum.value * eachPagePostNum,
    curPageNum.value + 1 * eachPagePostNum
  );

  totalPageNum.value = Math.ceil(filteredPosts.value.length / eachPagePostNum);
}

// 虽然在sideBar请求了一次，但是为了发/删文章跳过来能直接看到更新，这里得再请求一次
postsStore.setPosts().then(() => {
  handlePosts();
});
</script>

<style lang="scss">
.app_wrapper-home {
  width: 850px;
  background-color: #fff;
}
</style>
