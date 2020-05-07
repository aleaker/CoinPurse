import React, { useEffect, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMyWatchlist,
  setMyWatchlist,
} from "../../../Store/actions/watchlistActions";
import WatchedCoin from "./watchedCoin";
import {
  fetchFavorites,
  deleteFavorite,
} from "../../../Store/actions/favoritesActions";
import axios from "axios";

export default function Watchlist() {
  const following = useSelector((state) => state.following);
  const [watched, setWatched] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMyWatchlist(following, setWatched);

    // const reloader = setInterval(() => dispatch(fetchMyWatchlist(following)), 10000);
    // return () => clearInterval(reloader);
  }, [following]);

  const handleDeletFavorite = (event) => {
    event.preventDefault();
    dispatch(deleteFavorite(event.target.value));
    let newWatchlist = watched.filter(
      (element) => element.id != event.target.value
    );
    setWatched(newWatchlist);
  };

  return (
    <div className="watchlistContainer">
    <div className="watchlistUpperBox"></div>
    <h2>Section under development</h2>
      {watched.length ? (
        watched.map((coin) => (
          <WatchedCoin
            key={coin.symbol}
            coin={coin}
            handleDeletFavorite={handleDeletFavorite}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
