<template>
  <div id="header">
    <van-nav-bar left-arrow>
      <template #title>
        <span>1</span>
        <br />
        <span>2</span>
      </template>
      <template #left>
        <img src="#" alt="" />
        <h2>JCJ</h2>
      </template>
      <template #right>
        <van-button type="default" v-on:click="btnclick">
          <van-icon name="wap-nav" size="28" color="#333" />
        </van-button>
      </template>
    </van-nav-bar>
    <el-row v-show="seen">
      <el-menu router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="2">活动</el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>团队</span>
          </template>

          <el-menu-item-group>
            <!--<template slot="title">分组一</template>-->
            <el-menu-item index="1-1">manag</el-menu-item>
            <el-menu-item index="1-2">volunteer</el-menu-item>
            <el-menu-item index="1-3">consultant</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="About">关于我们</el-menu-item>
        <el-menu-item index="4">联系我们</el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Overlay, NavBar, Icon, Button } from "vant";

Vue.use(Overlay);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Button);
export default {
  name: "header",
  data: function() {
    return {
      seen: false
    };
  },
  components: {},
  methods: {
    btnclick(e) {
      this.seen = !this.seen;
      console.log(e);
    }
  },
  watch: {
    $route: {
      handler: function() {
        this.seen=false
      },
      // 深度观察监听
      deep: true
    }
  }
};
</script>

<style scoped></style>
