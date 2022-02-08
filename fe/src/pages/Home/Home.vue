<template>
  <div class="home">
    <SideBar />
    <Posts />
  </div>
  
</template>

<script setup lang="ts">
import SideBar from '../../components/SideBar/SideBar.vue';
import Posts from './components/Posts/Posts.vue'
</script>

<style lang="scss">
.home {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
