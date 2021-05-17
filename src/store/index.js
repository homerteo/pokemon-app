import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
  },
  getters: {
    getFavorites: (state) => state.favorites,
  },
  mutations: {
    setFavorite(state, value) {
      state.favorites = value;
    },
  },
  actions: {
    addFavorite: function ({ commit, state }, payload) {
      const favoriteCopy = [...state.favorites];
      favoriteCopy.push(payload);
      commit("setFavorite", favoriteCopy);
    },
    removeFavorite: function ({ commit, state }, payload) {
      const favoriteCopy = [...state.favorites];
      const index = favoriteCopy.findIndex((f) => f.name === payload.name);
      favoriteCopy.splice(index, 1);
      commit("setFavorite", favoriteCopy);
    },
  },
});
