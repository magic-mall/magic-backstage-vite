<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="auto">
                <Menu :isCollapse="isCollapse"></Menu>
            </el-aside>
            <el-container>
                <el-header>
                    <Navbar @collapse="collapse"></Navbar>
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script setup lang="ts">

const isCollapse = ref(false)

function collapse(show: boolean) {
    isCollapse.value = show
}

</script>

<style lang="scss" scoped>
.el-header {
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    height: 50px;
    width: 100%;
}
.el-main {
    background-color: #f0f2f5;
}
.el-aside {
    height: 100vh;
    background-color: rgb(48, 65, 86);
}
</style>