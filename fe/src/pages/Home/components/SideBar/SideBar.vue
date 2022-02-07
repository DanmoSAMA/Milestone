<template>
  <div class="home-sidebar">
    <List />
    <UserInfo />
  </div>
</template>

<script lang="ts">
import List from './components/List/List.vue'
import UserInfo from './components/UserInfo/UserInfo.vue'

export default {
  name: 'SideBar',
  components: { List, UserInfo },
  setup() {
    return {

    }
  }
}
</script>
<style lang="scss">
.home-sidebar {
  width: 300px;
  // background-color: #bfa;
  margin-right: 12px;
  flex-shrink: 0;
  background-color: #fff;
}
</style>