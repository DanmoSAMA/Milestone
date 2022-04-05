<template>
  <div
    :class="
      showContent
        ? 'c-sidebar-list-body-wrapper'
        : 'c-sidebar-list-body-wrapper hidden'
    "
  >
    <div
      class="c-sidebar-list-body-wrapper-item"
      :class="{ selected: currentPage === 'posts' }"
      @click="handleClick('posts')"
    >
      <svg-icon name="index" />
      首页
    </div>
    <div
      class="c-sidebar-list-body-wrapper-item"
      :class="{ selected: currentPage === 'tags' }"
      @click="handleClick('tags')"
    >
      <svg-icon name="tag" />
      标签
    </div>
    <div
      class="c-sidebar-list-body-wrapper-item"
      :class="{ selected: currentPage === 'search' }"
      @click="handleClick('search')"
    >
      <svg-icon name="search" />
      搜索
    </div>
    <hr class="c-sidebar-list-body-wrapper-hr" />
    <div
      class="c-sidebar-list-body-wrapper-item"
      :class="{ selected: currentPage === 'edit' }"
      @click="handleClick('edit')"
    >
      发表文章
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { currentPage } from '../../../../../../hooks/useCurPage'
import { curPageNum } from '../../../../../../hooks/usePage'
import { curPageType } from '../../../../../../models/curPage'
import { tag } from '../../../../../../hooks/useTag'
import { kw } from '../../../../../../hooks/useKw'
import { postStore } from '../../../../../../pinia/post'

import jump from '../../../../../../utils/jump'

const showContent = ref(false)

setTimeout(() => {
  showContent.value = true
}, 300)

function handleClick(val: curPageType) {
  currentPage.value = val
  postStore.setIsEdited(false)
  tag.value = ''
  kw.value = ''

  if (val === 'posts') jump('/posts', { page: '0' })
  else jump(`/${val}`)
}
</script>

<style lang="scss" scope>
@import '../../../../../../styles/color-var.scss';

.svg-icon {
  color: #333;
  position: relative;
  top: -1px;
}

.c-sidebar-list-body-wrapper {
  padding: 12px 0;
  opacity: 1;
  transition: all 0.3s;
  overflow: hidden;

  &-hr {
    width: 96%;
    margin: 4px auto;
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

.c-sidebar-list-body-wrapper.hidden {
  opacity: 0;
}

@media only screen and (max-width: 760px) {
  .c-sidebar-list-body-wrapper.collapse {
    height: 0;
  }
}
</style>
