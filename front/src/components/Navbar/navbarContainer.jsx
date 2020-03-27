import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { logOutUser } from "../../../Store/actions/userActions";
import { setFavorites } from "../../../Store/actions/favoritesActions";
import { fetchSearchedCoins } from "../../../Store/actions/coinsActions";
import SearchBar from "../Navbar/searchBar.jsx";
import axios from "axios"
import { setSearched } from "../../../Store/actions/searchActions";


export default function NavbarContainer({ user, history }) {

  const valueRef = React.useRef();
  const dispatch = useDispatch();
  const list = useSelector(state=>state.list)
  const [searchText, setSearchText] = useState();
  const [haveTheList, setHaveTheList] = useState(false);



// const coins = useSelector(state=>state.coins); //i uso coins el componente se vuelve a
//renderizar cada 10 sgs por el fetchCoins() del componente home

  useEffect(() => {
    console.log("renderiza2")
  
    //!haveTheList && setHaveTheList(true)
  }, []);

  const handleLogout = () => {
    dispatch(setFavorites([]));
    dispatch(logOutUser(user));
    history.push("/");
  };

  const handleChangeSearch = e => {
    setSearchText(e.target.value.toLowerCase());
    console.log(searchText);
  };

  const handleSearch = e => {
    e.preventDefault();
    console.log(searchText);
    dispatch(setSearched(searchText,list));

//    console.log(coins.map(coin => coin.id));

    // crear un array de coins.id y coins.symbol
    // tomar todos los id y sybol que contienen  el searchText y guardarlo en el store como searched
    //fetchSearchedCoins(searchText)
  };

  return (
    <div>
      {user.id ? (
        <div>
          <p>{user.username}</p>
          <SearchBar
          valueRef={valueRef}
            handleChangeSearch={handleChangeSearch}
            handleSearch={handleSearch}
          />
          <button onClick={event => handleLogout(event)}>Logout</button>
          <button onClick={() => history.push("/watchlist")}>Watchlist</button>
          <button onClick={() => history.push("/home")}>Home</button>
        </div>
      ) : (
        ""
      )}
      <p>
        .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
      </p>
    </div>
  );
}
