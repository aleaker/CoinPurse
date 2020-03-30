import React, { useEffect } from "react";

export default function singleCoin({
  coin,
  followingArr,
  handleAddFavorite,
  handleDeletFavorite,
  icon,
  priceUsd,
  changePercent24Hr,
  marketCapUsd
}) {
  // useEffect(()=>{

  //   },[])

  return (
    <div value={coin.name} className="singleCoinContainer">
      <div className="singleCoinUpperRow">
        <img src={icon} className="singleCoinIcon" />
        <div className="singleCoinNameAndSymbolBox">
          <p className="singleCoinSymbol">{coin.symbol}</p>
          <p className="singleCoinName">{coin.name}</p>
        </div>
        
          <p className="singleCoinPrice">$ {priceUsd}</p>
          <p className={changePercent24Hr >= 0 ? "greenPercent" : "redPercent"}>
            {changePercent24Hr} %
          </p>
      
        <p className="singleCoinMarketCap">$ {marketCapUsd}B</p>
      </div>
      <div className="singleCoinLowerRow">
        <button className="singleCoinAdd">Add</button>
        {followingArr.includes(coin.symbol) ? (
          <button
            onClick={event => handleDeletFavorite(event)}
            value={coin.name}
            className="singleCoinUnfollow"
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={event => handleAddFavorite(event)}
            value={[coin.name, coin.symbol, coin.id]}
            className="singleCoinFollow"
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
}
