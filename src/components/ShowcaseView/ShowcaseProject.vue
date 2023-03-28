<template>
  <div class="showcase-project-container">
    <div class="icon-close-box" @click="goBack">
      <img :src="IconClose" alt='close' class='icon-close' />
    </div>

    <div class="project-content">
      <div class="project-img-container">
        <img :src="Placeholder" alt="project image" class="project-img"/>
      </div>

      <div class="project-main">
        <div class="title">{{ project.title }}</div>
        <div class="project-description">
          <div class="left">
            In the future, human activity is responsible for rising levels of carbon dioxide in the atmosphere, and High CO2 levels will lead to global warming, which causes the sea level to rise and submerge the ground's surface, which leads to the genetic mutation of the submerged plants. As a result, the plants will grow structures adapted to the underwater environment. The variation direction of future plants will be designed based on the research and features of the current aquatic plants. Finally, the installation will show the future of the urban landscape scenario.
            Our data include cities that would be badly affected by the rising sea level, we picked plant species from those cities, then did research on how the sea environment could affect those plant species both chemically and physically, hence made speculations on how those plants could mutate.
            Our installation has an interaction spot that the audience could breath air into, which represents the emission of carbon dioxide, simulating the mutations of plants as well as rising sea levels on five screens.
          </div>
          <div class="right">
            <div class="subtitle">GroupMember</div>
            <div class="member">Teammate, Teammate, Teammate, Teammate</div>
          </div>
        </div>
      </div>

      <div class="controller-container">
        <div class="controller previous" @click="getPrevious" v-show="project.index>0">
          <img :src="VectorLeft" alt="previous project" class="vector" />
          <div>PREVIOUS PROJECT</div>
        </div>
<!--          todo 列表长度-->
        <div class="controller next" @click="getNext" v-show="project.index<(project.track==='fashion'?2:3)">
          <div>NEXT PROJECT</div>
          <img :src="VectorRight" alt="previous project" class="vector" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import IconClose from '@/assets/img/Showcase/icon-close.png';
import VectorLeft from '@/assets/img/Showcase/Vector-Left.svg';
import VectorRight from '@/assets/img/Showcase/Vector-Right.svg';
import Placeholder from '@/assets/img/Showcase/placeholder.png';
import { mapMutations } from 'vuex';

export default {
  name: 'ShowcaseProject',
  computed: {
    project() {
      return this.$store.state.project;
    },
  },
  data() {
    return {
      IconClose: IconClose,
      VectorLeft: VectorLeft,
      VectorRight: VectorRight,
      Placeholder: Placeholder,
    };
  },
  methods: {
    ...mapMutations([
      'setProject',
    ]),
    goBack() {
      this.$router.go(-1);
    },
    getPrevious() {
      this.$store.commit('setProject', { track: this.$route.params.track, id: this.project.index - 1 });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    getNext() {
      this.$store.commit('setProject', { track: this.$route.params.track, id: this.project.index + 1 });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.showcase-project-container {
  position: relative;
  transition: all .3s ease-out;
  color: white;
  background-color: black;
}

.icon-close-box {
  position: absolute;
  top: 0;
  right: 0;
  width: hCalc(20);
  height: hCalc(20);
  cursor: pointer;
  pointer-events: auto;
  z-index: 10;
  .icon-close {
    width: 100%;
    height: 100%;
  }
}

.project-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: hCalc(100);
  color: white;
  .project-img-container {
    width: wCalc(1136);
    height: wCalc(635);
    .project-img {
      width: 100%;
      height: 100%;
    }
  }
  .project-main {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: hCalc(40);
    .title {
      font-family: Helvetica;
      font-size: fSizeCalc(24);
      font-weight: 400;
      line-height: fSizeCalc(44);
      text-align: left;
    }
    .project-description {
      display: flex;
      flex-direction: row;
      column-gap: wCalc(32);
      .left {
        width: wCalc(745);
        font-family: Helvetica Light;
        font-size: fSizeCalc(14);
        font-weight: 400;
        line-height: fSizeCalc(28);
        letter-spacing: fSizeCalc(0.15);
        opacity: 0.8;
      }
      .right {
        width: wCalc(357);
        .subtitle {
          font-family: Helvetica;
          font-size: fSizeCalc(14);
          font-weight: 700;
          line-height: fSizeCalc(24);
        }
        .member {
          font-family: Helvetica Light;
          font-size: fSizeCalc(14);
          font-weight: 400;
          line-height: fSizeCalc(28);
          opacity: 0.8;
        }
      }
    }
  }

  .controller-container {
    margin-top: hCalc(100);
    //display: flex;
    //flex-direction: row;
    //justify-content: space-between;
    position: relative;
    width: 100%;
    font-family: Helvetica Light;
    font-size: fSizeCalc(16);
    font-weight: 400;
    line-height: fSizeCalc(16);
    letter-spacing: fSizeCalc(0.15);
    .controller {
      display: flex;
      flex-direction: row;
      column-gap: wCalc(3);
      white-space: nowrap;
      cursor: pointer;
      &.previous {
        position: absolute;
        left: 0;
      }
      &.next {
        position: absolute;
        right: 0;
      }
      .vector {
        width: fSizeCalc(14);
        height: fSizeCalc(14);
      }
    }
  }
}

::v-deep .el-scrollbar__wrap {
  margin-top: hCalc(30);
}
</style>
