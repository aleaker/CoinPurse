import React from "react";

export default function singleCoin({ coins, followingArr, handleAddFavorite,handleDeletFavorite }) {
  return (
    <div>
      {coins.map(coin => (
        <div
          key={coin.symbol}
          value={coin.name}
          className="singleCoinContainer"
        >
          <p>{coin.name}</p>
          <p>{coin.priceUsd}</p>
          <p>{coin.changePercent24Hr}</p>
          <button>Add</button>
          {followingArr.includes(coin.symbol) ? (
            <button
              onClick={event => handleDeletFavorite(event)}
              value={coin.name}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={event => handleAddFavorite(event)}
              value={[coin.name, coin.symbol]}
            >
              Follow
            </button>
          )}
          <p>
            ------------------------------------------------------------------
          </p>
        </div>
      ))}
    </div>
  );
}
