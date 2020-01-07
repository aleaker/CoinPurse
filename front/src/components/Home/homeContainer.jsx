import React, { useState, useEffect } from "react";
import { fetchCoins } from "../../../Store/actions/homeActions";
import SingleCoin from "./singleCoin";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
  fetchFavorites
} from "../../../Store/actions/favoritesActions";

export default function home() {
  const dispatch = useDispatch();
  let coins = useSelector(state => state.coins);
  let followingArr = useSelector(state => state.following).map(
    fav => fav.symbol
  );

  useEffect(() => {
    dispatch(fetchCoins());
    dispatch(fetchFavorites());
    const reloader = setInterval(() => dispatch(fetchCoins()), 10000);

    return () => clearInterval(reloader);
  }, []);

  const handleAddFavorite = event => {
    event.preventDefault();
    let coinArr = event.target.value.split(",");
    let coinObj = { name: coinArr[0], symbol: coinArr[1] };
    dispatch(addFavorite(coinObj));
  };

  const handleDeletFavorite = event => {
    event.preventDefault();
    dispatch(deleteFavorite(event.target.value))
  };

  return (
    <div>
      {coins.length ? (
        <SingleCoin
          coins={coins}
          followingArr={followingArr}
          handleAddFavorite={handleAddFavorite}
          handleDeletFavorite={handleDeletFavorite}
        />
      ) : (
        <p>HODL a SEC, loading...</p>
      )}
    </div>
  );
}
