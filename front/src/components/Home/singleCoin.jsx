import React, {useEffect} from "react";

export default function singleCoin({
  coin,
  followingArr,
  handleAddFavorite,
  handleDeletFavorite
}) {


  // useEffect(()=>{

  //   },[])

  return (
    <div  value={coin.name} className="singleCoinContainer">
      <p>{coin.name}</p>
      <p>$ {parseFloat(coin.priceUsd).toFixed(2)}</p>
      <p>{parseFloat(coin.changePercent24Hr).toFixed(2)} %</p>
      <p>$ {parseFloat(coin.marketCapUsd).toFixed(2)}</p>
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

      <p>------------------------------------------------------------------</p>
    </div>
  );
}
