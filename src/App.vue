<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName" mode="out-in">
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
  //overflow-x: hidden;
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

// slide-up transition
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.75s ease-out;
}

.slide-up-enter-to {
  position: absolute;
  bottom: 0;
}

.slide-up-enter-from {
  position: absolute;
  bottom: -100%;
}

.slide-up-leave-to {
  position: absolute;
  top: -100%;
}

.slide-up-leave-from {
  position: absolute;
  top: 0;
}
</style>
