import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import url from "./config/url";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        parlamentares: [],
    },
    mutations: {
        SET_PARLAMENTARES(state, parlamentares) {
            state.parlamentares = parlamentares
        }
    },
    actions: {
        async fetchData({ commit }) {
            await axios.get(url.parlamentares).then((response) => {
                if (response.status == 200) {
                    const parlamentares = response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar
                    commit("SET_PARLAMENTARES", parlamentares)
                }
            })
        }
    },
    getters: {
        parlamentares(state) {
            return state.parlamentares
        }
    }
})