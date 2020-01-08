import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../../Store/actions/userActions";
import { setFavorites } from "../../../Store/actions/favoritesActions";
export default function NavbarContainer({ user, history }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setFavorites([]));
    dispatch(logOutUser(user));
    history.push("/");
  };

  return (
    <div>
      {user.id ? (
        <div>
          <p>{user.username}</p>
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
