<template>
  <div class="c-sidebar-list">
    <div class="c-sidebar-list-header">
      <div class="c-sidebar-list-header-title">Milestone</div>
      <div class="c-sidebar-list-header-subtitle">{{ motto }}</div>
    </div>
    <div class="c-sidebar-list-body">
      <div
        class="c-sidebar-list-body-item"
        :class="{ selected: currentPage === 'home' }"
        @click="handleClick('home')"
      >
        <svg-icon name="shouye" :styleConfig="styleConfig" />
        首页
      </div>
      <div
        class="c-sidebar-list-body-item"
        :class="{ selected: currentPage === 'tags' }"
        @click="handleClick('tags')"
      >
        <svg-icon name="gf-tags" :styleConfig="styleConfig" />
        标签
      </div>
      <div
        class="c-sidebar-list-body-item"
        :class="{ selected: currentPage === 'search' }"
        @click="handleClick('search')"
      >
        <svg-icon name="sousuo" :styleConfig="styleConfig" />
        搜索
      </div>
      <div
        class="c-sidebar-list-body-item"
        :class="{ selected: currentPage === 'resume' }"
        @click="handleClick('resume')"
      >
        <svg-icon name="jianli" :styleConfig="styleConfig" />
        简历
      </div>
      <div
        class="c-sidebar-list-body-item"
        :class="{ selected: currentPage === 'album' }"
        @click="handleClick('album')"
      >
        <svg-icon name="tupian" :styleConfig="styleConfig" />
        相册
      </div>
      <hr class="c-sidebar-list-body-hr" />
      <div
        class="c-sidebar-list-body-item"
        :class="{ selected: currentPage === 'edit' }"
        @click="handleClick('edit')"
      >
        发表文章
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { currentPage } from '../../../../hooks/useCurPage';
import { curPageType } from '../../../../models/curPage';
import { isEdited } from '../../../../hooks/useIsEdited';

import jump from '../../../../utils/jump';

// 用于传入svg
const styleConfig = {
  color: '#333',
  position: 'relative',
  top: '-1px',
};

const motto = '用进废退 | 艺不压身';

function handleClick(val: curPageType) {
  if (val === 'home') {
    // jump('/', { page: '0' });
    jump('/');
  } else {
    jump(`/${val}`);
  }
  currentPage.value = val;
  isEdited.value = false;
}
</script>

<style lang="scss">
.c-sidebar-list {
  // border: 1px solid #F6F7F9;
  margin-bottom: 12px;
  background-color: #fff;

  &-header {
    color: #fff;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 22px 0;

    &-title {
      font-size: 26px;
      margin-bottom: 10px;
    }

    &-subtitle {
      font-size: 13px;
    }
  }

  &-body {
    padding: 12px 0;

    &-hr {
      width: 96%;
      margin: 4px auto;
      // background-color: #F6F7F9 !important;
      border: none;
      height: 1px;
    }

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
      background-color: #f5f5f5;
    }

    &-item.selected {
      background-color: #f5f5f5;
    }
  }
}
</style>
