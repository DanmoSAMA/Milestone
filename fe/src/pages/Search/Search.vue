<template>
  <div class="app_wrapper-search">
    <div
      :class="
        showContent
          ? 'app_wrapper-search-inner'
          : 'app_wrapper-search-inner hidden'
      "
    >
      <div class="app_wrapper-search-inner-title">搜索</div>
      <div class="app_wrapper-search-inner-hint">支持搜索标题</div>
      <div class="app_wrapper-search-inner-input_wrapper">
        <input
          type="text"
          class="app_wrapper-search-inner-input_wrapper-input"
          @keyup.enter="search(searchStr)"
          v-model="searchStr"
        />
        <svg-icon
          name="sousuo"
          :styleConfig="{
            fontSize: '20px',
            position: 'absolute',
            right: '6%',
            cursor: 'pointer'
          }"
          @click="search(searchStr)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { currentPage } from '../../hooks/useCurPage'
import jump from '../../utils/jump'

const searchStr = ref('')
const showContent = ref(false)

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 600)
})

function search(searchStr) {
  currentPage.value = 'posts'
  if (searchStr) {
    jump('/posts', { page: '0', kw: searchStr })
  } else {
    alert('搜索内容不能为空')
  }
}
</script>

<style lang="scss">
@import '../../styles/color-var.scss';

.app_wrapper-search {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;

  &-inner {
    transition: 0.8s all;
    position: relative;
    top: 0;

    &-title {
      font-size: 35px;
      text-align: center;
      margin: 30px 0;
    }

    &-hint {
      text-align: center;
      font-size: 14px;
    }

    &-input_wrapper {
      height: 160px;
      width: 75%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;

      &-input {
        outline: none;
        border: 1px solid #bbb;
        width: 80%;
        height: 50px;
        line-height: 50px;
        background-color: $form-bg;
        padding: 0 8% 0 15px;
        border-radius: 25px;
      }
    }
  }

  &-inner.hidden {
    opacity: 0;
    top: -10px;
  }
}

@media only screen and (max-width: 760px) {
  .app_wrapper-search {
    width: 100%;
    box-sizing: border-box;
    min-height: 600px;

    &-inner {
      &-input_wrapper {
        width: 90%;
      }
    }
  }
}
</style>
