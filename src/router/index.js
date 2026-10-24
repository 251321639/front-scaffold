import { createRouter, createWebHistory } from "vue-router";
import { CONFIG } from "../config";
// const User = () => import('../views/User.vue')

const Login = () => import("../view/Login.vue");
const Index = () => import("../view/Index.vue");

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Index",
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("to", to);
  // 获取token
  const token = localStorage.getItem(CONFIG.TOKEN_NAME);
  // 登录页面不需要验证
  if (to.path === "/login") {
    next();
  } else {
    // 验证token
    if (token) {
      next();
    } else {
      // 跳转到登录页面
      next("/login");
    }
  }
});

export default router;
