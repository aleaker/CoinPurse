import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../../Store/actions/listActions";
import { setMyWatchlist } from "../../../Store/actions/watchlistActions";
import {
  fetchCoins,
  fetchSearchedCoins,
} from "../../../Store/actions/coinsActions";
import {
  addFavorite,
  deleteFavorite,
  fetchFavorites,
} from "../../../Store/actions/favoritesActions";
import SingleCoin from "./singleCoin";
import {
  addStorage,
  fetchStorages,
  deleteStorage,
} from "../../../Store/actions/storageActions";

export default function home() {
  const dispatch = useDispatch();
  const [showStorageDD, setShowStorageDD] = useState(false);
  const initialStorageObj = {
    amount: "",
    storageName: "",
    coinId: "",
  }
  const [storageObj, setStorageObj] = useState(initialStorageObj); //, pk: "",date: ""
  const [storageObjArr, setStorageObjArr] = useState([]);
  let coins = useSelector((state) => state.coins);
  let searched = useSelector((state) => state.searched);
  let storages = useSelector((state) => state.storages);
  let followingArr = useSelector((state) => state.following).map(
    (fav) => fav.coinId
  );

  useEffect(() => {
    if (!list.length) generateListForSearch();
    if (!followingArr.length) dispatch(fetchFavorites()); //esto y el fetchstorage deberian ver si ya se busco en la base de datos en vez de seguir fetcheando siempre que no haya storages.length ni following.length
    if (!storages.length) dispatch(fetchStorages());

    const reloader = setInterval(() => {
      dispatch(fetchCoins(searched));
    }, 10000);
    return () => clearInterval(reloader);
  }, [coins]);

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

  //----------- search bar function------------------
  const list = useSelector((state) => state.list);
  const [haveList, setHaveList] = useState(false);

  const generateListForSearch = () => {
    const listForSearch = [];
    coins.map((coin) => {
      listForSearch.push(coin.id, coin.symbol.toLowerCase());
    });
    dispatch(setList(listForSearch));
    //console.log(listForSearch, list);
  };

  //--------------event handlers-----------------------
  const handleAddFavorite = (e) => {
    e.preventDefault();
    dispatch(addFavorite(e.target.value));
  };

  const handleDeletFavorite = (e) => {
    e.preventDefault();
    dispatch(deleteFavorite(e.target.value));
  };

  const handleOpenStorageDD = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setShowStorageDD(e.target.value);
    console.log("open", showStorageDD);
  };



  const handleAddStorage =  (e) => {
    e.preventDefault();
   let storageData = [...storageObjArr,storageObj];
   storageData.map((storageObj) => {
      storageObj.coinId = e.target.value;
    });
    dispatch(addStorage(storageData));
    setStorageObj(initialStorageObj)
    setStorageObjArr([]);
    setShowStorageDD(false);

  };

  const handelOneLessOrCancel = (e)=>{
    e.preventDefault();
    if(storageObjArr.length){
      let newArr = storageObjArr
      newArr.pop();
      setStorageObjArr([...newArr]);
    }else{ 
      setStorageObj(initialStorageObj);
      setShowStorageDD(false);
    }
  }

  const handleOneMore = (e) => {
    e.preventDefault();
    console.log(storageObjArr);
    setStorageObjArr((prevState) => [...prevState, storageObj]);
    setStorageObj(initialStorageObj);
  };

  const handleDeleteFromArray=(e)=>{
    e.preventDefault();
    

    let newArr=storageObjArr
    newArr.splice(e.target.value,1)
    setStorageObjArr([...newArr])

  }

  const handleChange = (e) => {
    e.persist();
    setStorageObj((prevObj) => ({
      ...prevObj,
      [e.target.name]: e.target.value,
    }));
  };


  //----------------------------------------------------------

  return (
    <div className="homeContainer">
      <div className="homeUpperBox"></div>
      {coins.length ? (
        coins.map((coin) => (
          <div key={coin.symbol}>
            <SingleCoin
              coin={coin}
              priceUsd={parseFloat(coin.priceUsd).toFixed(
                coin.priceUsd < 0.01 ? 4 : 2
              )}
              changePercent24Hr={parseFloat(coin.changePercent24Hr).toFixed(2)}
              marketCapUsd={parseFloat(coin.marketCapUsd / 1000000000).toFixed(
                2
              )}
              key={coin.symbol}
              followingArr={followingArr}
              handleAddFavorite={handleAddFavorite}
              handleDeletFavorite={handleDeletFavorite}
              handleOpenStorageDD={handleOpenStorageDD}
              handleAddStorage={handleAddStorage}
              handelOneLessOrCancel={handelOneLessOrCancel}
              icon={
                icons[`${coin.symbol.toLowerCase()}@2x.png`] ||
                icons["generic@2x.png"] //import icon for singleCoin or a generic icon
              }
              showStorageDD={showStorageDD}
              handleChange={handleChange}
              handleOneMore={handleOneMore}
              storageObj={storageObj}
              storageObjArr={storageObjArr}
              handleDeleteFromArray={handleDeleteFromArray}
            />
            {/* {test && test == coin.symbol && (
              <button onClick={(e) => handleAddStorage(e)}>
                click me to test add!
              </button>
            )} */}
          </div>
        ))
      ) : (
        <p>HODL a SEC, loading...</p>
      )}
    </div>
  );
}
