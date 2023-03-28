<template>
  <div class="showcase-gallery-container">
    <div class="title">{{ track === 'fashion' ? 'Fashion Informatics': 'Designing Ecologies'}} Student Showcase</div>
<!--    <div class="project__view">-->
      <el-scrollbar class="project__view">
        <div class="description" v-if="trackProjects.description">
          {{ trackProjects.description }}
        </div>

        <div class="project__grid">
          <div v-for="(item, index) in trackProjects.projects" :key="index" class="project" @click="viewMore(index)">
            <img :src="Placeholder" alt="student project image" class="project-img">
            <div class="project__mask">
              <div class="project-name">Dynamic Moth</div>
              <div class="project-member">Teammate, Teammate, Teammate</div>
            </div>
          </div>
          <div v-for="(item, index) in trackProjects.projects" :key="index" class="project" @click="viewMore(index)">
            <img :src="Placeholder" alt="student project image" class="project-img">
            <div class="project__mask">
              <div class="project-name">Dynamic Moth</div>
              <div class="project-member">Teammate, Teammate, Teammate</div>
            </div>
          </div>
          <div v-for="(item, index) in trackProjects.projects" :key="index" class="project" @click="viewMore(index)">
            <img :src="Placeholder" alt="student project image" class="project-img">
            <div class="project__mask">
              <div class="project-name">Dynamic Moth</div>
              <div class="project-member">Teammate, Teammate, Teammate</div>
            </div>
          </div>
          <div v-for="(item, index) in trackProjects.projects" :key="index" class="project" @click="viewMore(index)">
            <img :src="Placeholder" alt="student project image" class="project-img">
            <div class="project__mask">
              <div class="project-name">Dynamic Moth</div>
              <div class="project-member">Teammate, Teammate, Teammate</div>
            </div>
          </div>
          <div v-for="(item, index) in trackProjects.projects" :key="index" class="project" @click="viewMore(index)">
            <img :src="Placeholder" alt="student project image" class="project-img">
            <div class="project__mask">
              <div class="project-name">Dynamic Moth</div>
              <div class="project-member">Teammate, Teammate, Teammate</div>
            </div>
          </div>
        </div>

      </el-scrollbar>
<!--    </div>-->

    <div class="mode-icon-box" @click="switchMode">
      <img :src="IconCarousel" alt="switch to gallery mode" class="mode-icon">
    </div>
  </div>
</template>

<script>
import IconCarousel from '@/assets/img/Showcase/icon-carousel.png';
import { mapMutations } from 'vuex';

export default {
  name: 'ShowcaseGallery',
  props: {
    Placeholder: String,
    trackProjects: Object,
  },
  emits: ['switchMode', 'viewMore'],
  data() {
    return {
      track: this.$route.params.track,
      IconCarousel: IconCarousel,
    };
  },
  methods: {
    ...mapMutations([
      'switchViewMode',
    ]),
    switchMode() {
      this.$store.commit('switchViewMode', 'carousel');
      const newPath = `${this.$route.path}?viewMode=carousel`;
      this.$router.replace(newPath);
    },
    viewMore(index) {
      this.$emit('viewMore', index);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.showcase-gallery-container {
  height: calc(100vh - 118px);
  margin-right: -32px;
}

.title {
  padding-top: 32px;
  margin-bottom: 24px;
  font-family: Helvetica Light;
  font-size: fSizeCalc(24);
  font-weight: normal;
  letter-spacing: fSizeCalc(-0.44);
  text-align: left;
}

.description {
  position: fixed;
  right: 32px;
  width: wCalc(357);
  font-family: Helvetica Light;
  font-weight: 100;
  font-size: fSizeCalc(14);
  line-height: fSizeCalc(23);
  pointer-events: none;
}

.project__view {
  //width: ;
  height: calc(100vh - 224px - fSizeCalc(24));
}

::v-deep .el-scrollbar__wrap {
  height: calc(100vh - 224px - fSizeCalc(24) - hCalcM(55));
}

::v-deep .el-scrollbar__view {
  position: relative;
  display: flex;
  flex-direction: row;
  grid-template-columns: 1fr wCalc(357);
  gap: wCalc(32);
}

.project__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: wCalc(24);
  justify-content: center;
  align-items: center;
  .project {
    position: relative;
    width: wCalc(169);
    height: wCalc(169);
    // todo click event
    cursor: pointer;
    &:hover {
      .project__mask {
        display: flex;
      }
    }
    .project__mask {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);

      font-family: Helvetica Light;
      font-weight: normal;
      line-height: fSizeCalc(23);
      letter-spacing: fSizeCalc(0.15);
      text-align: center;
      .project-name {
        font-size: fSizeCalc(16);
      }
      .project-member {
        font-size: fSizeCalc(12);
      }
    }
    .project-img {
      width: 100%;
      height: 100%;
    }
  }
}

.mode-icon-box {
  position: absolute;
  bottom: 17px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 68px;
  cursor: pointer;
  .mode-icon {
    width: 30px;
    height: 28px;
  }
}

@media screen and (max-width: 414px) {
  .showcase-gallery-container {
    margin-right: 0;
  }

  .title {
    padding-top: 0;
    font-family: Helvetica;
    font-size: fSizeCalc(32);
    line-height: fSizeCalc(40);
    letter-spacing: fSizeCalc(-0.44);
  }

  .project__view {
    height: calc(100vh - 279px - fSizeCalc(24));
  }

  ::v-deep .el-scrollbar__view {
    flex-direction: column;
  }
  .description {
    position: unset;
    width: auto;
  }
  .project__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: wCalcM(15);
    .project {
      display: flex;
      flex-direction: column;
      height: unset;
      width: wCalcM(163);
      .project__mask {
        margin-top: hCalcM(6);
        position: unset;
        display: block;
        width: 100%;
        height: unset;
        text-align: left;
        line-height: unset;

        .project-name {
          font-family: Helvetica;
          font-size: fSizeCalc(16);
        }

        &:hover {
          display: block;
          justify-content: start;
          align-items: start;
        }
      }
      .project-img {
        width: wCalcM(163);
        height: wCalcM(163);
      }
    }
  }
}
</style>
