const setInLocalStorage = name => data => localStorage.setItem(name, JSON.stringify(data));
const getFromLocalStorage = name => () => JSON.parse(localStorage.getItem(name));
const removeFromLocalStorage = name => () => localStorage.removeItem(name);

const useLocalStorage = name => [
    setInLocalStorage(name),
    getFromLocalStorage(name),
    removeFromLocalStorage(name)
]
    


export const [ setUser, getUser, removeUser] = useLocalStorage('365-games-user');
export const [ setForgetPasswordToken, getForgetPasswordToken, removeForgetPasswordToken] = useLocalStorage('forgot-password-token');
export const [ setLeaderboard, getLeaderboard, removeLeaderboard] = useLocalStorage('leaderboard');
export const [ setTournament, getTournament, removeTournament] = useLocalStorage('tournament');
export const [ setCart, getCart, removeCart ] = useLocalStorage('cart');
