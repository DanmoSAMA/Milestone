<template>
  <div class="app_wrapper-edit">
    <div class="app_wrapper-edit-body">
      <input type="text" class="app_wrapper-edit-body-input" v-model="title" />
      <Tags :chosenTags="chosenTags" />
      <textarea
        class="app_wrapper-edit-body-textarea"
        v-model="content"
      ></textarea>
      <span class="app_wrapper-edit-body-btn" @click="sendPostReq()">发表</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { addPost } from '../../network/post/addPost';
import Tags from './components/Tags/Tags.vue';

const title = ref('');
const content = ref('');

// 被选择的标签
const chosenTags = reactive([]);

// 发送请求
const sendPostReq = async () => {
  const data = {
    title: title.value,
    content: content.value,
    tags: chosenTags,
  };
  if (title.value.length && content.value.length) {
    const check = await addPost(data);
    // toggle的逻辑
    if (check) alert('发送成功');
  } else alert('标题或内容不能为空');
};
</script>

<style lang="scss">
.app_wrapper-edit {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;

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

    &-btn:hover {
      background-color: #016dff;
      color: #fff;
    }
  }
}
</style>
