<template>
  <div class="resume">
    <SideBar />
    <div class="resume-main">
      <h1 class="resume-main-title">
        简历
      </h1>
      <div class="resume-main-body">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from '../../components/SideBar/SideBar.vue';
</script>

<style lang="scss">
.resume {
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
