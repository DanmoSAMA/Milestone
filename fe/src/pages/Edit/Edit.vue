<template>
  <div class="app_wrapper-edit">
    <Edit
      :defaultTitle="''"
      :defaultTags="[]"
      :defaultContent="''"
      :id="''"
      :type="0"
    />
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
  background-color: #fff;
}

@media only screen and (max-width: 760px) {
  .app_wrapper-edit {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
