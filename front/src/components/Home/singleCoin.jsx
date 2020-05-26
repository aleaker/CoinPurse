import React, { useEffect } from "react";
import StorageDropDown from "./storageDropDown";

export default function singleCoin({
  coin,
  following,
  handleAddFavorite,
  handleDeletFavorite,
  handleOpenStorageDD,
  handelOneLessOrCancel,
  icon,
  priceUsd,
  changePercent24Hr,
  marketCapUsd,
  showStorageDD,
  handleChange,
  handleAddStorage,
  handleOneMore,
  storageObj,
  storageObjArr,
  handleDeleteFromArray,
  errorMessage,
  handleResetError,
  storagesArr,
}) {
  // useEffect(()=>{

  //   },[])

  return (
    <div value={coin.name} className="singleCoinContainer" key={coin.symbol}>
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
      {showStorageDD == coin.id ? (
        <div>
        <StorageDropDown 
        //storageVersion={"desktop"}
          errorMessage={errorMessage}
          handleDeleteFromArray={handleDeleteFromArray}
          storageObjArr={storageObjArr}
          storageObj={storageObj}
          coinId={coin.id}
          handleOneMore={handleOneMore}
          handelOneLessOrCancel={handelOneLessOrCancel}
          handleAddStorage={handleAddStorage}
          handleChange={handleChange}
          handleResetError={handleResetError}
        />
        <div id="singleCoinEmptyBox"></div>
        </div>
      ) : (
        <div className="singleCoinLowerRow">
          <button
            onClick={(event) => handleOpenStorageDD(event)}
            value={coin.id}
            className={
              storagesArr && storagesArr.includes(coin.id)
                ? "owned singleCoinAdd"
                : "singleCoinAdd"
            }
          >
            Add
          </button>
          {following.includes(coin.id) ? (
            <button
              onClick={(event) => handleDeletFavorite(event)}
              value={coin.id}
              className="singleCoinUnfollow"
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={(event) => handleAddFavorite(event)}
              value={coin.id}
              className="singleCoinFollow"
            >
              Follow
            </button>
          )}
        </div>
      )}
    </div>
  );
}
