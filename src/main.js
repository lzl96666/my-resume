// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
Vue.config.productionTip = false;

import {
  Icon,
  Loading,
  Button,
  Dialog,
  Cell,
  CellGroup,
  Field,
  Toast,
  Popup
} from "vant";
import "vant/lib/index.css";
Vue.use(Icon);
Vue.use(Loading);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Popup);
// Vue.prototype.$comfirm = Dialog

import "./assets/bootstrap.css";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper /* { default global options } */);

import animated from "animate.css";
Vue.use(animated);
/* eslint-disable no-new */

// diglog
import dialog from "./base/dialog";
Vue.prototype.$dialog = dialog;

// $comfirm
import theConfirm from "./base/confirm/index.js";
Vue.prototype.$confirm = theConfirm;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
