<template>
  <!--        footer-->
  <div class="footer">
    <div class="logo-container">
      <img :src="LogoBlack" alt="logo of design with data" class="logo" />
      <img :src="LogoUniversity" alt="logo of unversity of Edinburgh" class="logo" />
    </div>

    <div class="info-container">
      <div>
        <router-link to="/#main" class="title">About</router-link>
      </div>
      <div>
        <div class="title">Showcase</div>
        <router-link :to="{ path: '/showcase/fashion', query: { viewMode: viewMode } }"
                     class="text">
          Fashion Informatics
        </router-link>
        <router-link :to="{ path: '/showcase/fashion', query: { viewMode: viewMode } }"
                     class="text">
          Designing Ecologies
        </router-link>
      </div>
      <div>
        <!--    todo link-->
        <div class="title">Social Media</div>
        <div><a href="https://www.instagram.com/designwithdata/" target="_blank" alt="Design with Data" class="text social-media-link">@Designwithdata</a></div>
        <div><a href="https://www.instagram.com/inspacegallery/" target="_blank" alt="Inspace Gallery" class="text social-media-link">@inspacegallery</a></div>
      </div>
    </div>

    <div class="copyright">
      Copyright 2023 © University of Edinburgh, Design informatics All Rights Reserved
    </div>
  </div>
</template>

<script>
import LogoBlack from '@/assets/img/HomeView/logo-black.png';
import LogoUniversity from '@/assets/img/HomeView/logo-university.png';

export default {
  name: 'FooterComponent',
  data() {
    return {
      LogoBlack: LogoBlack,
      LogoUniversity: LogoUniversity,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.footer {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: hCalc(77);
  background: white;
  height: 213px;
  color: black;
  .logo-container {
    .logo {
      height: hCalc(54);
      &:nth-child(1) {
        margin-right: wCalc(18);
      }
    }
  }

  .info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: wCalc(369);
    .title {
      color: black;
      text-decoration: unset;
      font-family: Helvetica;
      font-size: fSizeCalc(16);
      font-weight: 700;
      line-height: fSizeCalc(28);
      text-align: left;
      white-space: nowrap;
    }
    .text {
      display: block;
      color: black;
      text-decoration: unset;
      font-family: Helvetica Light;
      font-size: fSizeCalc(12);
      font-weight: 400;
      line-height: fSizeCalc(16);
      letter-spacing: fSizeCalc(0.15);
      text-align: left;
      &.social-media-link {
        text-decoration: underline;
      }
    }
  }

  .copyright {
    position: absolute;
    left: 32px;
    bottom: 32px;
    font-family: Helvetica Light;
    font-size: fSizeCalc(14);
    font-weight: 400;
    line-height: fSizeCalc(28);
    text-align: left;
  }
}

@media screen and (max-width: 414px) {
  .footer {
    margin-top: hCalcM(26);
    padding: 26px 16px 43px 16px;
    width: calc(100% - 32px);
    height: 166px;
    .logo-container {
      column-gap: wCalcM(15);
      .logo {
        //width: wCalcM(120);
        height: wCalcM(41);
      }
    }
    .info-container {
      display: none;
    }
    .copyright {
      left: 16px;
    }
  }
}
</style>
