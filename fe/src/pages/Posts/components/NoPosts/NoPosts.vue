<template>
  <div class="app_wrapper-home-no_posts">
    <span class="app_wrapper-home-no_posts-hint"> 什么都没有呢... </span>
    <div class="app_wrapper-home-no_posts-decorate"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '../../../../styles/color-var.scss';

.app_wrapper-home-no_posts {
  display: flex;
  margin: 60px auto;
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 225px;
  position: relative;
  border-radius: 50%;
  font-size: 14px;

  &-decorate {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border: {
      top: 1px solid #777;
      bottom: 1px solid #888;
    }
    animation: rotate infinite linear;
    animation-duration: 6s;
    animation-delay: -3s;
    border-radius: 50%;

    &::before,
    &::after {
      content: '';
      border: 1px solid transparent;
      border-radius: 50%;
      position: absolute;
      animation: rotate infinite linear;
    }

    &::before {
      border-top: 1px solid #999;
      top: -10px;
      bottom: -10px;
      right: -10px;
      left: -10px;
      animation-duration: 10s;
      animation-delay: -2s;
    }

    &::after {
      border-top: 1px solid #999;
      top: 10px;
      bottom: 10px;
      right: 10px;
      left: 10px;
      animation-duration: 7s;
      animation-delay: -5s;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  &-hint {
    margin: 0 2rem;
    word-break: break-all;
    color: #333;
  }
}
</style>
