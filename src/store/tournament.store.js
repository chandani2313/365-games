// import axios from 'axios';
import { setTournament, getTournament } from '../StorageFactory';

export const tournament = {
    state: () => ({
        tournament: getTournament()
    }),
    mutations: {
        SET_TOURNAMENT_DATA (state, tournament) {
            setTournament(tournament)
            state.tournament = tournament
        },
    },
    actions: {
        tournament ({ commit }, data) {
            console.log("data", data);
            if (data) commit('SET_TOURNAMENT_DATA', data);
            return data;
        },
    },
    getters: {
        selectedTournament: state => state.tournament
    }
  }