<template>  
  <div class="page" @scroll="onScroll">
    <div class="scroll-w">
      <p class="pp">
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        1111111<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/> 
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        osnog<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        哦弄个spnsgpn<br/>
        555<br/>
        555<br/>
        555<br/>
        555<br/>
        555<br/>
        555<br/>
        555<br/>
        555<br/>
        555<br/>
        9999999999<br/>
        9999999999<br/>
        9999999999<br/>
        9999999999<br/>
        9999999999<br/>
        9999999999<br/>
        9999999999<br/>
        9999999999<br/>
        9999999999<br/>
        9999999999<br/>
        9999999999<br/>
        9999999999<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        8888<br/>
        <br/>
      </p>
      <ul>
        <li v-for="(intem,index) in 200" :key="index">
          页面如果滚动到底
        </li>
        <li v-for="(intem,index) in 20" >
          入一个简单的库就行，不用再写
        </li>  
        <li>滴滴滴滴滴滴滴======================================</li>
      </ul>    
    </div>  
    <div class="form">
      <button>我要棒棒糖</button>
    </div>  
  </div>  
</template>

<script>

import inobounce from 'inobounce'
export default {
  data () {
    return {
    }
  },
  methods:{
    onScroll(){
      console.log("liuli")
    }
  },
  created(){
    //安装引用 inobounce
    let u = navigator.userAgent
    if (u.indexOf('iPhone') > -1) {
      inobounce.enable()
    }
  },
  beforeDestroy() {
    inobounce.disable()
  },
}
</script>
<style scoped>
*{
  margin:0;padding:0;
}
.page{
  height:100%;
  overflow: auto; 
  -webkit-overflow-scrolling: touch; 
  
}
/* 只要把屏幕区分成块，并在该块中使用overflow：auto,就会出现卡顿 */
/* -webkit-overflow-scrolling: touch; 加它不好用*/
/* inobounce.min.js 引用它不好用 */
.scroll-w{
  padding:0 20px;
  margin-bottom:80px;
  /* height: 115px;
  border: 1px solid gray;

  /* max-height:200px; */
  
  background: pink;
}
/* .pp{height:100%} */
p{
  line-height:22px;
  font-size:12px;
}
.li{
  line-height:22px;
  font-size:12px;
  color:#666;
}
.form{
  position:fixed;
  width:100%;
  left:0;
  bottom:0;
  z-index:20;
  border-top:solid 1px red;
  height:50px;
  background:#fff;
  padding:10px
}
button{
  display:block;
  text-align: center;
  font-size:14px;
  
  background:gold;
  border-radius:5px;
  margin:0 auto;
  padding:10px;
}



</style>
