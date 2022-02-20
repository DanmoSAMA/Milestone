<template>
  <div class="app_wrapper-tags">
    <div class="app_wrapper-tags-title">标签</div>
    <div class="app_wrapper-tags-cloud">
      <div class="app_wrapper-tags-cloud-item">标签</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.app_wrapper-tags {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;

  &-title {
    font-size: 24px;
    text-align: center;
    margin: 30px 0;
  }

  &-cloud {
    display: flex;
    flex-wrap: wrap;
    line-height: 40px;
    justify-content: center;
    align-items: center;

    &-item {
      margin: 10px;
    }
  }
}
</style>
