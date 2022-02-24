<template>
  <div class="app_wrapper-post">
    <h1 class="app_wrapper-post-title">
      {{ title }}
    </h1>
    <div class="app_wrapper-post-tags">
      <div
        class="app_wrapper-post-tags-item"
        v-for="tag in tags"
        :key="tag"
        @click="jump('/', { tag })"
      >
        {{ tag }}
      </div>
    </div>
    <Markdown :source="source" class="markdown-body" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Post, DEFAULT_POST } from '../../../shared/models/post';
import { getPostDetail } from '../../network/post/getPostDetail';
import getQuery from '../../utils/getQuery';
import Markdown from 'vue3-markdown-it';
import jump from '../../utils/jump';

const id = <string>getQuery().id;
const post = ref<Post>({ ...DEFAULT_POST });
const source = ref('');
const title = ref('');
const tags = ref<string[]>([]);

getPostDetail(id).then((p) => {
  post.value = p;
  source.value = p.content;
  title.value = p.title;
  tags.value = p.tags;
});
</script>

<style lang="scss" scope>
.app_wrapper-post {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;
  flex-shrink: 1;

  &-title {
    font-size: 55px;
    text-align: center;
  }

  &-tags {
    display: flex;
    justify-content: center;

    &-item {
      cursor: pointer;
      height: 25px;
      line-height: 25px;
      margin-right: 10px;
      border: 1px solid #6c757d;
      color: #6c757d;
      padding: 0 8px;
      border-radius: 3px;
      transition: all 0.3s;
    }

    &-item:hover {
      background-color: #6c757d;
      color: #fff;
    }
  }
}
</style>
