<template>
  <el-menu default-active="/" theme="dark" class="el-menu-demo" :router="true" mode="horizontal"  background-color="black" text-color="white" active-text-color="red" @select="handleSelect">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/about">发现音乐</el-menu-item>
    <el-menu-item index="/new">我的音乐</el-menu-item>
    <el-menu-item index="/myfriend">朋友</el-menu-item>
    <el-menu-item index="/mall">商城</el-menu-item>
    <el-menu-item index="/musicians">音乐人</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
