import axios from "axios";

export const setFavorites = favorites => dispatch =>
  dispatch({ type: "SET_FAVORITES", favorites });

export const fetchFavorites = () => dispatch =>
  axios
    .get("api/favorites/fetchFavorites")
    .then(res => res.data)
    .then(favorites => dispatch(setFavorites(favorites)));

export const addFavorite = coinObj => dispatch =>
  axios.post("api/favorites/addFavorite/", coinObj).then(answ => {
    answ.status == 201 ? dispatch(fetchFavorites()) : console.log(answ.data);
  });

export const deleteFavorite = coinName => dispatch => {
  console.log(coinName);
  axios
    .delete("api/favorites/deleteFavorite", { data: { coinName } })
    .then(answ=>answ.status== 204 ?  dispatch(fetchFavorites()):console.log("Error on delete"));
};
