<template>
  <div class="app_wrapper-edit-body-tags">
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
    <div
      class="app_wrapper-edit-body-tags-item"
      v-for="(tag, index) in chosenTags"
      :key="tag"
      @click="
        () => {
          chosenTags.splice(index, 1);
        }
      "
    >
      {{ `${tag} ×` }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShowDropdown } from '../../../../hooks/useShowDropdown';
import Dropdown from './components/Dropdown/Dropdown.vue';

const props = defineProps({
  chosenTags: Array,
});

const { chosenTags } = props;

const { showDropdown, setShowDropdown } = useShowDropdown();
</script>

<style lang="scss">
@import '../../../../styles/color-var.scss';

.app_wrapper-edit-body-tags-tag {
  height: 25px;
  line-height: 25px;
  border: 1px solid $tag-bg-on;
  padding: 3px 8px;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s all;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  white-space: nowrap;
}

.app_wrapper-edit-body-tags {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: $tag-bg-on;
  flex-wrap: wrap;
  padding: 10px;
  padding-bottom: 0;

  &-add {
    position: relative;

    &-btn {
      @extend .app_wrapper-edit-body-tags-tag;
    }

    &-btn:hover {
      background-color: $tag-bg-on;
      color: #fff;
    }
  }

  &-item {
    @extend .app_wrapper-edit-body-tags-tag;
  }
}

@media only screen and (max-width: 460px) {
  .app_wrapper-edit-body-tags-tag {
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    border-radius: 2px;
  }
}
</style>
