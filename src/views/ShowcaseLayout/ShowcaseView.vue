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

<!--    <showcase-project-->
<!--      class="showcase-project"-->
<!--      :class="[isShowProject ? 'isShow' : 'isHidden']"-->
<!--      :Placeholder="Placeholder"-->
<!--      @closeProjectPage="closeProjectPage"-->
<!--      @getPreviousProject="getPreviousProject"-->
<!--      @getNextProject="getNextProject"-->
<!--    >-->
<!--    </showcase-project>-->
  </div>
</template>

<script>
import ShowcaseCarousel from '@/components/ShowcaseView/ShowcaseCarousel.vue';
import ShowcaseGallery from '@/components/ShowcaseView/ShowcaseGallery.vue';
import { mapMutations } from 'vuex';
import Placeholder from '@/assets/img/Showcase/placeholder.png';

export default {
  name: 'ShowcaseView',
  components: {
    ShowcaseGallery,
    ShowcaseCarousel,
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
    closeProjectPage() {
      this.isShowProject = false;
    },
    getPreviousProject(index) {
      this.$store.commit('setProject', this.track === 'fashion' ? this.fashion.projects[index] : this.ecology.projects[index]);
    },
    getNextProject(index) {
      this.$store.commit('setProject', this.track === 'fashion' ? this.fashion.projects[index] : this.ecology.projects[index]);
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

.showcase-project {
  position: absolute;
  bottom: 0;
  width: 100%;
  //margin-top: 118px;
  z-index: 100;
}

.isShow {
  height: calc(100vh - 118px);
}

.isHidden {
  height: 0;
}
</style>
