import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../../Store/actions/listActions";
import { setMyWatchlist } from "../../../Store/actions/watchlistActions";
import {fetchCoins,fetchSearchedCoins} from "../../../Store/actions/coinsActions";
import {addFavorite,deleteFavorite,fetchFavorites} from "../../../Store/actions/favoritesActions";
import SingleCoin from "./singleCoin";


function importAll(r) {
  let icons = {};
  r.keys().map((item, index) => {icons[item.replace('./', '')] = r(item); });
  return icons;
}
const icons = importAll(require.context("../../../node_modules/cryptocurrency-icons/32@2x/icon/", false, /\.png$/));
//  './images', false, '/\.png/'));

export default function home() {
  const dispatch = useDispatch();
  let coins = useSelector(state => state.coins);
  let searched = useSelector(state => state.searched);
  let followingArr = useSelector(state => state.following).map(
    fav => fav.symbol
  );

  useEffect(() => {
    console.log("sss", icons["pivx@2x.png"]);
    //  dispatch(fetchCoins());
    if (!followingArr.length) dispatch(fetchFavorites());
    list.length ? console.log("your list is" + list) : generateListForSearch();

    //if(no hay lista){aca deberia generar la lista para la searchbar y guardarla en el store}
    //navbar toma la lista desde el storestore
    //compara con lo buscado y ¿dispara fetchSearchedCoins()?
    dispatch(setMyWatchlist([]));
    console.log(coins);

    const reloader = setInterval(() => {
      //searched.length
      //? dispatch(fetchSearchedCoins(searched[0].id))
      //:
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
    console.log(listForSearch, list);
  };

  //--------------event handlers-----------------------
  const handleAddFavorite = event => {
    event.preventDefault();
    let coinArr = event.target.value.split(",");
    //console.log(coinArr);
    let coinObj = { name: coinArr[0], symbol: coinArr[1], coinId: coinArr[2] };
    dispatch(addFavorite(coinObj));
  };

  const handleDeletFavorite = event => {
    event.preventDefault();
    dispatch(deleteFavorite(event.target.value));
  };

  return (
    <div>
      {coins.length ? (
        coins.map(coin => (
          <SingleCoin
            coin={coin}
            key={coin.symbol}
            followingArr={followingArr}
            handleAddFavorite={handleAddFavorite}
            handleDeletFavorite={handleDeletFavorite}
            icon={icons[`${coin.symbol.toLowerCase()}@2x.png`]}
          />
        ))
      ) : (
        <p>HODL a SEC, loading...</p>
      )}
    </div>
  );
}
