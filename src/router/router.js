import Nobounce1Simple from '@/views/nobounce1-simple.vue'
import InoBounce from '@/views/inobounce.vue'

import IosMescrollBottom from '@/views/iosMescrollBottom.vue'
import IosMescrollBottomSimple from '@/views/iosMescrollBottomSimple.vue'

import drawnSnake from '@/views/drawnSnake.vue'


const routes = [
  {
    component: Nobounce1Simple,
    meta:'ios系统回弹问题处理--布局',
    path: "/",
  },  {
    component: InoBounce,
    meta:'ios系统回弹问题处理--插件inoBounce',
    path: "/inoBounce",
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