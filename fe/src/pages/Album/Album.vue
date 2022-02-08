<template>
  <div class="album">
    <SideBar />
    <div class="album-main">
      <h1 class="album-main-title">
        相册
      </h1>
      <div class="album-main-body">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from '../../components/SideBar/SideBar.vue';
</script>

<style lang="scss">
.album {
  display: flex;
  justify-content: center;

  &-main {
    width: 850px;
    padding: 30px;

    &-title {
      font-size: 24px;
      text-align: center;
      margin: 30px 0;
    }
  }
}
</style>
