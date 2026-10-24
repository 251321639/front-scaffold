import { defineStore } from "pinia";

// 创建-个全局的状态、容器。
// 容器接收两个参数,第一个参数:容器的ID,第二个:容器的内容
// defineStore返回的是一个函数,这个函数按照usexxx去命名
export const useStoreDemo = defineStore("storeDemo", {
    // 容器的内容
    // state:存储数据的地方,是一个函数,函数返回一个对象,对象就是我们要存储的数据
    state: () => {
        return {
            msg: "Hello Pinia"
        }
    },
    // getters:计算属性,用来封装计算属性,可以让我们在组件中直接使用
    getters: {
        // 计算属性的函数,第一个参数是state,就是上面state函数返回的对象
        // 第二个参数是getters,就是当前容器的getters对象 
    },
    // actions:方法,用来封装方法,可以让我们在组件中直接使用
    actions: {
        // 方法的函数,第一个参数是state,就是上面state函数返回的对象
        // 第二个参数是getters,就是当前容器的getters对象 
    }
})