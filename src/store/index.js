import { createStore } from 'vuex'
import ModuleUser from './user'
import ModuleFile from './file'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: ModuleUser,
    file: ModuleFile,
  }
})
