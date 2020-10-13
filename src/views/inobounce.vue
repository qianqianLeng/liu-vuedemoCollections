<template>  
  <div class="page" @scroll="onScroll">
    <div class="scroll-w">
      <p class="pp">
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
        <li v-for="(intem,index) in 20" :key="index">
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
/**
 * bug场景：拖动底部条向上拉，橡皮筋把底部按钮盖住，偶尔出现底部页面卡死
 */
/**
 * bug原因：
 * 页面中设置height:100%;overflow: auto; 就会出现
 * -webkit-overflow-scrolling: touch; 加它不好用
 */
/**
 * 解决办法
 * 使用步骤
 * 安装 npm inobounce install --save
 * 引用 import inobounce from 'inobounce'
 * created中  let u = navigator.userAgent
              if (u.indexOf('iPhone') > -1) {
                inobounce.enable()
              }
    beforeDestroy() {
      inobounce.disable()
    },
 */

// 安装 
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
.page{
  height:100%;
  background: purple;
  padding: 0 15px 1px;
  overflow: auto; 
  -webkit-overflow-scrolling: touch; 
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
