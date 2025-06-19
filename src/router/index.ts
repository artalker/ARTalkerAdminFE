import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import MainLayout from "../components/mainLayout/MainLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: Home }],
  },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
