import axios from "axios";

export const setMyWatchlist = watched => dispatch =>
  dispatch({ type: "SET_MYWATCHLIST", watched });

export const fetchMyWatchlist = (following,setWatched) => {
    let coinArr = [];
    following.map((coin) => coinArr.push(coin.coinId));
    if (following.length) {
      axios
        .get(`https://api.coincap.io/v2/assets?ids=${coinArr.toString()}`)
        .then((res) => res.data.data)
        .then((watched) => setWatched(watched));
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
