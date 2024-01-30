import { createStore } from 'vuex'
import popoldata from "@/components/PoPol.json"
import aboutMe from "@/components/AboutMe.json"
import useTool from "@/components/useTool.json"

export default createStore({
  state: {
    popoldata:popoldata,
    aboutMe:aboutMe,
    useTool:useTool
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
