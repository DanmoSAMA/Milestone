<template>
  <div class="app_wrapper-post">
    <Markdown :source="source" class="markdown-body" />
  </div>
</template>

<script setup lang="ts">
import getQuery from '../../utils/getQuery';
import { usePosts } from '../../pinia/posts';
import Markdown from 'vue3-markdown-it';

const postsStore = usePosts();
const id = <string>getQuery().id;
const source = postsStore.posts[id].content;
</script>

<style lang="scss" scope>
.app_wrapper-post {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;
  flex-shrink: 1;
}
</style>
