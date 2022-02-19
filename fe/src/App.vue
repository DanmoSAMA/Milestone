<template>
  <div class="app_wrapper">
    <SideBar v-show="showSideBar"/>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import SideBar from './components/SideBar/SideBar.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import './styles/index.css'

const route = useRoute()

const showSideBar = computed(() => {
  // 加入undefined是防止刷新时页面闪动
  // 因为刚刷新的时候route.name === undefined，迅速改变为404，页面会闪一下
  return !(route.name === '404' || route.name === undefined)
})

</script>

<style lang="scss">
* {
  // margin: 0;
  // padding: 0;
  // font-size: 16px;
  // font-weight: normal;
  letter-spacing: 2px;
}

// a {
//   color: #333;
//   text-decoration: none;
//   cursor: default;
// }

.app_wrapper {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
</style>