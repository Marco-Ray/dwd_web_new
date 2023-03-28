<template>
  <div class="home">
    <particle-p5 id="animation-canvas" @scrollDown="scrollDown"/>
    <div id="main">
      <nav-bar id="nav-bar"></nav-bar>
      <about-component id="about" />
      <footer-component id="footer"></footer-component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import AboutComponent from '@/components/HomeView/AboutComponent.vue';
import ParticleP5 from '@/components/HomeView/ParticleP5.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'HomeView',
  components: {
    ParticleP5,
    AboutComponent,
    FooterComponent,
    NavBar,
  },
  methods: {
    scrollDown() {
      document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
    },
  },
  mounted() {
    AOS.init({
      offset: 10,
    });
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

#animation-canvas {
  height: 100vh;
}

#nav-bar, #about {
  margin: 0 32px;
}

#footer {
  padding: 34px 32px 0 32px;
}

@media screen and (max-width: 414px) {
  .home {
    -webkit-overflow-scrolling: touch;
  }
  #nav-bar, #about {
    margin: 0 16px;
  }
  #footer {
    padding: 34px 16px 0 16px;
  }
}
</style>
