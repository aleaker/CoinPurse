import React, { useEffect } from "react";

export default function singleCoin({
  coin,
  followingArr,
  handleAddFavorite,
  handleDeletFavorite,
  icon
}) {
  // useEffect(()=>{

  //   },[])

  return (
    <div value={coin.name} className="singleCoinContainer">

      <img src={icon} />
      <p>{coin.name}</p>
      <p>{coin.symbol}</p>
      <p>$ {parseFloat(coin.priceUsd).toFixed(2)}</p>
      <p
        className={coin.changePercent24Hr >= 0 ? "greenPercent" : "redPercent"}
      >
        {parseFloat(coin.changePercent24Hr).toFixed(2)} %
      </p>
      <p>$ {parseFloat(coin.marketCapUsd / 1000000000).toFixed(2)}B</p>
      <button>Add</button>
      {followingArr.includes(coin.symbol) ? (
        <button onClick={event => handleDeletFavorite(event)} value={coin.name}>
          Unfollow
        </button>
      ) : (
        <button
          onClick={event => handleAddFavorite(event)}
          value={[coin.name, coin.symbol, coin.id]}
        >
          Follow
        </button>
      )}
    </div>
  );
}
