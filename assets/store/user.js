import { defineStore } from 'pinia';
import axios from '../plugins/axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async fetchUser() {
      const { data } = await axios.get('/api/user');
      this.user = data;
    },
  },
});
