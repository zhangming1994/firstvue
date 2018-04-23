<template>
  <el-carousel :intervals="4000" type="card" height="400px">
    <el-carousel-item v-for="(item,index) in images" :key="index">
      <img :src="item.src" style="width: 960px;"/>
    </el-carousel-item>
  </el-carousel>
</template>
<style>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<script>
import img from '../../static/json/lunbo.json'
export default {
  data () {
    return {
      images: img.images
    }
  }
}
</script>
