<template>
  <!--    Content-->
  <div class="content">
    <!--      left-->
    <div class="left">
      <div data-aos="fade-up">
        <div class="title">Design with Data 2023 Student Showcase</div>
        <div class="text description">
          Design with Data is a course taught as part of the Design Informatics Postgraduate programme at the University of Edinburgh.
          This year, the course is structured into two cohorts: Fashion Informatics, lead by Lynne Craig with course tutors Alexandre Colle and Patrick White; and Designing Ecologies, lead by Dr Larissa Pschetz, with course tutors Dr Asad Khan and Brian Proudfoot.
          Under the curatorial lead of Dr Patricia Wu Wu, students have created a series of responses to explore ‘data-as-a-material’, showcased as part of the Edinburgh Science Festival. The works question more than human and under-represented "voices" in data collection or seek to examine ways in which we could adorn our human selves through worn-data interfaces, ranging from interactive artefacts, data physicalisations, climate-focused games, to data-driven storytelling and beyond.
          <br/>
          <br/>
          The student showcase takes place from 1-7 April (10am - 4pm), at Inspace, 1 Crichton St, Newington, Edinburgh EH8 9AB. For directions to the venue, please see <a href="https://www.ed.ac.uk/maps/maps" class="link" target="_blank">the campus map</a>. <!-- todo link -->
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title catalog">Exhibition Catalog</div>
        <!--    todo link-->
        <div class="text pdf-link">PDF Download</div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title sponsor">Sponsor</div>
        <div>
          <a href="https://www.sciencefestival.co.uk/" target="_blank">
            <img :src="Sponsor1" alt="sponsor-1" class="sponsor-img" />
          </a>
          <a href="https://inspace.ed.ac.uk/" target="_blank">
            <img :src="Sponsor2" alt="sponsor-2" class="sponsor-img" />
          </a>
        </div>
      </div>


      <div data-aos="fade-up">
        <div class="sub-title social-media">Social Media</div>
        <div class="text social-media-link">
          <div><a href="https://www.instagram.com/designwithdata/" target="_blank" alt="Design with Data" class="link">@Designwithdata</a></div>
          <div><a href="https://www.instagram.com/inspacegallery/" target="_blank" alt="Inspace Gallery" class="link">@inspacegallery</a></div>
        </div>
      </div>
    </div>

    <!--      right-->
    <div class="right">
      <div data-aos="fade-up">
        <div class="title">Credit</div>
        <div class="text">With thanks to the student production team: </div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title">Website Design and Development</div>
        <div class="text">
          <div>Liyuan Sun</div>
          <div>Zehuan Wang</div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title">Marketing and PR</div>
        <div class="text">
          <div>Wenhua Jiang</div>
          <div>Ganrong Tan</div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title">Poster Design and Exhibition Catalogue</div>
        <div class="text">
          <div>Jenny Hu</div>
          <div>Yue Zhang</div>
          <div>Boya Chen</div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title">Exhibition Construction Research and Setup Support</div>
        <div class="text">
          <div>Jenny Hu</div>
          <div>Yue Zhang</div>
          <div>Boya Chen</div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="text">With thanks to our tutor team:</div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title">Design Informatics Workshop Technician</div>
        <div class="text">
          <div>Mark Kobine</div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title">Design Informatics Research Centre Support Assistant</div>
        <div class="text">
          <div>Roxanne Wong</div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title">Information, Technical and Technology Services</div>
        <div class="text">
          <div>Mike Boyd</div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title">ECA Technology Support Officer</div>
        <div class="text">
          <div>Mark Thompson</div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title">Material Hub Team Lead</div>
        <div class="text">
          <div>Joan Quest</div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="sub-title">Support Services Area Manager</div>
        <div class="text">
          <div>Peter Thomson</div>
          <div>Graham Strachan</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sponsor1 from '@/assets/img/HomeView/sponsor1.png';
import Sponsor2 from '@/assets/img/HomeView/sponsor2.png';

export default {
  name: 'AboutComponent',
  data() {
    return {
      Sponsor1: Sponsor1,
      Sponsor2: Sponsor2,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-family: Helvetica Light;
  text-align: left;
  column-gap: wCalc(31);
  .title {
    margin-bottom: wCalc(20);
    font-size: fSizeCalc(24);
    font-weight: normal;
    line-height: fSizeCalc(44);
    letter-spacing: fSizeCalc(-0.44);
  }
  .text {
    font-size: fSizeCalc(14);
    font-weight: 400;
    line-height: fSizeCalc(20);
    letter-spacing: fSizeCalc(-0.44);
    opacity: 0.8;
    margin-bottom: wCalc(20);
    &.description {
      line-height: fSizeCalc(28);
    }
    &.social-media-link {
      text-decoration: underline;
    }
  }
  .sub-title {
    font-size: fSizeCalc(14);
    margin-bottom: wCalc(6);
  }
  .sponsor-img {
    height: hCalc(67);
    margin-bottom: wCalc(20);
    &:nth-child(1) {
      margin-right: wCalc(13);
    }
  }
}

.link {
  // TODO finish the link
  color: white;
  &:hover {
    color: #00c4ff;
  }
}

@media screen and (max-width: 414px) {
  .content {
    margin: 0 16px;
    grid-template-columns: 1fr;
    .title {
      font-size: fSizeCalc(32);
    }
    .text {
      margin-bottom: hCalcM(15);
      font-size: fSizeCalc(16);
    }
    .sub-title {
      margin-bottom: hCalcM(10);
    }
    .sponsor-img {
      width: wCalcM(138);
      height: wCalcM(55);
      margin-bottom: hCalcM(15);
    }
  }
}
</style>
