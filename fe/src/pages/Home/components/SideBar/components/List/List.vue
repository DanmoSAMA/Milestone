<template>
  <div class="home-sidebar-list">
    <div class="home-sidebar-list-header">
      <h1 class="home-sidebar-list-header-title">Milestone</h1>
      <h2 class="home-sidebar-list-header-subtitle">test</h2>
    </div>
    <div class="home-sidebar-list-body">
      <div class="home-sidebar-list-body-item selected">
        <svg-icon name="shouye" color="#333" />
        首页
      </div>
      <div class="home-sidebar-list-body-item">
        <svg-icon name="gf-tags" color="#333" />
        标签
      </div>
      <div class="home-sidebar-list-body-item">
        <svg-icon name="sousuo" color="#333" />
        搜索
      </div>
      <div class="home-sidebar-list-body-item">
        <svg-icon name="jianli" color="#333" />
        简历
      </div>
      <div class="home-sidebar-list-body-item">
        <svg-icon name="tupian" color="#333" />
        相册
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'List',
  components: {},
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.home-sidebar-list {
  border: 1px solid #eee;
  margin-bottom: 12px;

  &-header {
    color: #fff;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;

    &-title {
      font-size: 24px;
      margin-bottom: 10px;
    }

    &-subtitle {
      font-size: 15px;
    }
  }

  &-body {
    padding: 12px 0;

    &-item {
      padding: 0 20px;
      font-size: 14px;
      color: #333;
      height: 33px;
      line-height: 33px;
      cursor: pointer;
      transition: 0.3s background-color;
    }

    &-item:hover {
      background-color: #eee;
    }

    &-item.selected {
      background-color: #eee;
    }
  }
}
</style>
