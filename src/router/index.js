import { createRouter, createWebHistory } from "vue-router";
import MasterView from "../views/MasterView.vue";

const routes = [
  {
    path: "/",
    name: "master",
    component: MasterView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
