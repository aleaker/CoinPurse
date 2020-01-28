import React from "react";

export default function WatchedCoin({ coin,handleDeletFavorite }) {

  return (
    <div>
      <p>{coin.name}</p>
      <p>$ {parseFloat(coin.priceUsd).toFixed(2)}</p>
      <button onClick={event => handleDeletFavorite(event)} value={coin.name}>
        Unfollow
      </button>
    </div>
  );
}
