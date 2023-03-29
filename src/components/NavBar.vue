<template>
  <div id="nav-bar">
    <div class="logo-container" @click="goHome">
      <img :src="LOGO" alt="logo" class="logo" />
    </div>
    <el-menu class="el-menu-demo" mode="horizontal" router
             background-color="black"
             text-color="white"
             active-text-color="white"
    >
      <el-menu-item index="1" :route="{ path: '/', hash: '#main' }">About</el-menu-item>
      <el-sub-menu index="2" popper-class="submenu"
                   :teleported="false"
      >
        <template #title>Showcase</template>
        <el-menu-item index="2-1" :route="{ path: '/showcase/fashion', query: { viewMode: viewMode }}">
          Fashion Informatics
        </el-menu-item>
        <el-menu-item index="2-2" :route="{ path: '/showcase/ecology', query: { viewMode: viewMode }}">
          Designing Ecologies
        </el-menu-item>
      </el-sub-menu>
    </el-menu>

    <div class="mobile-menu">
      <div class="icon-menu-box" @click="triggerMobileMenu">
        <img :src="IconMenu" alt="menu" class="icon-menu"/>
      </div>

      <div class="mobile-menu__menu" v-show="isShowMobileMenu">
        <div style="margin: 0 16px">
          <div class="router-box">
            <router-link :to="{ path: '/', hash: '#main' }" class="router-title">About</router-link>
          </div>

          <div class="router-box">
            <div class="router-box">
              <div class="router-title">Showcase</div>
            </div>
            <div class="subtitle-box">
              <div class="router-box">
                <router-link :to="{ path: '/showcase/fashion', query: { viewMode: viewMode }}" class="router-subtitle">Fashion Informatics</router-link>
              </div>
              <div class="router-box">
                <router-link :to="{ path: '/showcase/ecology', query: { viewMode: viewMode }}" class="router-subtitle">Designing Ecologies</router-link>
              </div>
            </div>
          </div>

          <div class="social-media-box">
            <div class="social-media-link">Social Media</div>
            <div class="link">
              <a href="https://www.instagram.com/designwithdata/" target="_blank">@Designwithdata</a>
            </div>
            <div class="link">
              <a href="https://www.instagram.com/inspacegallery/" target="_blank">@inspacegallery</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LOGO from '@/assets/img/dwd_logo.png';
import IconMenu from '@/assets/img/HomeView/icon-menu.svg';

const preD = function (e) {
  e.preventDefault();
};

export default {
  name: 'NavBar',
  data() {
    return {
      LOGO: LOGO,
      IconMenu: IconMenu,
      isShowMobileMenu: false,
    };
  },
  computed: {
    viewMode() {
      return this.$store.state.viewMode;
    },
  },
  methods: {
    goHome() {
      this.$router.push('/');
      this.$nextTick(()=>{
        if (document.getElementById('animation-canvas')) {
          document.getElementById('animation-canvas').scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
    triggerMobileMenu() {
      this.isShowMobileMenu = !this.isShowMobileMenu;
    },
  },
  watch: {
    // 监听弹出框状态，控制是否禁止页面滑动
    isShowMobileMenu(flag) {
      if (flag) {
        if (document.getElementById('main')) {
          document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
        }
        document.body.style.overflow = 'hidden';
        document.addEventListener('touchmove', preD, { passive: false }); // 禁止页面滑动
      } else {
        document.body.style.overflow = ''; // 出现滚动条
        document.removeEventListener('touchmove', preD, { passive: false });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

#nav-bar {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 118px;
  z-index: 999;
  background: black;
}

.el-menu-demo {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: wCalc(300);
  border-bottom: unset;
  font-family: Helvetica Light;
  --el-menu-item-font-size: fSizeCalc(16);
  font-weight: normal;
  line-height: fSizeCalc(28);
}
.el-menu--popup {
  .el-menu-item {
    font-family: Helvetica Light;
    font-size: fSizeCalc(12);
    border-bottom: 1px solid white;
  }
}

.el-menu-item:hover {
  font-weight: 800;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: unset;
}

.logo-container {
  width: 160px*1.1;
  height: 54px*1.1;
  cursor: pointer;
  .logo {
    width: 100%;
  }
}

.mobile-menu {
  display: none;
  .mobile-menu__menu {
    position: absolute;
    left: 0;
    top: 118px;
    width: 100vw;
    margin: 0 -16px;
    height: calc(100vh - 118px);
    background: black;
    .router-box {
      margin-bottom: hCalcM(16);
    }
    .router-title {
      font-family: Helvetica;
      font-size: fSizeCalc(28);
      font-weight: 400;
      line-height: fSizeCalc(28);
      color: white;
      text-decoration: none;
    }
    .subtitle-box {
      display: flex;
      flex-direction: column;
    }
    .router-subtitle {
      font-family: Helvetica Light;
      font-size: fSizeCalc(18);
      font-weight: 400;
      line-height: fSizeCalc(28);
      color: white;
      text-decoration: none;
    }
    .social-media-box {
      position: absolute;
      bottom: hCalcM(62);
      .link {
        margin-bottom: hCalcM(7);
      }

    }
    .social-media-link {
      font-family: Helvetica;
      font-size: fSizeCalc(21);
      line-height: fSizeCalc(28);
      margin-bottom: hCalcM(20);
    }
    a {
      font-family: Helvetica Light;
      font-size: fSizeCalc(16);
      font-weight: 400;
      line-height: fSizeCalc(20);
      letter-spacing: fSizeCalc(-0.44);
      color: white;
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 414px) {
  .logo-container {
    width: 120px;
    height: 41px;
  }

  .el-menu-demo {
    display: none;
  }

  .mobile-menu {
    display: block;
  }
}
</style>

<style lang="scss">
.el-popper.is-light {
  border: unset !important;
}
.el-menu--popup {
  min-width: unset;
}
.el-menu--horizontal {
  border-bottom: unset !important;
}
</style>
