<template>
  <div class="page">
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
      <button>底部</button>
    </div>  
  </div>  
</template>

<script>


export default {
  data () {
    return {
    }
  },
  methods:{
  },
  created(){
    
  }
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
.scroll-w{
  padding:0 20px;
  padding-bottom:80px;
  background: pink;
}
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
