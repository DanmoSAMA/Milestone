<template>
  <div class="app_wrapper">
    <router-view></router-view>
    <router-view name="main"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import './styles/index.css';

const route = useRoute();
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
