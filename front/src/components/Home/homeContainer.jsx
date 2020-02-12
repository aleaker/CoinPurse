import React, { useState, useEffect } from "react";
import { fetchCoins } from "../../../Store/actions/coinsActions";
import SingleCoin from "./singleCoin";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
  fetchFavorites
} from "../../../Store/actions/favoritesActions";
import { setMyWatchlist } from "../../../Store/actions/watchlistActions";

export default function home() {
  const dispatch = useDispatch();
  let coins = useSelector(state => state.coins);

  let followingArr = useSelector(state => state.following).map(
    fav => fav.symbol
  );

  useEffect(() => {
    dispatch(fetchCoins());
    dispatch(fetchFavorites());
    dispatch(setMyWatchlist([]));

    const reloader = setInterval(() => {

      dispatch(fetchCoins());
    }, 10000);
    return () => clearInterval(reloader);
  }, []);

  const handleAddFavorite = event => {
    event.preventDefault();
    let coinArr = event.target.value.split(",");
    console.log(coinArr);
    let coinObj = { name: coinArr[0], symbol: coinArr[1], coinId: coinArr[2] };
    dispatch(addFavorite(coinObj));
  };

  const handleDeletFavorite = event => {
    event.preventDefault();
    dispatch(deleteFavorite(event.target.value));
  };

  return (
    <div>
      {coins.length ? (
        coins.map(coin => (
          <SingleCoin
            coin={coin}
            key={coin.symbol}
            followingArr={followingArr}
            handleAddFavorite={handleAddFavorite}
            handleDeletFavorite={handleDeletFavorite}
          />
        ))
      ) : (
        <p>HODL a SEC, loading...</p>
      )}
    </div>
  );
}
