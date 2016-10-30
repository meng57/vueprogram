import "../styles/usage/page/app.scss";

// views
import index from "./components/index.vue";
import shouye from "./components/shouye.vue";
import fenlei from "./components/fenlei.vue";
import shopping from "./components/shopping.vue";
import my from "./components/my.vue";
import detail from "./components/detail.vue";

// router
import Vue from "./libs/vue.js";
import VueRouter from "./libs/vue-router.js";
Vue.use(VueRouter);

let router = new VueRouter();

let App = Vue.extend({});

router.map({
  '/': {
    component: index,
    subRoutes: {
      '/': {
        component: shouye
      },
      '/fenlei': {
        component: fenlei
      },
      '/shopping': {
        component: shopping
      },
      '/my': {
        component: my
      }
    }
  },
  '/detail':{
    component: detail
  }
});

router.start(App, 'body');
