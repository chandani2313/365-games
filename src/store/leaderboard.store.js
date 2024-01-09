// import axios from 'axios';
import { setLeaderboard, getLeaderboard } from '../StorageFactory';

export const leaderboard = {
    state: () => ({
        leaderboard: getLeaderboard()
    }),
    mutations: {
        SET_LEADERBOARD_DATA (state, leaderboard) {
            setLeaderboard(leaderboard)
            state.leaderboard = leaderboard
        },
    },
    actions: {
         leaderboard ({ commit }, data) {
            if (data) commit('SET_LEADERBOARD_DATA', data);
            return data;
        },
    },
    getters: {
        selectedLeaderboard: state => state.leaderboard
    }
  }