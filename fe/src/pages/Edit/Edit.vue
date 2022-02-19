<template>
  <div class="app_wrapper-edit">
    <div class="app_wrapper-edit-body">
      <input type="text" class="app_wrapper-edit-body-input" />
      <div class="app_wrapper-edit-body-tags">
        <span class="app_wrapper-edit-body-tags-add">
          + 添加标签
        </span>
      </div>
      <textarea
        cols="30"
        rows="10"
        class="app_wrapper-edit-body-textarea"
      ></textarea>
      <span class="app_wrapper-edit-body-btn">发表</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
      background-color: #F8F9FA;
    }

    &-input {
      height: 30px;
      line-height: 30px;
      font-size: 18px;
    }

    &-tags {
      height: 55px;
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      color: #6C757D;

      &-add {
        height: 30px;
        line-height: 30px;
        border: 1px solid #6C757D;
        padding: 3px;
        font-size: 14px;
        border-radius: 2px;
        cursor: pointer;
        transition: .3s all;
      }

      &-add:hover {
        background-color: #6C757D;
        color: #fff;
      }
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
      background-color: #F8F9FA;
      cursor: pointer;
      transition: all .3s;
    }

    &-btn:hover {
      background-color: #016dff;
      color: #fff;
    }
  }
}
</style>
