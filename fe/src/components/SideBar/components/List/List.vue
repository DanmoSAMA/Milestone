<template>
  <div class="c-sidebar-list">
    <div class="c-sidebar-list-header">
      <div class="c-sidebar-list-header-title">Milestone</div>
      <div class="c-sidebar-list-header-subtitle">{{ motto }}</div>
      <svg-icon
        :name="!isDropdownShown ? 'down' : 'up'"
        @click="toggleShowDropdown()"
      />
    </div>
    <ListBody
      :style="
        screenWidth >= 760 || isDropdownShown
          ? { height: '165px' }
          : { height: '0', padding: '0' }
      "
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ListBody from './components/ListBody/ListBody.vue'

const motto = '用进废退 | 艺不压身'
const screenWidth = ref(document.body.offsetWidth)
const isDropdownShown = ref(false)

function toggleShowDropdown() {
  isDropdownShown.value = !isDropdownShown.value
}

// resize节流
;(function () {
  window.addEventListener('resize', resizeThrottler, false)
  var resizeTimeout
  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null
        actualResizeHandler()
      }, 66)
    }
  }
  function actualResizeHandler() {
    if (document.body.offsetWidth > 760) {
      isDropdownShown.value = true
    }
  }
})()
</script>

<style lang="scss">
.icon-up,
.icon-down {
  color: #fff;
  position: absolute;
  left: 20px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: none;
  top: 50%;
  transform: translateY(-50%);
}

.c-sidebar-list {
  margin-bottom: 12px;
  background-color: #fff;

  &-header {
    color: #fff;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 22px 0;
    position: relative;

    &-title {
      font-size: 26px;
      margin-bottom: 10px;
    }

    &-subtitle {
      font-size: 13px;
    }
  }
}

@media only screen and (max-width: 760px) {
  .c-sidebar-list {
    margin-bottom: 0;

    &-header {
      padding: 25px 0;
    }
  }

  .icon-up,
  .icon-down {
    display: block;
  }
}
</style>
