<template>
  <div class="app_wrapper-edit">
    <Edit :defaultTitle="''" :defaultTags="[]" :defaultContent="''" :type="0" />
  </div>
</template>

<script setup lang="ts">
import Edit from '../../components/Edit/Edit.vue';
</script>

<style lang="scss" scope>
.app_wrapper-edit {
  width: 850px;
  padding: 30px;
  box-sizing: border-box;
}
</style>
