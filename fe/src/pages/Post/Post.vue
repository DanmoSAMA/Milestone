<template>
  <div class="app_wrapper-post">
    <div
      :class="
        showContent ? 'app_wrapper-post-main' : 'app_wrapper-post-main hidden'
      "
      v-if="!postStore.isEdited"
    >
      <h1 class="app_wrapper-post-main-title">
        {{ postStore.title }}
      </h1>
      <div class="app_wrapper-post-main-tags">
        <div
          class="app_wrapper-post-main-tags-item"
          v-for="tag in postStore.tags"
          :key="tag"
          @click="jump('/posts', { page: '0', tag })"
        >
          {{ tag }}
        </div>
      </div>
      <div class="app_wrapper-post-main-content">
        <Markdown
          :source="postStore.content"
          class="app_wrapper-post-main-content-markdown_body"
        />
      </div>
      <div class="app_wrapper-post-main-btn">
        <div
          class="app_wrapper-post-main-btn-edit"
          @click="postStore.setIsEdited(true)"
        >
          编辑
        </div>
        <div class="app_wrapper-post-main-btn-delete" @click="handleDel()">
          删除
        </div>
      </div>
    </div>
    <!--此处必须用v-if，如果用v-show，一开始就会生成vdom，会直接把没有值的props传给Edit-->
    <Edit
      v-if="postStore.isEdited"
      :defaultTitle="postStore.title"
      :defaultTags="postStore.tags"
      :defaultContent="postStore.content"
      :id="postStore.id"
      :type="1"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { delPost } from '../../network/post/delPost'
import { getToken } from '../../utils/token'
import { tagsStore } from '../../pinia/tags'
import { postStore } from '../../pinia/post'
import { postsStore } from '../../pinia/posts'

import router from '../../router'
import getQuery from '../../utils/getQuery'
import Markdown from 'vue3-markdown-it'
import jump from '../../utils/jump'

import Edit from '../../components/Edit/Edit.vue'

const id = <string>getQuery().id
const showContent = ref(false)

postStore.setPost(id).then((check) => {
  if (!check) {
    alert('未找到文章')
    jump('/posts', { page: '0' })
  }
})

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 600)
})

async function handleDel() {
  if (!getToken()) {
    alert('请先登陆')
    jump('/login')
  } else {
    if (confirm('确认删除文章吗?')) {
      const check = await delPost(id)
      if (check) {
        alert('删除成功!')
        tagsStore.setTags()
        postsStore.setCnt()
        jump('/posts', { page: '0' })
      }
    }
  }
}
</script>

<style lang="scss" scope>
.app_wrapper-post {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  opacity: 1;
  transition: 0.8s all;

  &-main {
    transition: 0.8s all;
    opacity: 1;
    padding-top: 10px;
    position: relative;
    top: 0;

    &-title {
      font-size: 45px;
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
        white-space: nowrap;
      }

      &-item:hover {
        background-color: #6c757d;
        color: #fff;
      }
    }

    &-content {
      min-height: 400px;
      overflow: hidden;
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

  &-main.hidden {
    opacity: 0;
    padding-top: 10px;
    top: -10px;
  }
}

@media only screen and (max-width: 760px) {
  .app_wrapper-post {
    width: 100%;

    &-main {
      &-title {
        font-size: 40px;
      }
      &-tags {
        &-item {
          font-size: 14px;
        }
      }
    }
  }
}

@media only screen and (max-width: 460px) {
  .app_wrapper-post {
    padding: 10px;

    &-main {
      &-title {
        font-size: 30px;
      }

      &-tags {
        &-item {
          font-size: 12px;
          letter-spacing: 0;
          height: 20px;
          line-height: 20px;
        }
      }

      &-btn {
        &-edit,
        &-delete {
          width: 80px;
          height: 25px;
          line-height: 25px;
          border-radius: 12.5px;
          font-size: 14px;
        }

        &-edit {
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
