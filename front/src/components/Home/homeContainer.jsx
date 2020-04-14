import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../../Store/actions/listActions";
import { setMyWatchlist } from "../../../Store/actions/watchlistActions";
import {
  fetchCoins,
  fetchSearchedCoins
} from "../../../Store/actions/coinsActions";
import {
  addFavorite,
  deleteFavorite,
  fetchFavorites
} from "../../../Store/actions/favoritesActions";
import SingleCoin from "./singleCoin";
import {addStorage,fetchStorages, deleteStorage} from "../../../Store/actions/storageActions"

//--------------geting icons---------------------------
function importAll(r) {
  let icons = {};
  r.keys().map((item, index) => {
    icons[item.replace("./", "")] = r(item);
  });
  return icons;
}
const icons = importAll(
  require.context(
    "../../../node_modules/cryptocurrency-icons/32@2x/icon/",
    false,
    /\.png$/
  )
);



export default function home() {
  const dispatch = useDispatch();
  let coins = useSelector(state => state.coins);
  let searched = useSelector(state => state.searched);
  let followingArr = useSelector(state => state.following).map(
    fav => fav.coinId
  );

  const[test,setTest]=useState(false)

  useEffect(() => {

    if (!followingArr.length) dispatch(fetchFavorites());
    if(!list.length)generateListForSearch();
    dispatch(fetchStorages())
    //list.length ? console.log("your list is" + list) : generateListForSearch();


   


    const reloader = setInterval(() => {
      dispatch(fetchCoins(searched));
    }, 10000);
    return () => clearInterval(reloader);
  }, [coins]);

  //----------- search bar function------------------
  const list = useSelector(state => state.list);
  const [haveList, setHaveList] = useState(false);

  const generateListForSearch = () => {
    const listForSearch = [];
    coins.map(coin => {
      listForSearch.push(coin.id, coin.symbol.toLowerCase());
    });
    dispatch(setList(listForSearch));
    //console.log(listForSearch, list);
  };

  //--------------event handlers-----------------------
  const handleAddFavorite = event => {
    event.preventDefault();
    dispatch(addFavorite(event.target.value));
  };

  const handleDeletFavorite = event => {
    event.preventDefault();
    dispatch(deleteFavorite(event.target.value));
  };

  const handleAdd=event => {
    event.preventDefault();
    console.log(event.target.value)
    setTest(event.target.value)
  }

  const handleAddStorage=e=>{
    e.preventDefault();
   // dispatch(addStorage({coinId:"ripple",storageName:"trazor"}))
    dispatch(deleteStorage({id:1}))
  }

  return (
    <div className="homeContainer">
    <div className="homeUpperBox"></div>
      {coins.length ? (
        coins.map(coin => (
          <div>
          <SingleCoin
            coin={coin}
            priceUsd={parseFloat(coin.priceUsd).toFixed(
              coin.priceUsd < 0.01 ? 4 : 2
            )}
            changePercent24Hr={parseFloat(coin.changePercent24Hr).toFixed(2)}
            marketCapUsd={parseFloat(coin.marketCapUsd / 1000000000).toFixed(2)}
            key={coin.symbol}
            followingArr={followingArr}
            handleAddFavorite={handleAddFavorite}
            handleDeletFavorite={handleDeletFavorite}
            handleAdd={handleAdd}
            icon={icons[`${coin.symbol.toLowerCase()}@2x.png`] || icons["generic@2x.png"] } //import icon for singleCoin or a generic icon
          />
          {(test && test==coin.symbol )&& <button onClick={e=>handleAddStorage(e)}>click me to test add!</button>}
          </div>
        ))
      ) : (
        <p>HODL a SEC, loading...</p>
      )}
    </div>
  );
}
