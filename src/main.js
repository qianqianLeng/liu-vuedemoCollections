// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import "../src/assets/fonts/iconfont.css";
import "../static/css/common.css";
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }
import Navigation from 'vue-navigation'

// Vue.use(Router)
Vue.use(ElementUI)
Vue.prototype.htmlTitle = '你们'

var router =  new Router({
  routes
})

Vue.use(Navigation, {router})
Vue.use(Router)

router.beforeEach((to, from, next) => { 
  if (to.meta.title) { 
    document.title = to.meta.title;
  }
  next();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
