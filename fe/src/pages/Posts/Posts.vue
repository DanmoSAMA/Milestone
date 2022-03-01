<template>
  <div class="app_wrapper-post">
    <div class="app_wrapper-post-main" v-show="!isEdited">
      <h1 class="app_wrapper-post-main-title">
        {{ title }}
      </h1>
      <div class="app_wrapper-post-main-tags">
        <div
          class="app_wrapper-post-main-tags-item"
          v-for="tag in tags"
          :key="tag"
          @click="jump('/', { tag })"
        >
          {{ tag }}
        </div>
      </div>
      <div class="app_wrapper-post-main-content">
        <Markdown
          :source="source"
          class="app_wrapper-post-main-content-markdown_body"
        />
      </div>
      <div class="app_wrapper-post-main-btn">
        <div class="app_wrapper-post-main-btn-edit" @click="setIsEdited(true)">
          编辑
        </div>
        <div class="app_wrapper-post-main-btn-delete" @click="handleDel()">
          删除
        </div>
      </div>
    </div>
    <!--此处必须用v-if，如果用v-show，一开始就会生成vdom，会直接把没有值的props传给Edit-->
    <Edit
      v-if="isEdited"
      :defaultTitle="title"
      :defaultTags="tags"
      :defaultContent="source"
      :type="1"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Post, DEFAULT_POST } from '../../../shared/models/post';
import { getPostDetail } from '../../network/post/getPostDetail';
import { delPost } from '../../network/post/delPost';
import { isEdited, setIsEdited } from '../../hooks/useIsEdited';

import router from '../../router';
import getQuery from '../../utils/getQuery';
import Markdown from 'vue3-markdown-it';
import jump from '../../utils/jump';

import Edit from '../../components/Edit/Edit.vue';

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

  &-main {
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

    &-content {
      min-height: 400px;
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
}
</style>
