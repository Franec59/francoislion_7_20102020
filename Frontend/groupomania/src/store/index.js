import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

export default createStore({

  state: {
    
  },
  
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
      }
    })
  ],
  
  mutations: {
    
    SET_USER(state, usernameRes) {
        state.username = usernameRes
    },
    SET_ADMIN (state, isAdminRes) {
      state.isAdmin = isAdminRes
    },
    

  },
  actions: {
    
  },
  modules: {
    username: "",
    isAdmin: ""

  },
  /*
  getters: {
    setUser (state) {
      return state.username
    },
    setAdmin (state) {
      return state.isAdmin
    },
  }
*/
})
