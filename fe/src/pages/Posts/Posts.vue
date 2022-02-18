<template>
  <div class="app_wrapper-post">
    <Markdown :source="source" class="markdown-body" />
  </div>
</template>

<script setup lang="ts">
import getQuery from '../../utils/getQuery';
import { usePosts } from '../../pinia/posts';

// import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import Markdown from 'vue3-markdown-it';

// const md = new MarkdownIt({
//   html: true,
//   linkify: true,
//   typographer: true,
//   highlight: function (str, lang) {
//     if (lang && hljs.getLanguage(lang)) {
//       try {
//         return hljs.highlight(lang, str).value;
//       } catch (__) {}
//     }

//     return '';
//   },
// });

const postsStore = usePosts();
const id = <string>getQuery().id;
// const content = md.render(postsStore.posts[id].content);
const source = postsStore.posts[id].content;
</script>

<style lang="scss" scope>
.app_wrapper-post {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;
  flex-shrink: 1;

  code {
    font-family: hack;
    font-size: 13px;
    line-height: 22px;
  }
}
</style>
