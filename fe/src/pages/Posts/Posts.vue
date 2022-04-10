<template>
  <div class="app_wrapper-posts">
    <div
      :class="
        showContent
          ? 'app_wrapper-posts-inner'
          : 'app_wrapper-posts-inner hidden'
      "
    >
      <Post
        v-for="item in postsStore.posts"
        :post="item"
        :key="item._id"
        :id="item._id"
      />
      <NoPosts v-show="noPosts" />
      <Pager v-show="!noPosts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { postsStore } from '../../pinia/posts'
import { curPageNum } from '../../hooks/usePageNum'
import { noPosts } from '../../hooks/useNoPosts'
import { useRoute } from 'vue-router'
import { getPostsCnt } from '../../network/post/getPostsCnt'

import Pager from '../../components/Pager/Pager.vue'
import Post from './components/Post/Post.vue'
import NoPosts from './components/NoPosts/NoPosts.vue'

import jump from '../../utils/jump'

const showContent = ref(false)
const page = useRoute().query.page as string
const kw = useRoute().query.kw as string

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 600)
})

onMounted(async () => {
  await postsStore.setCnt()
  // 未提供page参数
  if (!page) {
    await postsStore.setPosts(0)
    jump('/posts', { page: '0' })
  }
  // page不是number
  else if (Number.isNaN(parseInt(page))) {
    await postsStore.setPosts(0)
    jump('/posts', { page: '0' })
  }
  // page超出范围
  else if (
    parseInt(page) > Math.floor(postsStore.cnt / 8) ||
    parseInt(page) < 0
  ) {
    console.log(1, parseInt(page), Math.floor(postsStore.cnt / 8))
    await postsStore.setPosts(0)
    jump('/posts', { page: '0' })
  }
  curPageNum.value = parseInt(page)

  if (kw) {
    await postsStore.setPosts(curPageNum.value, kw)
  } else {
    await postsStore.setPosts(curPageNum.value)
  }
  // 此处不应使用 postsStore.cnt 进行判断，因为它是在侧栏请求的，时间上未必在这里执行之前
  if (postsStore.posts.length === 0) noPosts.value = true
})
</script>

<style lang="scss">
.app_wrapper-posts {
  width: 850px;
  background-color: #fff;
  position: relative;
  padding-bottom: 100px;
  min-height: 84vh;

  &-inner {
    transition: opacity 0.8s;
    padding-top: 10px;
  }

  &-inner.hidden {
    opacity: 0;
    padding-top: 0;
  }
}

@media only screen and (max-width: 760px) {
  .app_wrapper-posts {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
