<template>
  <div class="search">
    <SideBar />
    <div class="search-main">
      <h1 class="search-main-title">搜索（支持正则）</h1>
      <div class="search-main-input_wrapper">
        <input type="text" class="search-main-input_wrapper-input" />
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
  </div>
</template>

<script setup lang="ts">
import SideBar from '../../components/SideBar/SideBar.vue';
</script>

<style lang="scss">
.search {
  display: flex;
  justify-content: center;

  &-main {
    width: 850px;
    padding: 30px;

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
}
</style>
