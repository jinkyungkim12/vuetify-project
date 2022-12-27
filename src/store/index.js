import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      {id: 1, name: "kim", email:"kim@naver.com", password: "1234"},
      {id: 2, name: "lee", email:"lee@naver.com", password: "1234"},
    ],
    isLogin: false,
    isLoginError: false
  },
  getters: {
  },
  mutations: {
    // 로그인 성공시
    loginSuccess(state, payload){
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    // 로그인 실패 시 
    loginError(state){
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state){
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
    // 로그인 시도
    login({ commit }, loginObj) {
      axios.post("https://reqres.in/api/login", loginObj)// 파라미터 (body)
            .then(res => {
              // 성공시 token:블라블라(실제로는 user_id 값을 받아옴)
              // 토큰을 헤더에 포함시켜서 유저 정보를 요청
              console.log(res)
              let token = res.data.token
              let config = {
                headers: {
                  "access-token": token
                }
              }

              axios.get("https://reqres.in/api/user2", config)
                .then(response => {
                  
                  let userInfo = {
                    color: response.data.data.color,
                    id: response.data.data.id,
                    name: response.data.data.name,
                    pantone_value: response.data.data.pantone_value,
                    year: response.data.data.year
                  }
                  commit('loginSuccess', userInfo)
                })
                .catch(() => {
                  alert('이메일과 비밀번호를 확인하세요!')
                })
            })
            .catch(() => {
              alert('이메일과 비밀번호를 확인하세요!')
            });
    },
    logout({ commit }) {
      commit("logout")
      router.push({ name: "home"})
    }
  },
  modules: {
  }
})
