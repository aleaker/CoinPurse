import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../Navbar/searchBar.jsx";
import MenuButton from "./menuButton";
import { setSearched } from "../../../Store/actions/searchActions";

export default function NavbarContainer({ user, history }) {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const [searchText, setSearchText] = useState();
  const [haveTheList, setHaveTheList] = useState(false);

  // const coins = useSelector(state=>state.coins); //i uso coins el componente se vuelve a
  //renderizar cada 10 sgs por el fetchCoins() del componente home

  useEffect(() => {
    //!haveTheList && setHaveTheList(true)
  }, []);

  const handleLogout = () => {
    dispatch(setFavorites([]));
    dispatch(logOutUser(user));
    history.push("/");
  };

  const handleChangeSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
    console.log(searchText);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    dispatch(setSearched(searchText, list));

    // crear un array de coins.id y coins.symbol
    // tomar todos los id y sybol que contienen  el searchText y guardarlo en el store como searched
    //fetchSearchedCoins(searchText)
  };

  const animationAdder=(path)=> {
    let classes = `navbarMenuButtonBar ${
      history.location.pathname == `/${path}` ? "menuButtonAnimation" : ""
    }`;
    console.log(path)
    return classes;
  }

  return (
    <div className="navbarContainer">
      {user.id ? (
        <div className="navbarBox">
          <img src="/bitcoin.png" className="navbarLogo" />
          <h2 className="navbarTitle">COIN PURSE</h2>
          <SearchBar
            className="searchBar"
            handleChangeSearch={handleChangeSearch}
            handleSearch={handleSearch}
          />
          <div className="navbarMenuRow">
            <MenuButton
              path={"useroptions"}
              icon={"user"}
              buttonTitle={user.username}
              animationAdder={animationAdder}
              history={history}
            />
            <MenuButton
              path={"watchlist"}
              icon={"logo"}
              buttonTitle={"Watchlist"}
              animationAdder={animationAdder}
              history={history}
            />
            <MenuButton
              path={"home"}
              icon={"home"}
              buttonTitle={"Home"}
              animationAdder={animationAdder}
              history={history}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
