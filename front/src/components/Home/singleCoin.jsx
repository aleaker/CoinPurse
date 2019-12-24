import React from "react";

export default function singleCoin({ coins }) {
  return (
    <div>
      {coins.map(coin => (
        <div key={coin.symbol} className="singleCoinContainer">
          <p>{coin.name}</p>
          <p>{coin.priceUsd}</p>
          <p>{coin.changePercent24Hr}</p>
          <button>Add</button>
          <button>Follow</button>
          <p>------------------------------------------------------------------</p>
        </div>
      ))}
    </div>
  );
}
