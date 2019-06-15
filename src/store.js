import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        orders: [],
        apiUrl: '',
        user: null,
        isAuthenticated: false,
        userOrders: [],
        coffees: [
            {
                name: 'Flat White',
                pricesmall: 4.50,
                pricelarge: 4.90,
                
            },
            {
                name: 'cappuccino',
                pricesmall: 4.50,
                pricelarge: 4.90,
            },
            {
                name: 'Long Black',
                pricesmall: 4.50,
                pricelarge: 4.90,
            },
        ],

        cartProducrs: [],
        currentProduct: {},
        showModal: false,
        showPopupCart: false,
    },
    mutations: {

        setOrders(state, payload) {
            state.orders = payload;
        },
       
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        ADD_PRODUCT: (state, product) => {
            state.cartProducrs.push(product);
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartproducts.splice(index, 1);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
          },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
          },
        SHOW_POPUP_CART: (state) => {
            state.showPopupCart = !state.showPopupCart;
          },
        
    },
    actions: {
        userLogin({ commit }, { email, password }) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                    router.push('/User');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                    alert("you are not allowed in!")
                });
        },
        userJoin({ commit }, { email, password }) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                    router.push('/User');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },
        userSignOut({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },
        addCoffee({ state }, payload) {
            firebase
                .database()
                .ref('users')
                .child(state.user.user.uid)
                .push(payload.coffee.label);
        },
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
          },
          removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
          },
          currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
          },
          showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
          },
          showOrHiddenPopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
          },
        },

    

    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        },
        getCoffees: state => state.coffees,
        getProductsInCart: state => state.cartProducts,
        getShowModal: state => state.showModal,
        getPopupCart: state => state.showPopupCart,
    },

});









