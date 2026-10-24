// 封装axios
/*
   1.封装可以简化我们接口调用的代码,可以去掉一些重复的代码
   2.换掉Axios也是比较简单的
   3.封装
*/

import axios from "axios";
const request = (url = '', data = {}, method = "get", timeout = 5000) => {
    // ...
    return new Promise((resolve, reject) => {
        // ...
        // 将原来的 if...get 代码块替换或修改为通用写法：
        axios({
            method: method.toLowerCase(),
            url: url,
            // 如果是 get 请求参数放 params，其他请求放 data
            params: method.toLowerCase() === 'get' ? data : {},
            data: method.toLowerCase() !== 'get' ? data : {},
            timeout: timeout,
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}

export default request