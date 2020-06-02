<template>
  <div id="app">
    <van-nav-bar  left-text="返回" left-arrow>
      <template #title>
        <span>1</span>
        <br>
        <span>2</span>
      </template>
      <template #left>
        <img src="#" alt="">
      </template>
      <template #right>
        <van-button type="default" v-on:click="btnclick" >
          <van-icon name="wap-nav" size="28"  color="#333"/>

        </van-button>
      </template>
    </van-nav-bar>
      <h1 v-if="seen">123</h1>
  </div>
</template>

<script>
import Vue from "vue";
import { Overlay,NavBar,Icon,Button } from 'vant';

Vue.use(Overlay);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Button);

export default {
  name: 'app',
    data:function () {
        return {
            seen:false
        }
    },
  components: {

  },
    methods: {
        btnclick(e){
            this.seen=!this.seen;
          console.log(e)
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
