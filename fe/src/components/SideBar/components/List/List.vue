<template>
  <div class="c-sidebar-list">
    <div class="c-sidebar-list-header">
      <h1 class="c-sidebar-list-header-title">Milestone</h1>
      <h2 class="c-sidebar-list-header-subtitle">test</h2>
    </div>
    <div class="c-sidebar-list-body">
      <div class="c-sidebar-list-body-item selected" @click="jump('/')">
        <svg-icon name="shouye" :styleConfig="styleConfig" />
        首页
      </div>
      <div class="c-sidebar-list-body-item" @click="jump('/tags')">
        <svg-icon name="gf-tags" :styleConfig="styleConfig" />
        标签
      </div>
      <div class="c-sidebar-list-body-item" @click="jump('/search')">
        <svg-icon name="sousuo" :styleConfig="styleConfig" />
        搜索
      </div>
      <div class="c-sidebar-list-body-item" @click="jump('/resume')">
        <svg-icon name="jianli" :styleConfig="styleConfig" />
        简历
      </div>
      <div class="c-sidebar-list-body-item" @click="jump('/album')">
        <svg-icon name="tupian" :styleConfig="styleConfig" />
        相册
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '../../../../router'

// 用于传入svg
const styleConfig = {
  color: '#333', 
  position: 'relative', 
  top: '-1px',
}

function jump(path: string) {
  router.push({ path });
}

</script>

<style lang="scss">
.c-sidebar-list {
  border: 1px solid #eee;
  margin-bottom: 12px;

  &-header {
    color: #fff;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;

    &-title {
      font-size: 24px;
      margin-bottom: 10px;
    }

    &-subtitle {
      font-size: 15px;
    }
  }

  &-body {
    padding: 12px 0;

    &-item {
      padding: 0 20px;
      font-size: 14px;
      color: #333;
      height: 33px;
      line-height: 33px;
      cursor: pointer;
      transition: 0.3s background-color;
    }

    &-item:hover {
      background-color: #eee;
    }

    &-item.selected {
      background-color: #eee;
    }
  }
}
</style>
