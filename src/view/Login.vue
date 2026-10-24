<script setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
const loginInfo = ref({
  username: '',
  password: ''
})
</script>

<template>
  <el-card class="box-card">
    <h2>后台管理系统</h2>
    <el-form :model="loginInfo"status-icon> 
        <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginInfo.username"></el-input>
        </el-form-item>
        <el-form-item  prop="password">
            <el-input :prefix-icon="Lock" v-model="loginInfo.password" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(loginInfo)">登录</el-button>
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