<template>
  <div class="home">
    <div>
      <figure class="profile">
        <p><img :src="`./img/me.png`" /></p>
        <figcaption>
          <div>
            <h3>박예린</h3>
            <b>퍼블리셔 & 프론트 엔드</b>
          </div>
          <p>
            안녕하세요. <br>
            이번에 처음 개발자의 길의 발들이게 된 박예린입니다.
            그린컴퓨터학원에서 프론트엔드 기초 과정을 배웠고
            남부여성발전 센터에서 IOS풀스택 과정을 배웠습니다. 
            앞으로도 열심히 공부해 차근차근 헤쳐 나가려 합니다. </p>
          <p>이메일 : swk5577@naver.com</p>
        </figcaption>
      </figure>


      <div class="popol">
        <swiper :direction="'vertical'" :slidesPerView="1" :spaceBetween="30" :mousewheel="true" :pagination="{
          clickable: true,
        }" :modules="modules" :autoplay="{ delay: 4000, disableOnInteraction: false, }" class="mySwiper">
          <swiper-slide v-for="item in popoldata" :key="item.num">
            <figure>
              <figcaption>
                <h2>{{ item.name }}</h2>
                <p><span>소요 일수 : </span>{{ item.time }}</p>
                <p><span>간략 설명 : </span>{{ item.Brief_description }}</p>
                <p><span>사용 프로그램 : </span>
                  <span v-for="(item2, k) in item.use" :key="k">{{ item2 }},</span>
                </p>
                <router-link :to="{ path: '/detail', query: { num: item.num } }" class="more">MORE + </router-link>
              </figcaption>
              <router-link :to="{ path: '/detail', query: { num: item.num } }">
                <p><img :src="`./img/${item.thum}.png`" /></p>
              </router-link>
            </figure>
          </swiper-slide>
        </swiper>
        <p>SCROLL DOWN</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Mousewheel, Pagination, Autoplay],
    };
  },
  computed: {
    ...mapState(['popoldata'])
  },
  methods: {

  }
}
</script>
<style lang="scss">
@mixin tablet {
  @media (max-width : 1023px) {
    @content;
  }
}

:root {
  --swiper-theme-color: #6253A4;
}

.home {
  h2 {
    font-size: var(--4size);
  }

  >div {
    display: flex;
    gap: 5vw;

    .profile {
      flex: 1;

      >p {
        border-radius: 50vw 50vw 0 0;
        width: 100%;
        height: 40%;
        overflow: hidden;

        img {
          object-fit: cover;
          height: 100%;
        }
      }

      >figcaption {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div {
          margin: 10% 0;

          h3 {
            font-size: var(--3size);
            line-height: 2;
          }

          b {
            font-size: var(--1size);
          }
        }

        p {
          line-height: 2;
          margin-bottom: 10%;
          word-break: keep-all;
        }
      }
    }

    .popol {
      position: relative;
      overflow: hidden;
      display: flex;
      flex: 4;
      height: 85vh;

      >p {
        height: 100%;
        z-index: 2;
        position: absolute;
        bottom: 0;
        right: 0;
        writing-mode: vertical-lr;
        display: flex;
        align-items: center;
        justify-content: end;
        color: #e9e9e9;
        font-size: var(--1size);
        font-weight: bold;

        &::after {
          content: "";
          margin-top: 2%;
          display: block;
          height: 20%;
          width: 2px;
          background-color: #e9e9e9;
        }
      }

      figure {
        figcaption {
          position: relative;
          margin-bottom: 5vh;

          >h2 {
            margin-bottom: 1%;
          }

          >p {
            display: flex;
            line-height: 2;
            word-break: keep-all;

            >span:nth-of-type(1) {
              flex-shrink: 0;
              color: #c0c0c0;
            }

            >span{
              margin-right: 10px;
            }
          }

          .more {
            position: absolute;
            bottom: 0; transform: translateY(100%);
            right: 0;
            color: #6253A4;
            font-weight: bold;
          }
        }

        >a >p {
          width: 100%;
          height: 60vh;
          background-color: #e9e9e9;

          @include tablet {
            width: 95%;
          }

          >img {
            object-fit: cover;
          }
        }


      }

    }
  }
}


.swiper {
  width: 90%;
  height: 100%;
  overflow: visible;
}

.swiper-slide {
  background: #fff;
  /* Center slide text vertically */
  justify-content: center;
}

.swiper-vertical>.swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  right: var(--swiper-pagination-right, -2.8vw);
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}</style>
