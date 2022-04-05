<template>
  <div class="c-edit">
    <div class="c-edit-body">
      <input type="text" class="c-edit-body-input" v-model="title" />
      <Tags :chosenTags="chosenTags" />
      <textarea class="c-edit-body-textarea" v-model="content"></textarea>
      <div class="c-edit-body-btn">
        <span
          class="c-edit-body-btn-create"
          @click="sendPostReq()"
          v-show="props.type === 0"
        >
          发表
        </span>
        <span
          class="c-edit-body-btn-update"
          @click="updatePost()"
          v-show="props.type === 1"
        >
          更新
        </span>
        <span
          class="c-edit-body-btn-return"
          @click="toHome()"
          v-show="props.type === 0"
        >
          返回首页
        </span>
        <span
          class="c-edit-body-btn-return"
          @click="toPost()"
          v-show="props.type === 1"
        >
          返回文章
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { addPost } from '../../network/post/addPost'
import { currentPage } from '../../hooks/useCurPage'
import { updatePost as updatePostReq } from '../../network/post/updatePost'
import { tagsStore } from '../../pinia/tags'
import { postStore } from '../../pinia/post'

import jump from '../../utils/jump'
import Tags from './components/Tags/Tags.vue'

import { getToken } from '../../utils/token'

onMounted(() => {
  if (!getToken()) {
    alert('请先登陆')
    jump('/login')
  }
})

const props = defineProps({
  defaultTitle: String,
  defaultTags: Array,
  defaultContent: String,
  id: String,
  type: Number // 0 表示新建，1 表示编辑
})

const title = ref(props.defaultTitle)
const content = ref(props.defaultContent)

// 被选择的标签
const chosenTags = ref([...props.defaultTags])

// 创建文章
const sendPostReq = async () => {
  const data = {
    title: title.value,
    content: content.value,
    tags: chosenTags.value
  }
  if (title.value.length && content.value.length) {
    // 登陆相关逻辑
    const check = await addPost(data)
    // toggle的逻辑
    if (check) {
      alert('发表成功')
      tagsStore.setTags()
      jump('/posts', { page: '0' })
      currentPage.value = 'posts'
    }
  } else alert('标题或内容不能为空')
}

// 更新文章（更新后需要刷新一次页面，因为没有重新生成Posts组件，数据还是之前请求的数据）
async function updatePost() {
  const data = {
    title: title.value,
    content: content.value,
    tags: chosenTags.value
  }
  const res = await updatePostReq(data, props.id)
  if (res) {
    alert('更新成功')
    tagsStore.setTags()
  }
  postStore.setIsEdited(false)
}

// 返回首页
function toHome() {
  if (
    title.value !== '' ||
    chosenTags.value.length !== 0 ||
    content.value !== ''
  ) {
    if (confirm('内容将不会被保存，确定返回吗')) {
      jump('/posts', { page: '0' })
      currentPage.value = 'posts'
    }
  } else {
    jump('/posts', { page: '0' })
    currentPage.value = 'posts'
  }
}

// 返回该文章
function toPost() {
  if (
    title.value !== '' ||
    chosenTags.value.length !== 0 ||
    content.value !== ''
  ) {
    if (confirm('内容将不会被保存，确定返回吗')) {
      postStore.setIsEdited(false)
    }
  } else {
    postStore.setIsEdited(false)
  }
}
</script>

<style lang="scss">
@import '../../styles/color-var.scss';

.c-edit {
  &-title {
    font-size: 24px;
    text-align: center;
    margin: 30px 0;
  }

  &-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-input,
    &-textarea {
      outline: none;
      border: 1px solid #bbb;
      padding: 8px;
      font-family: 'Times New Roman', Times, serif;
      width: 100%;
      border-radius: 3px;
      background-color: $form-bg;
      box-sizing: border-box;
    }

    &-input {
      height: 45px;
      line-height: 45px;
      font-size: 18px;
    }

    &-textarea {
      resize: none;
      height: 500px;
      font-size: 16px;
    }

    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;

      &-create,
      &-update,
      &-return {
        text-align: center;
        margin-top: 20px;
        height: 36px;
        line-height: 36px;
        width: 120px;
        border: 1px solid #bbb;
        border-radius: 18px;
        background-color: $form-bg;
        cursor: pointer;
        transition: all 0.3s;
      }

      &-create,
      &-update {
        margin-right: 60px;
      }

      &-create:hover,
      &-update:hover,
      &-return:hover {
        background-color: $btn-bg-on;
        color: #fff;
      }
    }
  }
}

@media only screen and (max-width: 460px) {
  .c-edit {
    &-body {
      &-btn {
        &-create,
        &-update,
        &-return {
          text-align: center;
          margin-top: 20px;
          height: 30px;
          line-height: 30px;
          width: 80px;
          font-size: 13px;
        }

        &-create,
        &-update {
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
