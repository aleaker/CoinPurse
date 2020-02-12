import axios from "axios";

export const setCoins = coins => dispatch =>
  dispatch({  type: 'FETCH_COINS',
  coins});

export const fetchCoins = ()=>dispatch=>{
    //si recibe un parametro entonces busca por id usando el parametro, sino busca todos los assets
    axios.get('https://api.coincap.io/v2/assets')
    .then(res=>res.data.data)
    .then(coins=>dispatch(setCoins(coins)))
}

export const fetchSearchedCoins = (wanted) => dispatch => {
  console.log(wanted, "soy wanted amego");
  axios
    .get(`https://api.coincap.io/v2/assets?ids=${wanted}`)
    .then(res => res.data.data)
    .then(searched => dispatch(setCoins(searched)));
};
