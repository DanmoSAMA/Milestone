<template>
  <div class="c-sidebar-list-body">
    <div
      class="c-sidebar-list-body-item"
      :class="{ selected: currentPage === 'posts' }"
      @click="handleClick('posts')"
    >
      <svg-icon name="shouye" :styleConfig="listIconStyleConfig" />
      首页
    </div>
    <div
      class="c-sidebar-list-body-item"
      :class="{ selected: currentPage === 'tags' }"
      @click="handleClick('tags')"
    >
      <svg-icon name="gf-tags" :styleConfig="listIconStyleConfig" />
      标签
    </div>
    <div
      class="c-sidebar-list-body-item"
      :class="{ selected: currentPage === 'search' }"
      @click="handleClick('search')"
    >
      <svg-icon name="sousuo" :styleConfig="listIconStyleConfig" />
      搜索
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { currentPage } from '../../../../../../hooks/useCurPage'
import { curPageNum } from '../../../../../../hooks/usePage';
import { curPageType } from '../../../../../../models/curPage';
import { isEdited } from '../../../../../../hooks/useIsEdited';
import { tag } from '../../../../../../hooks/useTag';
import { kw } from '../../../../../../hooks/useKw';

import jump from '../../../../../../utils/jump';

// const showContent = ref(false);

// setTimeout(() => {
//   showContent.value = true
// }, 500)


// 用于传入svg
const listIconStyleConfig = {
  color: '#333',
  position: 'relative',
  top: '-1px',
};

function handleClick(val: curPageType) {
  currentPage.value = val;
  isEdited.value = false;
  tag.value = '';
  kw.value = '';

  if (val === 'posts') jump('/posts', { page: '0' });
  else jump(`/${val}`);
}
</script>

<style lang="scss">
@import '../../../../../../styles/color-var.scss';

.c-sidebar-list-body {
  padding: 12px 0;
  transition: all .3s;
  overflow: hidden;

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
    background-color: $sidebar-bg-on;
  }

  &-item.selected {
    background-color: $sidebar-bg-on;
  }
}

@media only screen and (max-width: 760px) {
  .c-sidebar-list-body.collapse {
    height: 0;
  }
}
</style>
