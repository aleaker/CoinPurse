import React, { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Landing from "./components/Landing/landingContainer";
import Home from "./components/Home/homeContainer";
import Navbar from "./components/Navbar/navbarContainer";
import { useSelector, useDispatch } from "react-redux";
import { isLoged, fetchUser } from "../Store/actions/userActions";

export default function Main() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(fetchUser());
    console.log(history)
  }, []);

 

  return (
    <div>
      <Navbar  history={history} user={user} />

      <Switch>
        <Route exact path="/" history={history}  component={Landing} />
        <Route exact path="/home" history={history} component={Home} />
      </Switch>
    </div>
  );
}
