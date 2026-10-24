import axios from "axios";
import { ElMessage } from "element-plus";
import { CONFIG } from "../config";

axios.interceptors.request.use(
  function (config) {
    if (config.method == "get") {
      let timeStamp = new Date().getTime();
      if (config.params) {
        config.params.timeStamp = timeStamp;
      } else {
        config.params = {
          timeStamp,
        };
      }
    }

    // add token to header
    // let tokenValue = "";
    // try {
    //   tokenValue = localStorage.getItem(CONFIG.TOKEN_NAME);
    // } catch (error) {
    //   tokenValue = "";
    // }
    // config.headers[CONFIG.TOKEN_NAME] = tokenValue;
    let token = localStorage.getItem(CONFIG.TOKEN_NAME);
    config.headers[CONFIG.TOKEN_NAME] = token ? token : "";

    return config;
  },
  function (error) {
    ElMessage({
      type: "error",
      message: "请求错误:" + error.message,
    });
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    // 响应成功
    return response;
  },
  function (error) {
    // 响应失败
    if (error.response.status === 401) {
      ElMessage({
        type: "warning",
        message: "请求错误:" + error.response.data.message,
      });
      localStorage.removeItem(CONFIG.TOKEN_NAME);
      router.currentRoute.value.path != "/login" && router.replace("/login");
    }
    return Promise.reject(error);
  },
);
const request = (url = "", data = {}, method = "get", timeout = 5000) => {
  // ...
  return new Promise((resolve, reject) => {
    // ...
    // 将原来的 if...get 代码块替换或修改为通用写法：
    axios({
      method: method.toLowerCase(),
      url: url,
      // 如果是 get 请求参数放 params，其他请求放 data
      params: method.toLowerCase() === "get" ? data : {},
      data: method.toLowerCase() !== "get" ? data : {},
      timeout: timeout,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default request;
