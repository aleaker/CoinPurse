import React from "react";
import {useDispatch} from "react-redux";
import { logOutUser } from "../../../../front/Store/actions/userActions";
import { setFavorites } from "../../../Store/actions/favoritesActions";

export default function UserOptions({user,history}) {
   const dispatch = useDispatch()

  const handleLogout = (user) => {
    console.log(user);
    dispatch(setFavorites([]));
    dispatch(logOutUser(user));
    history.push("/");
  };

  return (
    <div className="temporalBox">
        <div className="homeUpperBox"></div> 
      <button onClick={event => handleLogout(event)}>Logout</button>
    </div>
  );
}
