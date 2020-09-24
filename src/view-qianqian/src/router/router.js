import IosBounce from '@/views/iosBounce.vue'
import IosBounceFlow from '@/views/iosBounceFlow.vue'
import IosMescrollBottom from '@/views/iosMescrollBottom.vue'
import IosMescrollBottomSimple from '@/views/iosMescrollBottomSimple.vue'
import drawnSnake from '@/views/drawnSnake.vue'
const routes = [
  {
    component: IosBounceFlow,
    meta:'ios系统回弹问题--正常布局',
    path: "/bounceflow",
  },{
    component: IosBounce,
    meta:'ios系统回弹问题--插件',
    path: "/",
  },{
    component: IosMescrollBottom,
    meta:'ios系统Mescroll--底部bottom',
    path: "/iosMescrollBottom",
  },{
    component: IosMescrollBottomSimple,
    meta:'ios系统Mescroll--底部bottom-不是vue',
    path: "/iosMescrollBottomSimple",
  },{
    component: drawnSnake,
    meta:'蛇',
    path: "/drawnSnake",
  }
 
]

export default routes