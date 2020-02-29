import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favs: [
      {
        name: "Max",
        breed: "husky",
        img: "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg"
      },
      {
        name: "Rusty",
        breed: "shiba",
        img: "https://images.dog.ceo/breeds/shiba/shiba-13.jpg"
      },
      {
        name: "Rocco",
        breed: "boxer",
        img: "https://images.dog.ceo/breeds/boxer/n02108089_14112.jpg"
      }
    ]
  },
  mutations: {
    addToFavs(state, payload) {
      if (!state.favs.includes(payload)) {
        state.favs.push(payload);
      }
    },
    removeFromFavs(state, payload) {
      state.favs.splice(state.favs.indexOf(payload), 1);
    },
    clearFavs(state) {
      state.favs = [];
    }
  },
  actions: {
    addToFavs({ commit }, payload) {
      commit("addToFavs", payload);
    },
    removeFromFavs({ commit }, payload) {
      commit("removeFromFavs", payload);
    },
    clearFavs({ commit }) {
      commit("clearFavs");
    }
  }
});
