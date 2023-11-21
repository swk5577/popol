<template>
  <div class="about">
    <div>
      <figure>
        <img :src="`./img/me.png`">
        <div>
          <h2>박예린</h2>
          <b>퍼블리셔 & 프론트 엔드</b>
        </div>
        <figcaption>
          <b>전화번호</b>
          <p>
            010-4849-1869
          </p>
          <b>이메일</b>
          <p>
            swk5577@naver.com
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="content">
      <div class="con1">
        <h1>안녕하세요.<br>
          프론트엔드 & 퍼블리셔 신입 <strong>박예린</strong> 입니다.</h1>

        <h3>"<strong>박예린</strong>"을 나타내는 키워드</h3>
        <ul class="text">
          <li v-for="(item, k) in aboutMe" :key="k" @click="addclass(k)" :class="{ 'on': classnum == k }">
            <div class="title"><b>{{ item.title }}</b>
              <p><span></span><span></span></p>
            </div>
            <div class="about_list" :style="heistyle(k)">
              <p v-html="item.list" ref="Pbox"></p>
            </div>
            <hr>
          </li>
        </ul>
      </div>

      <div class="con2">
        <h3>사용가능 툴</h3>
        <ul class="use">
          <li v-for="(item2, k) in useTool" :key="k">
            <p><img :src="`./img/${item2.name}.png`" alt=""></p>
            {{ item2.text }}
          </li>
        </ul>
      </div>
    </div>

  </div>
  <nav>
    <div class="more">
      <ul class="more_sub">
        <li v-for="item in popoldata" :key="item.num" @click="scrollup">
          <router-link :to="{ path: '/detail', query: { num: item.num } }">{{ item.name }}</router-link>
        </li>
        <li class="top" @click="scrollup">▲ top </li>
      </ul>
      <button>more?</button>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      classnum: "",
      hei: ""
    }
  },
  computed: {
    ...mapState(['aboutMe', 'useTool', 'popoldata'])
  },
  methods: {
    addclass(k) {
      this.classnum = k
      this.hei = this.$refs.Pbox[k].offsetHeight
      console.log(this.$refs.Pbox[k].offsetHeight);
    },

    heistyle(k) {
      if (this.classnum == k) {
        return { height: this.hei + 'px' }
      }
    },

    scrollup() {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  },
  mounted() {
    this.hei = this.$refs.Pbox[0].offsetHeight
  }

}
</script>

<style lang="scss">
.about {
  display: flex;
  gap: 5vw;

  >* {
    &:nth-child(1) {
      flex: 1;
      position: relative;

      >figure {
        position: sticky;
        top: 50%; transform: translateY(-50%);
        left: 0;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        >img {
          height: 57%;
          object-fit: cover;
          border-radius: 50vw 50vw 0 0;
        }

        >figcaption {
          p {
            margin-left: 1vw;
          }
        }
      }
    }

    &:nth-child(2) {
      flex: 4;

      >* {
        margin-bottom: 10vh;
      }
    }
  }

  .con1 {
    h1 {
      line-height: 2;
      margin-bottom: 10vh;
    }

    strong {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        width: 110%;
        height: 50%;
        background-color: #bbaff0;
      }
    }

    >h3 {
      margin-bottom: 4vh;
    }

    .text {
      margin-left: 2vw;

      >li {

        >hr,
        >.title {
          margin-bottom: 2vh;
        }

        >.title {
          display: flex;
          justify-content: space-between;
          align-items: center;

          >p {
            position: relative;
            width: 30px;
            height: 30px;
            background-color: #6253A4;
            border-radius: 100%;

            span {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              display: block;
              width: 15px;
              height: 2px;
              border-radius: 2px;
              background-color: #fff;

              &:nth-of-type(1) {
                transform: translate(-50%, -50%) rotate(90deg);
                transition: 0.3s;
              }
            }
          }
        }

        .about_list {
          display: flex;
          position: relative;
          overflow: hidden;
          transform-origin: top;
          height: 0;
          transition: .5s;

          >p {
            position: absolute;
            top: 0;
            left: 0;
            margin: 0 2vw;
            word-break: keep-all;
            padding-bottom: 2vh;
          }
        }

        &.on {
          >.title {
            color: #6253A4;

            >p>span:nth-of-type(1) {
              transform: translate(-50%, -50%);
            }
          }
        }
      }

    }
  }

  .con2 {
    >h3 {
      margin-bottom: 4vh;
    }

    .use {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      >li {
        width: 45%;
        display: flex;
        align-items: center;
        margin-bottom: 2vh;
        word-break: keep-all;

        >p {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          padding: 10px;
          border: 1px solid #c0c0c0;
          border-radius: 10px;
          margin-right: 10px;

          >img {
            height: 100%;
            object-fit: contain;
          }
        }
      }

    }
  }

}
.more {
  display: flex;
  align-items: end;
  flex-direction: column;
  position: fixed;
  bottom: 2vw;
  right: 2vw;

  @media (min-width: 1600px) {
    right: calc(50% - 800px + 1vw)
  }

  >button {
    border: none;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    background-color: #6253A4;
    font-weight: bold;
    color: white;
  }

  .more_sub {
    display: none;
    border-radius: var(--1size);
    background-color: #6253A4;
    z-index: 2;
    padding: 1vw 0;

    a {
      position: relative;
      display: block;
      color: white;
      font-weight: 500;
      padding: calc(var(--1size)/2) 1vw;

      &:hover::after {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        height: 100%;
        width: 100%;
        background-color: #7260c0;
        animation: sub 0.5s;
      }
    }

  }

  &:hover .more_sub {
    display: block;
  }
}
.top{
    position: relative;
    padding: calc(var(--1size)/2)  0 calc(var(--1size)/2) var(--1size);
    color: white; 
    font-weight: 500;
    &:hover::after{
          content: "";
          z-index: -1;
          position: absolute;
          top: 0; right: 0;
          display: block;
          height: 100%; width: 100%;
          background-color: #7260c0;
          animation: sub 0.5s;
        }
  }
  @keyframes sub {
    0%{transform-origin: left center; transform: scaleX(0);}
    100%{transform-origin: left center; transform: scaleX(1);}
  }

</style>
