<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="'fade'" mode="out-in">
      <component :is="Component" :key="route.path"/>
    </transition>
  </router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
};
</script>

<style lang="scss">
@import '@/styles/mixin.scss';

html, body {
  margin: 0;
  padding: 0;
  font-size: wCalc(16);
  overflow-x: hidden;
}

@media screen and (max-width: 414px) {
  html, body {
    font-size: 16px;
  }
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: black;
  color: white;
}

// fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
