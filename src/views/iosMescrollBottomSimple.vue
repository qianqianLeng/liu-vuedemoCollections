<template>
  <div class="page">
    <div class="top">
    我是顶部区域，我高50
    </div>
    <div id="mescroll" class="mescroll"> 
      <ul class="me-ul">
        <li v-for="(item,index) in dataList" :key="index">
          {{item}}
        </li>  
      </ul>   
    </div>  
    <div class="bottom">
    我是底部区域，我高150
    </div>
  </div>  
</template>

<script>
import MeScroll from 'mescroll.js';
import 'mescroll.js/mescroll.min.css';
export default {
  data () {
    return {
      time:0,//time为2拼接数组为[]
      mescroll: null, // mescroll实例对象
      dataList: [] // 列表数据
    }
  },
  methods:{
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      console.log('上拉回调',page)
      setTimeout(()=>{
        this.time +=1;
        let arr = [1,2,3,4,5,6,7,8,9,10]
        if(this.time == 3){
          arr = [11,12];
        }
        if(this.time >= 4){
          arr = [];
        }
        this.dataList = this.dataList.concat(arr)
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          this.mescroll.endSuccess(arr.length)
        })
      },2000)
    }
  },
  mounted(){
    this.mescroll = new MeScroll("mescroll", { //第一个参数"mescroll"对应上面布局结构div的id (1.3.5版本支持传入dom对象)
      up: {
        callback: this.upCallback, //上拉加载的回调
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- 没有更多数据了 --</p>',
        noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
      }
    });
  }
}
</script>
<style scoped>
*{
  margin:0;padding:0;
}
.page{
  height:100%;
}
.top{
  position: fixed;
  width:100%;
  box-sizing: border-box;
  top: 0;
  left:0;
  background:gold;
  line-height: 50px;

}
.bottom{
  position: fixed;
  width:100%;
  box-sizing: border-box;
  bottom: 0;
  left:0;
  background:purple;
  line-height: 150px;
}
.mescroll {
  position: fixed;
  top: 50px;
  bottom: 150px;
  height: auto;
}
.me-ul li{
  text-align: center;
  font-size: 20px;
}





</style>
