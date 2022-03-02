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
import { ref, Ref, watch } from 'vue';
import { GetPostsResData } from '../../../shared/http/post';
import { usePosts } from '../../pinia/posts';
import { curPageNum, eachPagePostNum, totalPageNum } from '../../hooks/usePage';

import Pager from '../../components/Pager/Pager.vue';
import Post from './components/Post/Post.vue';

import getQuery from '../../utils/getQuery';
import jump from '../../utils/jump';

const postsStore = usePosts();

const filteredPosts = ref<GetPostsResData>([]);
const pagedPosts = ref<GetPostsResData>([]);

const tag = getQuery().tag;
const page = getQuery().page;

function handlePosts() {
  // 根据query中的tag参数，筛选页面上的文章；如无tag，则不筛选
  filteredPosts.value = tag
    ? postsStore.posts.filter((item) => item.tags.find((item) => item === tag))
    : postsStore.posts;

  pagedPosts.value = filteredPosts.value.slice(
    curPageNum.value * eachPagePostNum,
    (curPageNum.value + 1) * eachPagePostNum
  );
}

function handlePageNum() {
  totalPageNum.value = Math.ceil(filteredPosts.value.length / eachPagePostNum);

  if (page !== undefined) {
    const num = parseInt(page as string);
    if (num < 0 || num > totalPageNum.value - 1) {
      alert('页数错误');
      jump('/posts', { page: '0' });
    }
    curPageNum.value = num;
  } else {
    alert('页数错误');
    jump('/posts', { page: '0' });
  }
}

// 虽然在sideBar请求了一次，但是为了发/删文章跳过来能直接看到更新，这里得再请求一次
postsStore.setPosts().then(() => {
  handlePosts();
  handlePageNum();
});

// 当curPageNum改变时，重新生成posts，避免页面空白
watch(curPageNum, () => {
  pagedPosts.value = filteredPosts.value.slice(
    curPageNum.value * eachPagePostNum,
    (curPageNum.value + 1) * eachPagePostNum
  );
});
</script>

<style lang="scss">
.app_wrapper-home {
  width: 850px;
  background-color: #fff;
  position: relative;
  padding-bottom: 100px;
  min-height: 84vh;
}
</style>
