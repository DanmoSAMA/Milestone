<template>
  <div class="c-pager">
    <div class="c-pager-cur_page">第{{ curPageNum }}页</div>
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
          curPageNum === totalPageNum - 1
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
import { curPageNum, totalPageNum } from '../../hooks/usePage';
import jump from '../../utils/jump';

function toPrePage() {
  curPageNum.value--;
  jump('/posts', { page: `${curPageNum.value}` });
}

function toNextPage() {
  curPageNum.value++;
  jump('/posts', { page: `${curPageNum.value}` });
}
</script>

<style lang="scss" scope>
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
    background-color: #016dff;
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
</style>
