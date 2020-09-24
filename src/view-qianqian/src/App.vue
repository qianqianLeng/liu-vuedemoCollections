<template>
  <div id="app">
    <router-view :key="Math.floor(Math.random()*10+1)"/>
  </div>
</template>
<script>
export default {
  name: 'App',
  created(){
  },
  methods:{
    
  }

}
</script>

<style>
/* @import "../static/css/common.css"; */
html,body{
  height: 100%;
}
#app{
  height:100%;
}
</style>
