<template>
  <div class="app_wrapper-search">
    <div class="app_wrapper-search-title">搜索（支持正则）</div>
    <div class="app_wrapper-search-input_wrapper">
      <input type="text" class="app_wrapper-search-input_wrapper-input" />
      <svg-icon
        name="sousuo"
        :styleConfig="{
          fontSize: '20px',
          position: 'absolute',
          right: '20px',
          cursor: 'pointer',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.app_wrapper-search {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;

  &-title {
    font-size: 24px;
    text-align: center;
    margin: 30px 0;
  }

  &-input_wrapper {
    height: 200px;
    width: 467px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    &-input {
      outline: none;
      border: 1px solid #aaa;
      width: 400px;
      height: 50px;
      line-height: 50px;
      background-color: #eee;
      padding: 0 50px 0 15px;
      border-radius: 25px;
    }
  }
}
</style>
