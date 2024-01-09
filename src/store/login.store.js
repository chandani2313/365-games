import axios from 'axios';
import { setUser, getUser, removeUser } from '../StorageFactory';

export default {
    state: () => ({
        user: getUser()
    }),
    mutations: {
        SET_USER_DATA (state, user) {
            state.user = user;
        },
        LOGIN (state, user) {
            state.user = user;
            setUser(user);
            axios.defaults.headers.common['Authorization'] = `JWT ${ user?.token }`;
        },
        LOGOUT () {
            removeUser();
            location.reload();
        },
    },
    actions: {
        async login ({ commit }, body) {
            const { data } = await axios.post('/user/login', body);
            commit('SET_USER_DATA', data);
        },
        logout ({ commit }) {
            commit('LOGOUT');
        },
    },
    getters: {
        loggedIn: state => !!state.user,
        user: state => state.user
    }
  }
