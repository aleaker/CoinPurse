import React, { useEffect, useState, useLayoutEffect } from "react";
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
    dispatch(fetchFavorites()).then(({ favorites }) => {
      following.length
        ? dispatch(fetchMyWatchlist(following))
        : dispatch(fetchMyWatchlist(favorites));
    });

    // const reloader = setInterval(() => dispatch(fetchMyWatchlist(following)), 10000);

    // return () => clearInterval(reloader);
  }, []);

  const handleDeletFavorite = event => {
    event.preventDefault();
    console.log(event.target);
    dispatch(deleteFavorite(event.target.value));
    let newWatchlist = watched.filter(
      element => element.name != event.target.value
    );
    dispatch(setMyWatchlist(newWatchlist));
  };

  return (
    <div>
      <div className="homeUpperBox"></div>
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
