import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { Link } from "react";
import Login from "./login";
import Register from "./register";
import { registerUser, loginUser } from "../../../Store/actions/userActions";
import { setError } from "../../../Store/actions/errorActions";

export default function landing({ history }) {
  //  const user = useSelector(state => state.user);
  const usernameError = useSelector((state) => state.error);
  const [registerError, setRegisterError] = useState();
  const [wrongData, setWrongData] = useState();
  const initialState = { username: "", password: "", email: "",confirmPassword:"" };
  const [state, setState] = useState(initialState);
  const [registered, setRegistered] = useState(true);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user.id) {
  //     return <Redirect to="/home" />;
  //   }
  // }, []);

  const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

  const resetErrors = () => {
    setWrongData();
    setRegisterError();
    dispatch(setError(""));
  };

  const handleChange = (e) => {
    e.persist();
    resetErrors(); 
    //arreglar esto, no puede disparar resetErrors en cada change
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value.split(" ").join(""),
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(state))
      .then(() => {
        history.push("/home");
      })
      .catch((err) => setWrongData("incorrect username or password"));
  };

  const handleGoToRegOrSign = (e) => {
    e.preventDefault();
    resetErrors();
    setState(initialState);
    setRegistered(!registered);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!state.username) {
      return setRegisterError("You need a username to register");
    }
    if (
      !state.password ||
      state.confirmPassword != state.password
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
    <div className="signContainer">
      {registered ? (
        <Login
          state={state}
          handleChange={handleChange}
          handleSubmit={handleLogin}
          wrongData={wrongData}
          handleGoToRegOrSign={handleGoToRegOrSign}
        />
      ) : (
        <Register
          state={state}
          handleChange={handleChange}
          handleSubmit={handleRegister}
          registerError={registerError}
          usernameError={usernameError}
          handleGoToRegOrSign={handleGoToRegOrSign}
        />
      )}
    </div>
  );
}
