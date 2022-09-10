import TaskInterface from '@/types/task.interface'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    tasks: [{id: 0, description: "", isDone: false}]
  },
  getters: {
    getStateFromStore: state => state.tasks
  },
  mutations: {
    //synchronous
    addTask: (state, payload) => state.tasks.push(payload),
    removeTask: (state, id) => state.tasks.filter(task => task.id !== id),
    checkTaskDone: (state, id) => state.tasks.filter(task => task.id === id)[0].isDone = !state.tasks.filter(task => task.id === id)[0].isDone,
  },
  actions: {
  },
  modules: {
  }
})

export default store
