import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMyWatchlist,
  setMyWatchlist
} from "../../../Store/actions/watchlistActions";
import WatchedCoin from "./watchedCoin";
import {
  fetchFavorites,
  deleteFavorite
} from "../../../Store/actions/favoritesActions";

export default function Watchlist() {
  const following = useSelector(state => state.following);
  const watched = useSelector(state => state.watched);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
    following.length
      ? dispatch(fetchMyWatchlist(following))
      : dispatch(setMyWatchlist([]));
    console.log("aca", following.join(",").length);
  }, [following.join(",")]);

  const handleDeletFavorite = event => {
    event.preventDefault();
    dispatch(deleteFavorite(event.target.value));
  };

  return (
    <div>
      {watched.length ? (
        watched.map(coin => (
          <WatchedCoin
            key={coin.symbol}
            coin={coin}
            handleDeletFavorite={handleDeletFavorite}
          />
        ))
      ) : (
        <p>ta cargando pa</p>
      )}
    </div>
  );
}
