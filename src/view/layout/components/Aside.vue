<script setup>
import { MoonNight } from '@element-plus/icons-vue'
import { MENU_CONFIG } from "../../../config/menu";
</script>

<template>
    <el-aside width="240px" style="border-right: 1px solid #cccccc;">
        <div class="aside-logo">
            <router-link to="/">
                <el-button text style="font-size:25px;">
                    <el-icon style="margin-right: 10px;">
                        <MoonNight />
                    </el-icon>
                    Admin
                </el-button>
            </router-link>
        </div>
        <div class="menu">
            <el-menu router>
                <el-sub-menu v-for="menu in MENU_CONFIG" :key="menu.index" :index="menu.index">
                    <template #title>
                        <el-icon>
                        </el-icon>
                        <span>{{ menu.title }}</span>
                    </template>
                    <template v-if="menu.subMenu">
                        <el-sub-menu v-for="subMenu in menu.subMenu" :key="subMenu.index" :index="subMenu.index">
                            <template #title>
                                <el-icon>
                                    <span></span>
                                </el-icon>
                                <span>{{ subMenu.title }}</span>
                            </template>
                            <el-menu-item v-for="item in subMenu.items" :key="item.index" :index="item.index">
                                <template #title>
                                    <span>{{ item.title }}</span>
                                </template>
                            </el-menu-item>
                        </el-sub-menu>
                    </template>
                    <template v-else>
                        <el-menu-item v-for="item in menu.items" :key="item.index" :index="item.index">
                            <template #title>
                                <span>{{ item.title }}</span>
                            </template>
                        </el-menu-item>
                    </template>
                </el-sub-menu>
            </el-menu>
        </div>
    </el-aside>
</template>

<style lang="less" scoped>
.aside-logo {
    height: 50px;

    button {
        width: 100%;
        height: 100%;
    }
}
</style>
