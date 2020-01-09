import React from "react";

export default function WatchedCoin({ coin,handleDeletFavorite }) {

  return (
    <div>
      <p>{coin.name}</p>
      <p>${coin.priceUsd}</p>
      <button onClick={event => handleDeletFavorite(event)} value={coin.name}>
        Unfollow
      </button>
    </div>
  );
}
