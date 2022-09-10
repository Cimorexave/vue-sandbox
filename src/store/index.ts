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
    removeTask: (state, id) => state.tasks.filter(task => task.id !== id),
  },
  actions: {
  },
  modules: {
  }
})

export default store
