import React, { useState, useEffect } from "react";
import { fetchCoins } from "../../../Store/actions/homeActions";
import SingleCoin from "./singleCoin";
import { useDispatch, useSelector } from "react-redux";

export default function home() {
  const dispatch = useDispatch();
  const coins = useSelector(state => state.coins);

  useEffect(() => {
    dispatch(fetchCoins());
    const reloader = setInterval(() => dispatch(fetchCoins()), 10000);

    return () => clearInterval(reloader);
  }, []);

  return (
    <div>{coins ? <SingleCoin coins={coins} /> : "HODL a SEC, loading..."}</div>
  );
}
