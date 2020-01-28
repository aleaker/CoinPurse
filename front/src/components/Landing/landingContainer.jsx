import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react";
import Login from "./login";
import Register from "./register";
import { registerUser, loginUser } from "../../../Store/actions/userActions";
import { setError } from "../../../Store/actions/errorActions";

export default function landing({ history }) {
  const usernameError = useSelector(state => state.error);
  const [state, setState] = useState({ username: "", password: "", email: "" });
  const [wrongData, setWrongData] = useState();
  const [registerError, setRegisterError] = useState();
  const [registered, setRegistered] = useState(true);
  const dispatch = useDispatch();
  const validateEmail = email => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

  const handleChange = e => {
    e.persist();
    setWrongData();
    setRegisterError();
    dispatch(setError(""));
    setState(state => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleLogin = e => {
    e.preventDefault();
    dispatch(loginUser(state))
      .then(() => {
        history.push("/home");
      })
      .catch(err => setWrongData("incorrect username or password"));
  };

  const handleGoToRegister = e => {
    e.preventDefault();
    setRegistered(false);
  };

  const handleRegister = e => {
    e.preventDefault();
    if (!state.registerUsername) {
      return setRegisterError("You need a username to register");
    }
    if (
      !state.registerPassword ||
      state.confirmPassword != state.registerPassword
    ) {
      return setRegisterError(
        "Your password and confirmation password do not match"
      );
    }
    if (state.email && !validateEmail(state.email)) {
      return setRegisterError("Use a valid email or leave it blank");
    }
    dispatch(registerUser(state, history));
  };

  return (
    <div>
      {registered ? (
        <Login
          handleChange={handleChange}
          handleSubmit={handleLogin}
          wrongData={wrongData}
          handleGoToRegister={handleGoToRegister}
        />
      ) : (
        <Register
          handleChange={handleChange}
          handleSubmit={handleRegister}
          registerError={registerError}
          usernameError={usernameError}
        />
      )}
    </div>
  );
}
