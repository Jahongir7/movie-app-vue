import VueRouter from "vue-router";
import Home from "./components/Home-Main.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});

export default router;
