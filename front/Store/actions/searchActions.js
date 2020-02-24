import {fetchCoins} from "./coinsActions";

export const setSearched = (searchedText, list) => dispatch => {
  let searched = [];
  list.map(word => {
    if (word.includes(searchedText)) searched.push(word);
  });
  //  searched.join(",");
  dispatch(fetchCoins(searched));
  dispatch({ type: "SET_SEARCHED", searched });
};

// export const fetchSearchedCoins = (wanted) => dispatch => {
//   console.log(wanted, "soy wanted amego");
//   axios
//     .get(`https://api.coincap.io/v2/assets?ids=${wanted}`)
//     .then(res => res.data)
//     .then(searched => dispatch(setSearched(searched)));
// };
