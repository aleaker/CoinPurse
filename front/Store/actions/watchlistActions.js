import axios from "axios";

export const setMyWatchlist = (watched) => (dispatch) =>
  dispatch({ type: "SET_MYWATCHLIST", watched });

export const fetchMyWatchlist = async (following, setWatched) => {
	//console.log(following)
  if (following.length) {
    let watchedCoinObjs = await axios.get(
      `https://api.coincap.io/v2/assets?ids=${following.toString()}`
	);
    setWatched(watchedCoinObjs.data.data);
  }else{
	setWatched(["none"])
  }
};

// export const fetchMyWatchlist = following => dispatch => {
//   let coinArr = [];
//   following.map(coin => coinArr.push(coin.coinId));
//   following.length
//     ? axios
//         .get(`https://api.coincap.io/v2/assets?ids=${coinArr.toString()}`)
//         .then(res => res.data.data)
//         .then(watched => dispatch(setMyWatchlist(watched)))
//     : setMyWatchlist([]);
// };

// export const deleteWatchlist = watched => dispatch =>
// let
