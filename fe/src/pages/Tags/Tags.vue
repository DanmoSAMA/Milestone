<template>
  <div class="app_wrapper-tags">
    <div
      :class="
        showContent ? 'app_wrapper-tags-inner' : 'app_wrapper-tags-inner hidden'
      "
    >
      <div class="app_wrapper-tags-inner-title">标签</div>
      <div class="app_wrapper-tags-inner-count">
        目前共计{{ tagsStore.tags.length }}个标签
      </div>
      <div class="app_wrapper-tags-inner-cloud">
        <div
          class="app_wrapper-tags-inner-cloud-item"
          v-for="tag in tagsStore.tags"
          :key="tag"
          @click="handleClick(tag)"
        >
          {{ tag.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTags } from '../../pinia/tags'
import { currentPage } from '../../hooks/useCurPage'
import jump from '../../utils/jump'

const tagsStore = useTags()
const showContent = ref(false)

onMounted(async () => {
  tagsStore.setTags()
})

setTimeout(() => {
  showContent.value = true
}, 600)

function handleClick(tag: string) {
  currentPage.value = 'posts'
  jump('/posts', { page: '0', tag })
}
</script>

<style lang="scss">
.app_wrapper-tags {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;

  &-inner {
    transition: all 0.8s;
    position: relative;
    top: 0;

    &-title {
      font-size: 35px;
      text-align: center;
      margin: 30px 0;
    }

    &-count {
      text-align: center;
      font-size: 14px;
      margin: 15px 0 35px 0;
    }

    &-cloud {
      display: flex;
      flex-wrap: wrap;
      line-height: 40px;
      justify-content: center;
      align-items: center;

      &-item {
        margin: 10px;
        font-size: 24px;
        color: #555;
        transition: 0.2s color;
        cursor: pointer;
      }

      &-item:hover {
        color: #000;
      }
    }
  }

  &-inner.hidden {
    opacity: 0;
    top: -10px;
  }
}

@media only screen and (max-width: 760px) {
  .app_wrapper-tags {
    width: 100%;
    box-sizing: border-box;
    min-height: 600px;
  }
}

@media only screen and (max-width: 460px) {
  .app_wrapper-tags {
    &-inner {
      &-cloud {
        line-height: 25px;

        &-item {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
