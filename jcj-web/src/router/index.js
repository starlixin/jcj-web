import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import(/* webpackChunkName: "about" */ "../views/About.vue")

Vue.use(VueRouter);



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  // mode:'history',
  routes
});
export default router;
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

