<template>
  <div class="showcase-layout">
    <nav-bar class="nav-bar"></nav-bar>
    <router-view class="showcase-viewer"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'ShowcaseLayout',
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="scss">
.showcase-layout {
  width: 100%;
  //height: 100vh;
}
.nav-bar, .showcase-viewer {
  margin: 0 32px;
}

@media screen and (max-width: 414px) {
  .nav-bar, .showcase-viewer {
    margin: 0 16px;
  }
}
</style>
