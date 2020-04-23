import axios from "axios";

// export const test= slug =>
//   axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?slug=${slug}`).then(res=>console.log(res.data.logo))
//    ;

export const setFavorites = (favorites) => (dispatch) =>
  dispatch({ type: "SET_FAVORITES", favorites });

export const fetchFavorites = () => async (dispatch) => {
  let favObj = await axios.get("api/favorites/fetchFavorites");
  let favArr = [];
  favObj.data.map((fav) => favArr.push(fav.coinId));
  dispatch(setFavorites(favArr));
};

export const addFavorite = (coinId) => (dispatch) => {
  axios.post("api/favorites/addFavorite/", { coinId }).then((answ) => {
    answ.status == 201 ? dispatch(fetchFavorites()) : console.log(answ.data);
  });
};

export const deleteFavorite = (coinId) => (dispatch) => {
  axios
    .delete("api/favorites/deleteFavorite", { data: { coinId } })
    .then((answ) =>
      answ.status == 204
        ? dispatch(fetchFavorites())
        : console.log("Error on delete")
    );
};
