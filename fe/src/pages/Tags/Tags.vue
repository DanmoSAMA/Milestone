<template>
  <div class="tags">
    <SideBar />
    <div class="tags-main">
      <h1 class="tags-main-title">标签</h1>
      <div class="tags-main-cloud">
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
        <span class="tags-main-cloud-item">标签</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from '../../components/SideBar/SideBar.vue';
</script>

<style lang="scss">
.tags {
  margin: 0 auto;
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
}
</style>
