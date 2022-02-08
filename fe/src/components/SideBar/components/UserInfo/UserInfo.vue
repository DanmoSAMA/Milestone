<template>
  <div class="c-sidebar-userinfo">
    <div class="c-sidebar-userinfo-avatar">
      <img
        class="c-sidebar-userinfo-avatar-img"
        src="../../../../assets/images/avatar.jpg"
      />
    </div>
    <div class="c-sidebar-userinfo-count">
      <div class="c-sidebar-userinfo-count-posts">日志</div>
      <div class="c-sidebar-userinfo-count-tags">标签</div>
    </div>
    <div class="c-sidebar-userinfo-contact"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.c-sidebar-userinfo {
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  &-avatar {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #ddd;
    overflow: hidden;
    position: relative;

    &-img {
      position: absolute;
      width: 160px;
      left: -10px;
      top: 0;
    }
  }

  &-count {
    display: flex;
    margin: 5px 0;
  }
}
</style>
