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
        <span class="c-edit-body-btn-update" v-show="props.type === 1">
          更新
        </span>
        <span class="c-edit-body-btn-return" @click="toHome()"> 返回 </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { addPost } from '../../network/post/addPost';
import { currentPage } from '../../hooks/useCurPage';

import jump from '../../utils/jump';
import Tags from './components/Tags/Tags.vue';

const props = defineProps({
  defaultTitle: String,
  defaultTags: Array,
  defaultContent: String,
  type: Number, // 0 表示新建，1 表示编辑
});

// const { currentPage, changeCurPage } = useCurPage();

const title = ref(props.defaultTitle);
const content = ref(props.defaultContent);

// 被选择的标签
const chosenTags = reactive(props.defaultTags);

// 创建文章
const sendPostReq = async () => {
  const data = {
    title: title.value,
    content: content.value,
    tags: chosenTags as string[],
  };
  if (title.value.length && content.value.length) {
    const check = await addPost(data);
    // toggle的逻辑
    if (check) {
      alert('发表成功');
      jump('/');
      // changeCurPage('home');
      currentPage.value = 'home';
    }
  } else alert('标题或内容不能为空');
};

// 更新文章

// 返回首页
function toHome() {
  if (title.value !== '' || chosenTags.length !== 0 || content.value !== '') {
    if (confirm('内容将不会保存，确定返回首页吗')) {
      jump('/');
      // changeCurPage('home');
      currentPage.value = 'home';
    }
  } else {
    jump('/');
    // changeCurPage('home');
    currentPage.value = 'home';
  }
}
</script>

<style lang="scss">
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
      background-color: #f8f9fa;
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
        background-color: #f8f9fa;
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
        background-color: #016dff;
        color: #fff;
      }
    }
  }
}
</style>
