import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apikey: "1bef0b5174e8175215ccac3c3f3ac5b7",
    baseUrl: "https://api.themoviedb.org/3/discover/movie?",
    urlRequestImages: "https://image.tmdb.org/t/p/w342",
    baseUrlQuery: "https://api.themoviedb.org/3/search/movie?"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getMovies(state){
      return `${state.baseUrl}api_key=${state.apikey}`
    },
    getUrlMovie(state) {
      return state.urlRequestImages
    },
    getQuery(state){
      return `${state.baseUrlQuery}api_key=${state.apikey}&query=`
    }
  }
})
