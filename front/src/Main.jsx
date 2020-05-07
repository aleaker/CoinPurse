import React, { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Landing from "./components/Landing/landingContainer";
import Home from "./components/Home/homeContainer";
import Navbar from "./components/Navbar/navbarContainer";
import UserOptions from "./components/UserOptions/UserOptionsContainer"
import Watchlist from "./components/Watchlist/watchlistContainer";
import { useSelector, useDispatch } from "react-redux";
import { isLoged, fetchUser } from "../Store/actions/userActions";
import "../build/style.css";
import { fetchCoins } from "../Store/actions/coinsActions";
import { fetchFavorites } from "../Store/actions/favoritesActions";

export default function Main() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  let history = useHistory();

 
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchCoins());
   //if(user.length) dispatch(fetchFavorites());
     }, []);

  return (
    <div className="main fill-window">
      {user.id && <Navbar history={history} user={user} />}
      <Switch>
        <Route exact path="/" history={history} component={Landing} />
        <Route exact path="/useroptions" history={history} user={user} component={UserOptions} />
        <Route exact path="/home" history={history} component={Home} />
        <Route
          exact
          path="/watchlist"
          history={history}
          component={Watchlist}
        />
      </Switch>
    </div>
  );
}
