<template>
  <div id="app">
    <Header></Header>
    <br/><br/>
    <!--<h2>{{msg}}</h2>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
export default {
  name: 'App',
  data () {
    return {
      msg: 'Weclcome study Vue.js'
    }
  },
  components: {Header}
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: auto;
  }
  body{
    margin:0px;
    padding:0px;
  }
</style>
