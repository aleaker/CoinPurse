import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../../Store/actions/listActions";
import { setMyWatchlist } from "../../../Store/actions/watchlistActions";
import { fetchCoins } from "../../../Store/actions/coinsActions";
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
  let list = useSelector((state) => state.list);
  let coins = useSelector((state) => state.coins);
  let searched = useSelector((state) => state.searched);
  let storagesDbState = useSelector((state) => state.storages[0]);
  let storagesArr = useSelector((state) => state.storages[1]);//OJO esto repite los coinid en el array. Ej: "bitcoin,bitcoin,etherum"
  let following = useSelector((state) => state.following);
  const initialStorageObj = {
    amount: "",
    storageName: "",
    coinId: "",
  };
  const [showStorageDD, setShowStorageDD] = useState(false);
  const [storageObjArr, setStorageObjArr] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  
  
  //const [storagesArr, setStoragesArr] = useState([]);
  const [storageObj, setStorageObj] = useState(initialStorageObj); //, pk: "",date: ""
  


  useEffect(() => {

    if (!list.length) generateListForSearch();
    if (!storagesArr && storagesDbState != "emptyDb") dispatch(fetchStorages());
    if (!following.length) dispatch(fetchFavorites()); //esto y el fetchstorage deberian ver si ya se busco en la base de datos en vez de seguir fetcheando siempre que no haya storages.length ni following.length

    const reloader = setInterval(() => {
      dispatch(fetchCoins(searched)); //if searched is not defined, it brigs all coins from the API
    }, 10000);
    return () => clearInterval(reloader);

  }, [coins]);

  //--------------geting icons---------------------------
  function importAll(r) {
    let icons = {};
    r.keys().map((item) => {
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

  const generateListForSearch = () => {
    const listForSearch = [];
    coins.map((coin) => {
      listForSearch.push(coin.id, coin.symbol.toLowerCase());
    });
    dispatch(setList(listForSearch));
  };
  //--------------event handlers-----------------------
  const handleAddFavorite = (e) => {
    e.preventDefault();
    dispatch(addFavorite(e.target.value));
  };

  const handleDeletFavorite = (e) => {
    e.preventDefault();
    if(storagesArr.includes(e.target.value)){console.log("está")};
    console.log(e.target)
    dispatch(deleteFavorite(e.target.value));
  };

  const handleOpenStorageDD = (e) => {
    e.preventDefault();
    setShowStorageDD(e.target.value);
    setStorageObj(initialStorageObj);
    setStorageObjArr([]);
    setErrorMessage("");
  };

  const handleAddStorage = (e) => {
    e.preventDefault();
    if (!storageObj.amount || !storageObj.storageName) {
      setErrorMessage("You need to add a storage name and amount");
    } else {
      let storageData = [...storageObjArr, storageObj];
      storageData.map((storageObj) => {
        storageObj.coinId = e.target.value;
      });
      dispatch(addStorage(storageData));
      setStorageObj(initialStorageObj);
      setStorageObjArr([]);
      setShowStorageDD(false);
    }
  };

  const handelOneLessOrCancel = (e) => {
    e.preventDefault();
    if (storageObjArr.length) {
      let newArr = storageObjArr;
      setStorageObj(newArr.pop());
      setStorageObjArr([...newArr]);
    } else {
      setStorageObj(initialStorageObj);
      setShowStorageDD(false);
    }
  };

  const handleOneMore = (e) => {
    e.preventDefault();
    !storageObj.amount || !storageObj.storageName
      ? setErrorMessage("You need to add a storage name and amount")
      : (setStorageObjArr((prevState) => [...prevState, storageObj]),
        setStorageObj(initialStorageObj));
  };

  const handleDeleteFromArray = (e) => {
    e.preventDefault();
    let newArr = storageObjArr;
    newArr.splice(e.target.value, 1);
    setStorageObjArr([...newArr]);
  };

  const handleChange = (e) => {
    e.persist();
    setStorageObj((prevObj) => ({
      ...prevObj,
      [e.target.name]: e.target.value.split(" ").join(""),
    }));
  };

  const handleResetError = (e) => {
    e.preventDefault();
    setErrorMessage("");
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
              following={following}
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
              errorMessage={errorMessage}
              handleResetError={handleResetError}
              storagesArr={storagesArr}
            />

          </div>
        ))
      ) : (
        <p>HODL a SEC, loading...</p>
      )}
    </div>
  );
}
