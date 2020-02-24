import React, { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Landing from "./components/Landing/landingContainer";
import Home from "./components/Home/homeContainer";
import Navbar from "./components/Navbar/navbarContainer";
import Watchlist from "./components/Watchlist/watchlistContainer";
import { useSelector, useDispatch } from "react-redux";
import { isLoged, fetchUser } from "../Store/actions/userActions";
import "../../back/public/style.css";
import { fetchCoins } from "../Store/actions/coinsActions";

export default function Main() {
  const user = useSelector(state => state.user);
  //const searched = useSelector(state => state.searched)
  const dispatch = useDispatch();
  let history = useHistory();

 
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchCoins())
     }, []);

  return (
    <div className="main fill-window">
      {user.id && <Navbar history={history} user={user} />}
      <Switch>
        <Route exact path="/" history={history} component={Landing} />
        <Route exact path="/home" history={history} component={Home} />
        {/* render={()=> <Home history={history}  />} /> */}
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
