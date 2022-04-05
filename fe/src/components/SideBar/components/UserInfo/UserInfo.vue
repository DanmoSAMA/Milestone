<template>
  <div
    :class="showContent ? 'c-sidebar-userinfo' : 'c-sidebar-userinfo hidden'"
  >
    <div class="c-sidebar-userinfo-avatar">
      <img
        class="c-sidebar-userinfo-avatar-img"
        src="../../../../assets/images/avatar.jpg"
      />
    </div>
    <div class="c-sidebar-userinfo-name">Danmoits</div>
    <div class="c-sidebar-userinfo-count">
      <div class="c-sidebar-userinfo-count-posts">
        <span class="c-sidebar-userinfo-count-posts-count">
          {{ postsStore.posts.length }}
        </span>
        <span class="c-sidebar-userinfo-count-posts-title"> 日志 </span>
      </div>
      <div class="c-sidebar-userinfo-count-tags">
        <span class="c-sidebar-userinfo-count-tags-count">
          {{ tagsStore.tags.length }}
        </span>
        <span class="c-sidebar-userinfo-count-tags-title"> 标签 </span>
      </div>
    </div>
    <div class="c-sidebar-userinfo-contact"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePosts } from '../../../../pinia/posts'
import { useTags } from '../../../../pinia/tags'
import { currentPage } from '../../../../hooks/useCurPage'

const postsStore = usePosts()
const tagsStore = useTags()
const showContent = ref(false)

onMounted(async () => {
  // 避免重复请求，导致request.ts抛出错误
  if (currentPage.value !== 'tags') {
    tagsStore.setTags()
  }
})

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 1500)
})
</script>

<style lang="scss">
.c-sidebar-userinfo {
  // border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  position: sticky;
  top: 10px;
  background-color: #fff;
  transition: 1s all;
  opacity: 1;
  margin-top: 0;

  &-avatar {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #ddd;
    overflow: hidden;
    position: relative;

    &-img {
      position: absolute;
      width: 160px;
      left: -10px;
      top: 0;
      transition: 1.2s all;
    }

    &-img:hover {
      transform: rotate(360deg);
    }
  }

  &-name {
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    font-size: 18px;
  }

  &-count {
    display: flex;
    margin: 15px 0 5px 0;

    &-posts,
    &-tags {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 5px 0 5px;

      &-title {
        font-size: 13px;
        color: #777;
      }

      &-count {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
}

.c-sidebar-userinfo.hidden {
  opacity: 0;
  margin-top: 25px;
}

@media only screen and (max-width: 760px) {
  .c-sidebar-userinfo {
    display: none;
  }
}
</style>
