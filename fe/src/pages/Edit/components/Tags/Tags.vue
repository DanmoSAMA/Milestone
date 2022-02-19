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
      <div
        :class="
          showDropdown
            ? 'app_wrapper-edit-body-tags-add-dropdown visible'
            : 'app_wrapper-edit-body-tags-add-dropdown'
        "
      >
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">html</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">css</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">js</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">ts</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">vue</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">react</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">node</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">koa</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">os</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">算法</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">webpack</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">脚手架</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">浏览器</div>
        <div class="app_wrapper-edit-body-tags-add-dropdown-item">其他</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShowDropdown } from '../../../../hooks/useShowDropdown';
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

    &-dropdown {
      width: 430px;
      padding: 15px;
      box-sizing: border-box;
      background-color: #fff;
      position: absolute;
      top: 40px;
      left: 0;
      border: 1px solid #bbb;
      flex-wrap: wrap;
      align-items: flex-start;
      display: none;
      overflow: hidden;

      &-item {
        font-size: 14px;
        height: 20px;
        line-height: 20px;
        padding: 4px 10px;
        margin: 4px;
        background-color: #e9f2ff;
        border-radius: 3px;
        color: #1f80ff;
        transition: all 0.3s;
        cursor: pointer;
      }

      &-item:hover {
        background-color: #dee9ff;
      }
    }

    &-dropdown.visible {
      display: flex;
    }
  }
}
</style>
