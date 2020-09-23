<template>
  <div>
    <!-- 用vue的更简单，注意  ref="mescroll"不能v-if进行判断，否则找不到插入dom的节点，注意page.size 太大，会直接 出现暂无数据 -->
    <div class="top">
    我是顶部区域，我高50
    </div>
    <mescroll-vue ref="mescroll" :up="mescrollUp">
			<ul class="me-ul">
        <li v-for="(item,index) in dataList" :key="index">
          {{item}}
        </li>  
      </ul>        
    </mescroll-vue>
    <div class="bottom">
    我是底部区域，我高150
    </div>
  </div>  
</template>

<script>
 import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  data () {
    return {
      time:0,//time为2拼接数组为[]
      mescroll: null, // mescroll实例对象
      mescrollUp: { // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        isBounce: false,//iosapp中回弹后卡顿，1.3.0以上默认让回弹
        //以下是一些常用的配置,当然不写也可以的.
				page: {
					num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
					size: 10 //每页数据条数,默认10
				},
        htmlNodata: '<p class="upwarp-nodata">-- 我是有底线的 --</p>',
				noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
      },
      dataList: [] // 列表数据
    }
  },
  components: {
    MescrollVue // 注册mescroll组件
  },
  methods:{
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      setTimeout(()=>{
        this.time +=1;
        let arr = [1,2,3,4,5,6,7,8,9,10]
        if(this.time === 3){
          arr = [];
        }
        console.log('拼接数组',this.time,arr)
        this.dataList = this.dataList.concat(arr)
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(arr.length)
        })
      },2000)
    }
  },
}
</script>
<style scoped>
*{
  margin:0;padding:0;
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
