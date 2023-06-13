import { createStore } from 'vuex';
import axios from '../plugins/axios';

// Create a new store instance.
export default createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      const { data } = await axios.get('/api/user');
      commit('setUser', data);
    },
  },
});
