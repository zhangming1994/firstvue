<template>
  <div>
    <h1>Hello</h1>
    <a>Hello</a>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'view1',
  mounted: function () {
    axios.post('http://music.163.com/artist/album?id=6452&limit=30')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (response) {
        console.log(response)
      })
  }
}
</script>
<style>
</style>
