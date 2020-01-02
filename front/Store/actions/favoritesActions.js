import axios from "axios";

const setFavorites = favorites => dispatch =>
  dispatch({ type: "SET_FAVORITES", favorites });

const fetchFavorites = () =>
  axios
    .get("api/favorites/fetchFavorites")
    .then(favorites => console.log(favorites.data))//setFavorites(favorites));

export const addFavorite = coinObj => dispatch =>
  axios.post("api/favorites/addFavorite/", coinObj).then(fetchFavorites());
//.then(answ => console.log(answ.data));

export const deleteFavorite = coinName => dispatch =>
  axios
    .delete("api/favorites/deleteFavorite", coinName)
    .then(answ => console.log(answ.data));
