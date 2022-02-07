<template>
  <div class="home">
    <SideBar />
    <Posts />
  </div>
  
</template>

<script lang="ts">
import SideBar from './components/SideBar/SideBar.vue';
import Posts from './components/Posts/Posts.vue'

export default {
  name: 'Home',
  components: { SideBar, Posts },
  setup() {
    return {

    };
  },
};
</script>
<style lang="scss">
.home {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
