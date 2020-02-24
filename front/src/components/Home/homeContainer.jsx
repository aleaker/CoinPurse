import React, { useState, useEffect } from "react";
import {
  fetchCoins,
  fetchSearchedCoins
} from "../../../Store/actions/coinsActions";
import SingleCoin from "./singleCoin";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
  fetchFavorites
} from "../../../Store/actions/favoritesActions";
import { setMyWatchlist } from "../../../Store/actions/watchlistActions";
import { setList } from "../../../Store/actions/listActions";

export default function home() {
  const dispatch = useDispatch();
  let coins = useSelector(state => state.coins);
  let searched = useSelector(state => state.searched);
  let followingArr = useSelector(state => state.following).map(
    fav => fav.symbol
  );

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

  useEffect(() => {
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
          />
        ))
      ) : (
        <p>HODL a SEC, loading...</p>
      )}
    </div>
  );
}
