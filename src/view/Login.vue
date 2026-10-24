<script setup>
import { reactive, ref, watch } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import request from '../api'
import { login } from '../api/login'
const loginInfo = reactive({
    username: '',
    password: ''
})
const loginRef = ref()
const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        // { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: "blur"}
    ]
})
let loginButtonDisabled = ref(true)
watch(loginInfo, () => {
    loginRef.value.validate((valid) => {
        if (valid) {
            loginButtonDisabled.value = false
        } else {
            loginButtonDisabled.value = true
        }
    })
})
const submitForm = () => {
    login(loginInfo.username,loginInfo.password).then((response)=>{
        console.log("登录response:", response)
    })
}


</script>

<template>
    <el-card class="box-card">
        <h2>后台管理系统</h2>
        <el-form ref="loginRef" :rules="rules" :model="loginInfo" status-icon>
            <el-form-item prop="username">
                <el-input placeholder="请输入用户名" :prefix-icon="User" v-model="loginInfo.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input placeholder="请输入密码" :prefix-icon="Lock" show-password v-model="loginInfo.password"
                    type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :disabled="loginButtonDisabled" type="primary" @click="submitForm(loginInfo)">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 480px;
}
</style>