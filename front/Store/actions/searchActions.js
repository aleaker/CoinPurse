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
