import axios from "axios";

export const setCoins = coins => dispatch =>
  dispatch({ type: "SET_COINS", coins });

export const setSearched = searched => dispatch =>
  dispatch({ type: "SET_SEARCHED", searched });

export const fetchCoins = wanted => async(dispatch) => {
	const coins = await (wanted ? 
		axios.get(`https://api.coincap.io/v2/assets?ids=${wanted.join(',')}`)
		:
		axios.get("https://api.coincap.io/v2/assets")).data.data;
	dispatch(setCoins(coins));
};

export const fetchSearchedCoins = wanted => async(dispatch) => {
  const searchedCoins = await (await axios.get(`https://api.coincap.io/v2/assets?ids=${wanted}`)).data.data;
	dispatch(setSearched(searchedCoins));
};
