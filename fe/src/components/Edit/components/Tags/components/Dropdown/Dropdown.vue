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
          if (props.chosenTags.find((item) => item === tag)) return
          props.chosenTags.push(tag)
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
  chosenTags: Array
})

const tags = [
  'html',
  'css',
  'js',
  'ts',
  'vue',
  'react',
  'node',
  'os',
  'webpack/vite',
  'git',
  'nginx',
  'markdown',
  'linux',
  '前端',
  '后端',
  '运维/部署',
  '数据结构/算法',
  '计网',
  '组原',
  '浏览器',
  '小程序',
  '面经',
  '其他'
]
</script>

<style lang="scss">
.app_wrapper-edit-body-tags-add-dropdown {
  width: 390px;
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

@media only screen and (max-width: 460px) {
  .app_wrapper-edit-body-tags-add-dropdown {
    width: 270px;
    top: 38px;

    &-item {
      font-size: 12px;
      height: 18px;
      line-height: 18px;
      margin: 4px;
    }
  }
}
</style>
