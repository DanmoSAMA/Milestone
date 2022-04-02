<template>
  <div class="c-sidebar">
    <List />
    <UserInfo />
  </div>
</template>

<script setup lang="ts">
import List from './components/List/List.vue'
import UserInfo from './components/UserInfo/UserInfo.vue'
</script>

<style lang="scss">
.c-sidebar {
  width: 300px;
  margin-right: 12px;
  flex-shrink: 0;
  // 该值待定
  max-height: 1000vh;
  position: relative;
}

@media only screen and (max-width: 760px) {
  .c-sidebar {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }
}
</style>
