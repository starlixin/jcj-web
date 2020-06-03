<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { Overlay, NavBar, Icon, Button } from "vant";
import Header from "@/components/Header.vue";

Vue.use(Overlay);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Button);

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  background-color: #bbb;
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
