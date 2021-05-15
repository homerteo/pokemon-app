import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routerOptions = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/pokelist",
    name: "PokemonList",
  },
];

const routes = routerOptions.map((route) => {
  return {
    ...route,
    component: () => import(`@/views/${route.name}/${route.name}`),
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
