import axios from 'axios';

export const subscription = {
    state: () => ({
        isSubscribed: true
    }),
    mutations: {
        SET_SUBSCRIPTION_DATA (state, isSubscribed) {
            state.isSubscribed = isSubscribed
        },
    },
    actions: {
        async getSubscriptionStatus ({ commit }) {
            const data  = await axios.get('/subscription/check/')
                                .then(response => response.data.isSubscribed);
            commit('SET_SUBSCRIPTION_DATA', data);
            return data;
        },
    }, 
    getters: {
        isSubscribed: state => state.isSubscribed
    }
  }