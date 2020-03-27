import React, { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Landing from "./Landing/landingContainer";
import Home from "./components/Home/homeContainer";
import Navbar from "./components/Navbar/navbarContainer";
import Watchlist from "./components/Watchlist/watchlistContainer";
import { useSelector, useDispatch } from "react-redux";

export default function Main() {
  const user = useSelector(state => state.user);
  //const searched = useSelector(state => state.searched)
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {}, []);

  return (
    <div>
      {user.id ? (
        <div>
          <Navbar history={history} user={user} />
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
      ) : (
        ""
      )}
    </div>
  );
}
