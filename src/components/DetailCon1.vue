<template>
  <div class="con">
    <figure :class="{'topfig':true, 'ing': detailData[0].time === '제작 중' }">
      <hr>
      <img :src="`./img/${detailData[0].img}.png`" />
      <hr>
    </figure>


    <div class="contan">
      <article class="text">
        <h2>{{ detailData[0].name }}</h2>

        <p><span>제작 일수 </span>{{ detailData[0].time }}</p>
        <p><span>제작 인원 </span>{{ detailData[0].teyp }}</p>
        <p><span>어플 간략 설명 </span>{{ detailData[0].Brief_description }}</p>
        <p><span>주요 기능 </span>{{ detailData[0].main_function }}</p>
        <p v-if="detailData[0].mycharge"><span>담당기능</span> {{detailData[0].mycharge}}</p>
        <p><span>데모 링크 </span> <a :href="detailData[0].demo">{{ detailData[0].demo }}</a></p>
        <p><span>깃허브 링크</span><a :href="detailData[0].git">{{ detailData[0].git }}</a></p>
        <p><span>어플 제작 후기 </span>{{ detailData[0].impression }}</p>
      </article>

      <div class="text2">
        <article>
          <h3>폰트</h3>
          <p v-for="(item, k) in detailData[0].font" :key="k"> {{ item }}</p>
        </article>

        <article>
          <h3>주요 색상</h3>
          <p class="color">
            <span v-for="(item, k) in detailData[0].color" :key="k" :style="colorif(item)"> {{ item }}</span>
          </p>
        </article>

        <article>
          <h3>개발 사이즈</h3>
          <p v-for="(item, k) in detailData[0].size" :key="k"> {{ item }}</p>
        </article>

      </div>

      <article class="use">
        <h3>사용 프로그램</h3>
        <p>
          <span v-for="(item, k) in detailData[0].use" :key="k">
            <img :src="`./img/${item}.png`">
          </span>
        </p>
      </article>

      <article class="video">
        <h3>미리보기</h3>
        <p>
          <video :src="`./video/${detailData[0].video}.mp4`" controls> 준비된 영상이 없습니다. </video>
        </p>
      </article>

      <article class="text3">
        <h3>개발 이슈</h3>
        <div v-for="(item, k) in detailData[0].issue" :key="k">
          <b>{{k+1+". "}} {{ item.title }}</b>
          <p><span> 발생한 문제  </span> <span v-html="item.problem"></span></p>
          <p><span>해결한 방법  </span> <span v-html="item.solve"></span></p>
        </div>
      </article>

      <nav>
        <div class="more">
          <ul class="more_sub">
            <li v-for="item in popoldata" :key="item.num" @click ="scrollup">
              <router-link :to="{ path: '/detail', query: { num: item.num } }">{{ item.name }}</router-link>
            </li>
            <li class="top" @click ="scrollup">▲ top </li>
          </ul>
          <button>more?</button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {

    }
  },

  computed: {
    ...mapState(['popoldata']),
    detailData() {
      return this.popoldata.filter((item) => item.num == this.$route.query.num)
    }
  },

  methods: {
    colorif(item) {
      if (item == "#000000" || item == "#333333") {
        return { backgroundColor: item, color: "#ffffff" }
      } else if(item == "#ffffff") {
        return {   border: "1px solid black"}
      }else{
        return { backgroundColor: item }
      }
    },

    scrollup(){
      window.scrollTo({top:0,behavior:"smooth"})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.con {
  .topfig {
    margin-bottom: 10vw;
    width: 100%;
    height: 80vh;
    >img{
      height: 100%;
      object-fit: contain;
    }
    &.ing >img{
      position: relative;
      &::after{
        content: '제작 중';
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }

  .contan {
    width: 90%;
    margin: 0 auto;
    h3{
      line-height: 3;
    }
    >* {
      margin-bottom: 10vw;
    }
  }

  .text {
    >h2 {
      font-size: var(--4size);
      line-height: 3;
    }

    >p {
      line-height: 2;
      display: flex;
      margin-bottom: 1vw ;
      word-break: keep-all;
      >span {
        display: block;
        width: 120px;
        color: #c0c0c0;
        flex-shrink: 0;
        padding-right: 1vw;
      }
    }
  }

  .text2 {
    display: flex;
    justify-content: space-between;
    text-align: center;
    .color{
      display: flex;
      gap: 1vw;
      >span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
    }
  }

  .use{
    p{
      display: flex;
      >span{
        display: block;
        width: 60px;
        height: 60px;
        border: 1px solid #c0c0c0;
        border-radius: 10px;
        overflow: hidden;
        padding: 10px;
        margin-right: 1vw;
        >img{
          object-fit: contain;
          height: 100%;
        }
      }
      }
  }

  .video{
    width: 100%;
    height: 70vh;
    >p{
      width: 100%;
      height: 100%;
      >video{
        height: 100%;
      }
    }
  }
  .text3{
    >div{
      margin-left: 2vw;
      margin-bottom: 5vw;
      b{
        line-height: 3;
        font-size: var(--2size);
      }
      >p{
        display: flex;
        margin: 0 0 2vw 2vw;
        word-break: keep-all;
        >span:nth-of-type(1){
          display: block;
          width: 90px;
          color: #c0c0c0;
          flex-shrink: 0;
          
        }
      }
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
}
@keyframes sub {
    0%{transform-origin: left center; transform: scaleX(0);}
    100%{transform-origin: left center; transform: scaleX(1);}
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

@keyframes sub {
  0% {
    transform-origin: left center;
    transform: scaleX(0);
  }

  100% {
    transform-origin: left center;
    transform: scaleX(1);
  }
}</style>
