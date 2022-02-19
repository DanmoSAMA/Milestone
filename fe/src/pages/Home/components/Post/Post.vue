<template>
  <div class="app_wrapper-home-posts-post">
    <div class="app_wrapper-home-posts-post-title">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const { title } = props.post
</script>

<style lang="scss">
.app_wrapper-home-posts-post {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #E5E6EA;

  &-title {
    font-size: 26px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
    max-width: 550px;
    padding: 20px;
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
}
</style>
