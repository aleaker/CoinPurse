import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../Navbar/searchBar.jsx";
import { setSearched } from "../../../Store/actions/searchActions";

export default function NavbarContainer({ user, history }) {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);
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

  const handleChangeSearch = e => {
    setSearchText(e.target.value.toLowerCase());
    console.log(searchText);
  };

  const handleSearch = e => {
    e.preventDefault();
    console.log(searchText);
    dispatch(setSearched(searchText, list));


    // crear un array de coins.id y coins.symbol
    // tomar todos los id y sybol que contienen  el searchText y guardarlo en el store como searched
    //fetchSearchedCoins(searchText)
  };

  function animationAdder(path) {
    let classes = `navbarMenuButtonBar ${
      history.location.pathname == `/${path}` ? "bottomBarAnimation" : ""
    }`;
    return classes;
  }

  return (
    <div className="navbarContainer">
      {console.log(history.location.pathname)}
      {user.id ? (
        <div className="navbarBox">
          <SearchBar
            className="searchBar"
            handleChangeSearch={handleChangeSearch}
            handleSearch={handleSearch}
          />
          <div className="navbarMenuRow">
            <div className="navbarMenuButtonBox">
              <button
                className="menuButton"
                onClick={() => history.push("/useroptions")}
              >
                {user.username.toUpperCase()}
              </button>
              <span className={animationAdder("useroptions")}></span>
            </div>

            <div className="navbarMenuButtonBox">
              <button
                className={"menuButton"}
                onClick={() => {
                  history.push("/home");
                }}
              >
                HOME
              </button>
              <span className={animationAdder("home")}></span>
            </div>

            <div className="navbarMenuButtonBox">
              <button
                className="menuButton"
                onClick={() => history.push("/watchlist")}
              >
                WATCHLIST
              </button>
              <span className={animationAdder("watchlist")}></span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
