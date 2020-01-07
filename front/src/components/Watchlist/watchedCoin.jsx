import React from "react";

export default function WatchedCoin({coin}){
    return(
        <div >
        <p>{coin.name}</p>
        <p>${coin.priceUsd}</p>
        </div>
    )
};