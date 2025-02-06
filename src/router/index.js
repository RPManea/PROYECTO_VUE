import Contador from "@/components/Contador.vue";
import SideBar from "@/components/SideBar.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/components/Home.vue"),
    },
    {
      path: "/sidebar",
      name: "sidebar",
      component: SideBar,
    },
    {
      path: "/contador",
      name: "contador",
      component: Contador,
    },
    {
      path: "/ListaDeTareas",
      name: "ListaDeTareas",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/components/ListaDeTareas.vue"),
    },
  ],
});

export default router;
