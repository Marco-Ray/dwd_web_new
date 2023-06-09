<template>
  <div class="showcase-carousel-container">
    <div class="info">
      <div class="title">{{ currentProject.title }}</div>
      <div class="members">{{ currentProject.members }}</div>
      <el-scrollbar class="description-box">
        <div class="description">{{ currentProject.description }}</div>
      </el-scrollbar>
    </div>
    <el-carousel :interval="4000" type="card" :autoplay="true" trigger="click" indicator-position="none" @change="setProject">
      <el-carousel-item v-for="(item, index) in trackProjects.projects" :key="index">
        <div class="project-img-box">
          <div class="view-more" @click="viewMore(index)">
            <div>View work</div>
            <img :src="IconVector" alt="view more" class="view-more__icon" />
          </div>
          <img :src="isMobile ? item.imageMobile : item.imageWeb ? item.imageWeb : Placeholder || Placeholder" alt="student project image" class="project-img">
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="mode-icon-box" @click="switchMode">
      <img :src="IconGallery" alt="switch to gallery mode" class="mode-icon">
    </div>
  </div>
</template>

<script>
import IconGallery from '@/assets/img/Showcase/icon-gallery.png';
import IconVector from '@/assets/img/Showcase/icon-vector.svg';
import { mapMutations } from 'vuex';

export default {
  name: 'ShowcaseCarousel',
  props: {
    Placeholder: String,
    trackProjects: Object,
  },
  emits: ['switchMode', 'viewMore'],
  data() {
    return {
      IconGallery: IconGallery,
      IconVector: IconVector,
      currentId: 0,
    };
  },
  computed: {
    currentProject() {
      return this.trackProjects.projects[this.currentId];
    },
    isMobile() {
      return document.documentElement.clientWidth <= 414;
    },
  },
  methods: {
    ...mapMutations([
      'switchViewMode',
    ]),
    switchMode() {
      this.$store.commit('switchViewMode', 'gallery');
      const newPath = `${this.$route.path}?viewMode=gallery`;
      this.$router.replace(newPath);
    },
    viewMore(index) {
      this.$emit('viewMore', index);
    },
    setProject(newId) {
      this.currentId = newId;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.showcase-carousel-container {
  //margin-top: -20px;
  height: calc(100vh - 118px);
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Helvetica Light;
  text-align: center;
  .title {
    font-size: fSizeCalc(36);
    font-weight: normal;
    letter-spacing: 0;
    margin-top: 32px;
    margin-bottom: hCalc(15);
  }
  .members {
    font-size: fSizeCalc(12);
    font-weight: 100;
    line-height: fSizeCalc(24);
    letter-spacing: fSizeCalc(-0.44);
    margin-bottom: hCalc(26);
  }
  .description {
    width: wCalc(781);
    font-size: fSizeCalc(12);
    font-weight: 100;
    line-height: fSizeCalc(23);
    letter-spacing: fSizeCalc(0.15);
    text-align: center;
    margin-bottom: 44px;
  }
}

.el-carousel {
  ::v-deep .el-carousel__container {
    height: hCalc(285);
  }
  .el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    .project-img-box {
      position: relative;
      width: hCalc(506);
      height: hCalc(283);
      .project-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      .view-more {
        display: flex;
        opacity: 0;
        position: absolute;
        bottom: hCalc(30);
        left: 50%;
        transform: translateX(-50%);
        justify-content: center;
        align-items: center;
        width: fSizeCalc(84);
        height: fSizeCalc(25);
        background-color: black;
        font-family: Helvetica Light;
        font-size: fSizeCalc(12);
        font-weight: 400;
        line-height: fSizeCalc(25);
        letter-spacing: fSizeCalc(-0.44);
        transition: all .5s ease-out;
        cursor: pointer;
        .view-more__icon {
          height: fSizeCalc(18);
          width: fSizeCalc(18);
        }
      }
    }
    ::v-deep .el-carousel__mask {
      z-index: 1;
      opacity: 0.8;
      background-color: rgba(0,0,0,0.8);
    }
  }
  ::v-deep .el-carousel__arrow {
    background-color: rgba(64, 67, 69, 0.7);
  }
}

.el-carousel__item.is-active {
  pointer-events: none;
  .project-img-box {
    pointer-events: auto;
    cursor: default;
  }
  &:hover {
    .view-more {
      opacity: 1;
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
  z-index: 99;
  .mode-icon {
    width: 30px;
    height: 30px;
  }
}

@media screen and (max-width: 414px) {
  .info {
    .title {
      //min-height: hCalcM(64);
      margin-top: 0;
      font-size: fSizeCalc(26);
    }
    .members {
      margin-bottom: hCalcM(26);
      font-size: fSizeCalc(14);
    }
    .description-box {
      height: hCalcM(100);
      margin-bottom: hCalcM(20);
      .description {
        font-size: fSizeCalc(12);
        line-height: fSizeCalc(20);
        letter-spacing: fSizeCalc(0.15);
        width: unset;
      }
    }
  }

  .el-carousel {
    ::v-deep .el-carousel__container {
    }
    .el-carousel__item {
      .project-img-box {
        .project-img {
          object-fit: cover;
        }
      }
      &.is-active {
        .view-more {
          opacity: 1;
        }
      }
    }
  }
}
</style>
