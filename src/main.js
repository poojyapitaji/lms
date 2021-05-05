import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import VuePageTransition from "vue-page-transition";
import Home from "./components/pages/Home";
import ViewCourse from "./components/pages/ViewCourse";
import Courses from "./components/pages/Courses";
import Profile from "./components/pages/Profile";
import PaymentHistory from "./components/pages/PaymentHistory";
import Inovice from "./components/pages/Inovice";
import PrintInovice from "./components/pages/PrintInovice";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VuePageTransition);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/view/course",
    name: "viewCourse",
    component: ViewCourse,
  },
  {
    path: "/courses",
    name: "course",
    component: Courses,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/paymentHistory",
    name: "paymentHistory",
    component: PaymentHistory,
  },
  {
    path: "/inovice",
    name: "inovice",
    component: Inovice,
  },
  {
    path: "/inovice/generate",
    name: "inoviceGenerate",
    component: PrintInovice,
  },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
