<template>
  <div
    :class="
      props.showDropdown
        ? 'app_wrapper-edit-body-tags-add-dropdown visible'
        : 'app_wrapper-edit-body-tags-add-dropdown'
    "
  >
    <div
      class="app_wrapper-edit-body-tags-add-dropdown-item"
      v-for="tag in tags"
      :key="tag"
      @click="
        () => {
          if (props.chosenTags.find(item => item === tag)) return;
          props.chosenTags.push(tag);
        }
      "
    >
      {{ tag }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  showDropdown: Boolean,
  chosenTags: Array,
});

const tags = [
  'html',
  'css',
  'js',
  'ts',
  'vue',
  'react',
  'node',
  'koa',
  'os',
  '算法',
  'webpack',
  '脚手架',
  '浏览器',
  '其他',
];
</script>

<style lang="scss">
.app_wrapper-edit-body-tags-add-dropdown {
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

.app_wrapper-edit-body-tags-add-dropdown.visible {
  display: flex;
}
</style>
