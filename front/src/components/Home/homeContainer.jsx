import React, { useState, useEffect } from "react";
import { fetchCoins } from "../../../Store/actions/homeActions";
import SingleCoin from "./singleCoin";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../../Store/actions/favoritesActions";

export default function home() {
  const dispatch = useDispatch();
  const coins = useSelector(state => state.coins);

  useEffect(() => {
    dispatch(fetchCoins());
    const reloader = setInterval(() => dispatch(fetchCoins()), 10000);
    

    return () => clearInterval(reloader);
  }, []);

  const handleAddFavorite = (event)=>{
    event.preventDefault();
    let coinArr = event.target.value.split(",")
    let coinObj = {name:coinArr[0],symbol:coinArr[1]}
    dispatch(addFavorite(coinObj))
  }

  return (
    <div>{ coins.length ? <SingleCoin coins={coins} handleAddFavorite={handleAddFavorite}/> : <p>HODL a SEC, loading...</p>}</div>
  );
}
