import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../../Store/actions/userActions";

export default function NavbarContainer({ user, history }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser(user));
    history.push('/')
  };

  return (
    <div>
      {user.id ? (
        <div>
          <p>{user.username}</p>
          <button onClick={event => handleLogout(event)}>Logout</button>
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
