import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:100,
  todos: [
    { id: 1, text: '水果类', done: true },
    { id: 2, text: '苹果', done: true },
    { id: 3, text: '苹果', done: false}
  ]


}

const getters = {
  getCount: state => {
    return state.count+1
  },
  doneTodos: state => {
    return state.todos.filter ((item)=>{
      return item.done
    })
  },
  doneTodosCount: (state,getters) => {
    return getters.length
  }
}

const mutations = {
  add: (state,n) => {
    state.count = state.count+n
  },
  reduce: (state,n) => {
    state.count = state.count-n;
  }  
}

const actions = {
  addFun:(context,n) => {
    context.commit('add',n)
  },
  reduceFun:(context,n) => {
    context.commit('reduce',n)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
