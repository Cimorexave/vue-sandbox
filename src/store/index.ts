import TaskInterface from '@/types/task.interface'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    tasks: [{id: 0, description: "", isDone: false}]
  },
  getters: {
  },
  mutations: {
    //synchronous
    addTask: (state, payload) => state.tasks.push(payload),
    removeTask: (state, payload) => state.tasks.filter(task => task.id !== payload.id),
  },
  actions: {
  },
  modules: {
  }
})

export default store
