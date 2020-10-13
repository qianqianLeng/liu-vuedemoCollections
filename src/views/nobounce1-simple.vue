<template>  
  <div class="page">
    <div class="scroll-w">
      <p class="p">
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
        55555555<br/>
        55555555<br/>
        55555555<br/>
        55555555<br/>
        55555555<br/>
        55555555<br/>
        55555555<br/>
        55555555<br/>
        55555555<br/>
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
          页面滚动到底,会不会触发回弹
        </li>
        <li>我是底部008</li>
      </ul>    
    </div>  
    <div class="bottom">
      <el-button>按钮</el-button>
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
  },
}
/**
 * 页面外层不设置height：100%;overflow: auto;-webkit-overflow-scrolling:touch; 
 * 不会因触发底部回弹，导致页面卡死
 */
</script>
<style scoped>
.page{
  background:green ;
  padding: 0 15px 1px;
  /* 不能设置，注意布局
  height:100%; 
  overflow: auto; 
  -webkit-overflow-scrolling: touch;  */
}
.scroll-w{
  padding:0 20px;
  margin-bottom:80px;
  background: pink;
}
p{
  line-height:22px;
  font-size:12px;
}
.li{
  line-height:22px;
}
.bottom{
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
</style>
