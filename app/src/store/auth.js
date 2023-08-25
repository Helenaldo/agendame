import { defineStore } from "pinia";
import { useMe } from "@/store/me";
import axios from "axios";


export const useAuth = defineStore('auth', {
  state: () => ({}),

  actions: {

    sanctum() {
      return axios.get('sanctum/csrf-cookie');
    },

    login(email, password) {
      return axios.post('api/login', {
        email, password
      })
    }
  },
  getters: {
    isLoggedIn() {
      const meStore = useMe()
      return !!meStore.user
    }
  }

});

