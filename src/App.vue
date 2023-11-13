<template>
  <nav ref="headerNav" class="header">
    <router-link to="/">Home</router-link>
    <div>
      <router-link :to="{ path: '/detail', query: { num: 1 } }">Work</router-link>
      <ul class="sub">
        <li v-for="item in popoldata" :key="item.num">
          <router-link :to="{ path: '/detail', query: { num: item.num } }">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />

  {{ console.log(this.$router.currentRoute._rawValue.name) }}
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
  },
  methods: {
    headerClick() {
      this.headerClickValue = this.$router.currentRoute._rawValue.name;
      console.log(this.headerClickValue)
    }
  },
  mounted() {
    this.headerClick();
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600&display=swap');

@mixin tablet {
  @media (max-width : 1023px) {
    @content;
  }
}

ul,
li,
p,
a,
b,
div,
figure,
figcaption,
h1,
h2,
hr,
h3 {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans KR', sans-serif;

  img,
  video {
    width: 100%;
  }

  span>video {
    max-height: 30vh;
  }

  --1size : 15px;
  --2size : 20px;
  --3size : 25px;
  --4size : 30px;
  --5size : 35px;

  padding: 0 3vw;

  max-width: 1600px;
  min-width: 700px;
  margin: 0 auto;
}

nav {
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 2vw 0 3vw;

  >a,
  >div>a {
    position: relative;
    font-weight: bold;
    font-size: var(--1size);
    color: black;
    padding: 1vw;

    &.router-link-active {
      &::after {
        content: "";
        position: absolute;
        bottom: 0%;
        left: 0;
        display: block;
        width: 100%;
        height: 10%;
        background-color: black;
      }
    }

    &:hover {
      color: #6253A4;

      &::after {
        background-color: #6253A4;

      }
    }
  }

  >div {
    position: relative;

    .sub {
      display: none;
      position: absolute;
      bottom: -1vw;
      left: 50%;
      transform: translate(-50%, 100%);
      border-radius: var(--1size);
      background-color: #6253A4;
      width: 250%;
      padding: 1vw 0;
      z-index: 2;

      a {
        position: relative;
        display: block;
        color: white;
        font-weight: 500;
        padding: calc(var(--1size)/2) 0 calc(var(--1size)/2) var(--1size);

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

    &:hover .sub {
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
  }

}
</style>
