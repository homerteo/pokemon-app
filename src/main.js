import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";

import Dashboard from "./layout/Dashboard/Dashboard.vue";

require("./assets/scss/bulma.scss");
require("./assets/scss/base.scss");

Vue.component("dashboard-layout", Dashboard);

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
