import Vue from 'vue';
import Vuex from 'vuex';
import jwt from 'jwt-simple';
import utils from './config/utils'

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

Vue.use(Vuex);

export const store =  new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    userToken:'', 
    userId:''
  },
  mutations: {
    [LOGIN] (state) {
      state.pending = true;
    },
    [LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true;
      state.userToken = localStorage.getItem("token");
      var decoded = jwt.decode(token, utils.Secret); 
      state.userId = decoded._id;

      state.pending = false;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login({ commit }, token) {
      commit(LOGIN); // show spinner
      
        setTimeout(function() {
          localStorage.setItem("token", token);
          commit(LOGIN_SUCCESS);
          resolve();
        }, 1000);
     
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit(LOGOUT);
    }
  },
  methods: {
    ...Vuex.mapActions(['logout'])
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
     }, 
     userToken: state => {
       return state.userToken;
     }, 
     userId : state => {
       return state.userId;
     }
     }
});  