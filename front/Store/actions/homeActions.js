import axios from "axios";

export const fetchCoins = ()=>dispatch=>{
    axios.get('https://api.coincap.io/v2/assets?limit=30')
    .then(res=>res.data)
    .then(coins=>dispatch({
        type: 'FETCH_COINS',
        coins
    }))
}