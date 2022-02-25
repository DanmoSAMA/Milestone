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
    <div class="app_wrapper-post-btn">
      <div class="app_wrapper-post-btn-edit">编辑</div>
      <div class="app_wrapper-post-btn-delete" @click="handleDel()">删除</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Post, DEFAULT_POST } from '../../../shared/models/post';
import { getPostDetail } from '../../network/post/getPostDetail';
import { delPost } from '../../network/post/delPost';
import router from '../../router';
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

async function handleDel() {
  if (confirm('确认删除文章吗?')) {
    const check = await delPost(id);
    if (check) {
      alert('删除成功!');
      jump('/');
    }
  }
}
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

  &-btn {
    display: flex;
    justify-content: center;

    &-edit,
    &-delete {
      text-align: center;
      margin-top: 30px;
      height: 36px;
      line-height: 36px;
      width: 120px;
      border: 1px solid #bbb;
      border-radius: 18px;
      background-color: #f8f9fa;
      cursor: pointer;
      transition: all 0.3s;
    }

    &-edit {
      margin-right: 60px;
    }

    &-edit:hover,
    &-delete:hover {
      background-color: #016dff;
      color: #fff;
    }
  }
}

.markdown-body {
  min-height: 400px;
}
</style>
