<template>
  <div class="app_wrapper-edit-body-tags">
    <div
      class="app_wrapper-edit-body-tags-add"
      @click="
        (e) => {
          e.stopPropagation();
        }
      "
    >
      <span
        class="app_wrapper-edit-body-tags-add-btn"
        @click="setShowDropdown(true)"
        >+ 添加标签</span
      >
      <Dropdown :showDropdown="showDropdown" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShowDropdown } from '../../../../hooks/useShowDropdown';
import Dropdown from './components/Dropdown/Dropdown.vue'

const { showDropdown, setShowDropdown } = useShowDropdown();

</script>

<style lang="scss">
.app_wrapper-edit-body-tags {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #6c757d;

  &-add {
    position: relative;

    &-btn {
      height: 30px;
      line-height: 30px;
      border: 1px solid #6c757d;
      padding: 3px;
      font-size: 14px;
      border-radius: 3px;
      cursor: pointer;
      transition: 0.3s all;
      display: inline-block;
      height: 30px;
      line-height: 30px;
    }

    &-btn:hover {
      background-color: #6c757d;
      color: #fff;
    }
  }
}
</style>
