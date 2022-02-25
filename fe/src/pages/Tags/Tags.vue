<template>
  <div class="app_wrapper-tags">
    <div class="app_wrapper-tags-title">标签</div>
    <div class="app_wrapper-tags-count">
      目前共计{{ postsStore.tags.length }}个标签
    </div>
    <div class="app_wrapper-tags-cloud">
      <div
        class="app_wrapper-tags-cloud-item"
        v-for="tag in postsStore.tags"
        :key="tag"
        @click="jump('/', { tag })"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 向后端请求，拿到所有标签
import jump from '../../utils/jump';
import { usePosts } from '../../pinia/posts';

const postsStore = usePosts();
</script>

<style lang="scss">
.app_wrapper-tags {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;

  &-title {
    font-size: 35px;
    text-align: center;
    margin: 30px 0;
  }

  &-count {
    text-align: center;
    font-size: 14px;
    margin: 15px 0 35px 0;
  }

  &-cloud {
    display: flex;
    flex-wrap: wrap;
    line-height: 40px;
    justify-content: center;
    align-items: center;

    &-item {
      margin: 10px;
      font-size: 24px;
      color: #555;
      transition: 0.2s color;
      cursor: pointer;
    }

    &-item:hover {
      color: #000;
    }
  }
}
</style>
