<template>
  <div class="Showcase">
    <transition :name="'fade'" mode="out-in">
      <component :is="viewMode==='carousel' ? 'ShowcaseCarousel' : 'ShowcaseGallery'"
                 :Placeholder="Placeholder"
                 :trackProjects="trackProjects"
                 @viewMore="viewMore"
      >
      </component>
    </transition>

    <fast-entry class="footer" />
  </div>
</template>

<script>
import ShowcaseCarousel from '@/components/ShowcaseView/ShowcaseCarousel.vue';
import ShowcaseGallery from '@/components/ShowcaseView/ShowcaseGallery.vue';
import { mapMutations } from 'vuex';
import Placeholder from '@/assets/img/Showcase/placeholder.png';
import FastEntry from '@/components/HomeView/FastEntry.vue';

export default {
  name: 'ShowcaseView',
  components: {
    ShowcaseGallery,
    ShowcaseCarousel,
    FastEntry,
  },
  computed: {
    viewMode() {
      return this.$store.state.viewMode;
    },
    path() {
      return this.$route.params.track;
    },
    trackProjects() {
      return this.track === 'fashion' ? this.$store.state.fashion : this.$store.state.ecology;
    },
  },
  data() {
    return {
      track: this.$route.params.track,
      isShowProject: false,
      Placeholder: Placeholder,
    };
  },
  methods: {
    ...mapMutations([
      'setProject',
    ]),
    viewMore(index) {
      this.$store.commit('setProject', { track: this.track, id: index });
      this.$router.push({ name: 'project', query: { id: index } });
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.Showcase {
  position: relative;
  //margin-top: hCalc(140);
  background-color: black;
  height: calc(100vh - 118px);
  color: white;
}

.footer {
  display: none;
}

@media screen and (max-width: 414px) {
  .footer {
    display: flex;
  }
}
</style>
