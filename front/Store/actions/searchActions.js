import axios from "axios";

export const setSearched = searched => dispatch =>
  dispatch({ type: "SET_SEARCHED", searched });

export const fetchSearchedCoins = (wanted) => dispatch => {
  console.log(wanted, "soy wanted amego");
  axios
    .get(`https://api.coincap.io/v2/assets?ids=${wanted}`)
    .then(res => res.data)
    .then(searched => dispatch(setSearched(searched)));
};
