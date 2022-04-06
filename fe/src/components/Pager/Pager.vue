<template>
  <div class="c-pager">
    <div class="c-pager-cur_page" @click="toIndex()">第{{ curPageNum }}页</div>
    <div class="c-pager-btn">
      <div
        :class="
          curPageNum === 0 ? 'c-pager-btn-pre disabled' : 'c-pager-btn-pre'
        "
        @click="toPrePage()"
      >
        上一页
      </div>
      <div
        :class="
          curPageNum === Math.floor((postsStore.filteredCnt - 1) / 8)
            ? 'c-pager-btn-pre disabled'
            : 'c-pager-btn-pre'
        "
        @click="toNextPage()"
      >
        下一页
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUpdated } from 'vue'
import { curPageNum } from '../../hooks/usePageNum'
import { postsStore } from '../../pinia/posts'
import jump from '../../utils/jump'
import getQuery from '../../utils/getQuery'

let kw = getQuery().kw as string

onUpdated(() => {
  kw = getQuery().kw as string
})

async function toIndex() {
  curPageNum.value = 0

  if (kw) {
    await postsStore.setPosts(0, kw)
  } else {
    await postsStore.setPosts(0)
  }
  jump('/posts', { page: '0' })
}

async function toPrePage() {
  curPageNum.value--

  if (kw) {
    await postsStore.setPosts(curPageNum.value, kw)
  } else {
    await postsStore.setPosts(curPageNum.value)
  }
  jump('/posts', { page: `${curPageNum.value}` })
}

async function toNextPage() {
  curPageNum.value++

  if (kw) {
    await postsStore.setPosts(curPageNum.value, kw)
  } else {
    await postsStore.setPosts(curPageNum.value)
  }
  jump('/posts', { page: `${curPageNum.value}` })
}
</script>

<style lang="scss" scope>
@import '../../styles/color-var.scss';

.c-pager {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  position: absolute;
  bottom: 0;

  .btn {
    width: 80px;
    padding: 5px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #bbb;
    border-radius: 20px;
    background-color: #f8f9fa;
    cursor: pointer;
    transition: all 0.3s;
  }

  .btn:hover {
    background-color: $btn-bg-on;
    color: #fff;
  }

  .disabled {
    // cursor: default;
    pointer-events: none;
    background-color: #ccc;
    color: #666;
  }

  .disabled:hover {
    background-color: #ccc;
    color: #666;
  }

  &-cur_page {
    @extend .btn;
  }

  &-btn {
    display: flex;

    &-pre,
    &-next {
      @extend .btn;
    }

    &-pre {
      margin-right: 20px;
    }

    &-pre.disabled,
    &-next.disabled {
      @extend .disabled;
    }
  }
}

@media only screen and (max-width: 460px) {
  .c-pager {
    .btn {
      width: 60px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
    }

    &-btn {
      &-pre {
        margin-right: 5px;
      }
    }
  }
}
</style>
