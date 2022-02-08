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
  background-color: #fff;
  max-height: 100vh;
}
</style>