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
        v-for="item in pagedPosts"
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
import { ref, Ref, watch } from 'vue';
import { GetPostsResData } from '../../../shared/http/post';
import { usePosts } from '../../pinia/posts';
import { curPageNum, eachPagePostNum, totalPageNum } from '../../hooks/usePage';
import { tag } from '../../hooks/useTag';
import { kw } from '../../hooks/useKw';

import Pager from '../../components/Pager/Pager.vue';
import Post from './components/Post/Post.vue';
import NoPosts from './components/NoPosts/NoPosts.vue';

import getQuery from '../../utils/getQuery';
import jump from '../../utils/jump';

const postsStore = usePosts();

const filteredPosts = ref<GetPostsResData>([]);
const pagedPosts = ref<GetPostsResData>([]);
const noPosts = ref(false);

const showContent = ref(false);

setTimeout(() => {
  showContent.value = true;
}, 600);

// 此处是为了避免刷新丢掉现在的状态
curPageNum.value = getQuery().page
  ? !isNaN(parseInt(getQuery().page as string))
    ? parseInt(getQuery().page as string)
    : Number.MAX_VALUE
  : Number.MAX_VALUE;

tag.value = getQuery().tag ? (getQuery().tag as string) : '';
kw.value = getQuery().kw ? (getQuery().kw as string) : '';

function handleFilteredPosts() {
  // 根据query中的tag参数，筛选页面上的文章；如无tag，则不筛选
  filteredPosts.value =
    tag.value !== ''
      ? postsStore.posts.filter((item) =>
          item.tags.find((item) => item === tag.value)
        )
      : postsStore.posts;

  // 根据query中的kw参数，再次进行筛选
  filteredPosts.value = kw
    ? filteredPosts.value.filter((item) => item.title.indexOf(kw.value) !== -1)
    : filteredPosts.value;

  handlePagedPosts();
}

function handlePagedPosts() {
  // 对筛选后的文章分页
  pagedPosts.value = filteredPosts.value.slice(
    curPageNum.value * eachPagePostNum,
    (curPageNum.value + 1) * eachPagePostNum
  );
}

function handleNoPosts() {
  if (curPageNum.value === 0 && totalPageNum.value === 0) {
    noPosts.value = true;
    return true;
  } else {
    noPosts.value = false;
    return false;
  }
}

function handlePageNum() {
  totalPageNum.value = Math.ceil(filteredPosts.value.length / eachPagePostNum);
  if (handleNoPosts()) {
  } else if (curPageNum.value !== Number.MAX_VALUE) {
    handleNoPosts();
    if (curPageNum.value < 0 || curPageNum.value > totalPageNum.value - 1) {
      alert('页数错误');
      jump('/posts', { page: '0' });
    }
  } else {
    // 这样可以达到"缺少查询参数，重定向到查询参数为默认值"的效果
    jump('/posts', { page: '0' });
  }
}

// 虽然在sideBar请求了一次，但是为了发/删文章跳过来能直接看到更新，这里得再请求一次
// 这里可以优化，设置某变量，通过watch使得sidebar那边重新请求数据...Todo
postsStore.setPosts().then(() => {
  handleFilteredPosts();
  handlePageNum();
});

// 当curPageNum改变时，重新生成posts，避免页面空白
watch(curPageNum, () => {
  handlePagedPosts();
});

// 当tag改变时，重新生成posts
watch(tag, () => {
  handleFilteredPosts();
  totalPageNum.value = Math.ceil(filteredPosts.value.length / eachPagePostNum);
  handleNoPosts();
});

// 当kw改变时，重新生成posts
watch(kw, () => {
  handleFilteredPosts();
  totalPageNum.value = Math.ceil(filteredPosts.value.length / eachPagePostNum);
  handleNoPosts();
});
</script>

<style lang="scss">
.app_wrapper-posts {
  width: 850px;
  background-color: #fff;
  position: relative;
  padding-bottom: 100px;
  min-height: 84vh;

  &-inner {
    transition: all 0.8s;
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
