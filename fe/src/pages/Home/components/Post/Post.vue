<template>
  <div class="app_wrapper-home-posts-post">
    <div
      class="app_wrapper-home-posts-post-title"
      @click="jump('/posts', { id })"
    >
      {{ title }}
    </div>
    <div class="app_wrapper-home-posts-post-tags">
      <div
        class="app_wrapper-home-posts-post-tags-item"
        v-for="tag in tags"
        :key="tag"
        @click="jump('/', { tag })"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import jump from '../../../../utils/jump';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const { id } = props;
const { title, tags } = props.post;
</script>

<style lang="scss">
.app_wrapper-home-posts-post {
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border-bottom: 1px solid #e5e6ea;
  position: relative;

  &-title {
    font-size: 30px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
    max-width: 550px;
    padding: 10px 25px;
    position: relative;
    overflow: hidden;
    font-weight: normal;
  }

  &-title::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    border-bottom: 4px double transparent;
    border-left: 4px double transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }

  &-title::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 2px;
    width: 100%;
    border-top: 4px double transparent;
    border-right: 4px double transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }

  &-title:hover {
    box-shadow: 0 5px 15px rgba($color: #000000, $alpha: 0.5);
  }

  &-title:hover:before {
    border-color: #262626;
    height: 100%;
    transform: translateX(0);
    transition: 0.3s transform linear, 0.3s height linear;
  }

  &-title:hover:after {
    border-color: #262626;
    height: 100%;
    transform: translateX(0);
    transition: 0.3s transform linear, 0.3s height linear;
  }

  &-tags {
    display: flex;
    margin-top: 10px;

    &-item {
      cursor: pointer;
      height: 25px;
      line-height: 25px;
      margin-right: 10px;
      border: 1px solid #6c757d;
      color: #6c757d;
      padding: 0 8px;
      border-radius: 3px;
      transition: all 0.3s;
    }

    &-item:hover {
      background-color: #6c757d;
      color: #fff;
    }
  }
}

.app_wrapper-home-posts-post::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 1px;
  background-color: #e5e6ea;
  bottom: 0;
}
</style>
