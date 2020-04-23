import axios from "axios";

export const setCoins = coins => dispatch =>
  dispatch({ type: "SET_COINS", coins });

export const setSearched = searched => dispatch =>
  dispatch({ type: "SET_SEARCHED", searched });

export const fetchCoins = wanted => dispatch => {
  (wanted
    ? axios.get(`https://api.coincap.io/v2/assets?ids=${wanted.join(',')}`)
    : axios
        .get("https://api.coincap.io/v2/assets")
        )
        .then(res => res.data.data)
        .then(coins => dispatch(setCoins(coins)));
};

export const fetchSearchedCoins = wanted => dispatch => {
  axios
    .get(`https://api.coincap.io/v2/assets?ids=${wanted}`)
    .then(res => res.data.data)
    .then(searched => dispatch(setSearched(searched)));
};
