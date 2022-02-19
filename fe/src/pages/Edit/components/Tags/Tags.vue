<template>
  <div class="app_wrapper-edit-body-tags">
    <div
      class="app_wrapper-edit-body-tags-item"
      v-for="(tag, index) in chosenTags"
      :key="tag"
      @click="() => {chosenTags.splice(index, 1)}"
    >
      {{ `${tag} ×` }}
    </div>
    <div
      class="app_wrapper-edit-body-tags-add"
      @click="
        (e) => {
          e.stopPropagation();
        }
      "
      v-show="chosenTags.length < 6"
    >
      <span
        class="app_wrapper-edit-body-tags-add-btn"
        @click="setShowDropdown(true)"
      >
        + 添加标签
      </span>
      <Dropdown :showDropdown="showDropdown" :chosenTags="chosenTags" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useShowDropdown } from '../../../../hooks/useShowDropdown';
import Dropdown from './components/Dropdown/Dropdown.vue';

const { showDropdown, setShowDropdown } = useShowDropdown();
// 被选择的标签
const chosenTags = reactive([]);
</script>

<style lang="scss">
.app_wrapper-edit-body-tags-tag {
  height: 25px;
  line-height: 25px;
  border: 1px solid #6c757d;
  padding: 3px 8px;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s all;
  display: inline-block;
  margin-right: 10px;
}

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
      @extend .app_wrapper-edit-body-tags-tag;
    }

    &-btn:hover {
      background-color: #6c757d;
      color: #fff;
    }
  }

  &-item {
    @extend .app_wrapper-edit-body-tags-tag;
  }
}
</style>
