<template>
  <div class="app_wrapper">
    <div class="app_wrapper-body">
      <router-view></router-view>
      <router-view name="main"></router-view>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import './styles/index.scss'

const route = useRoute()
</script>

<style lang="scss">
* {
  letter-spacing: 2px;
}

.app_wrapper {
  &-body {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    min-height: 630px;
  }
}

@media only screen and (max-width: 760px) {
  .app_wrapper {
    &-body {
      flex-direction: column;
    }
  }
}
</style>
