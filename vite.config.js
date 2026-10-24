import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      // 匹配所有以 /api 开头的请求路径
      "/api": {
        // 👉 替换成你自己的 fastmock 根地址，不要带后面的 /api/auth/login
        target: 'http://localhost:8080',
        // 必须开启：修改请求头 origin，目标服务识别
        changeOrigin: true,
        // 路径重写：把请求地址开头的 /api 删掉
        // 浏览器请求：http://localhost:5173/api/auth/login
        // 转发之后：https://www.fastmock.site/mock/bfe9d42xxxx/auth/login
        rewrite: (path) => {
        //   const newPath = path.replace(/^\/api/, "");
          console.log(path);
          return path;
        },
      },
    },
  },
});
