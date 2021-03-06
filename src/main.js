import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import VueRouter from "vue-router";

import store from "./store/store";

import Home from "./views/Home";
import Pets from "./views/Pets";
import Favs from "./views/Favs";
import Form from "./views/Form";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/pets",
    component: Pets
  },
  {
    path: "/favs",
    component: Favs
  },
  {
    path: "/form",
    component: Form
  }
];

const router = new VueRouter({ routes });

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
