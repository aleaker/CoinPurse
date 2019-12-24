import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react";
import Login from "./login";
import Register from "./register";
import { registerUser, loginUser } from "../../../Store/actions/userActions";

export default function landing({ history }) {
  const [state, setState] = useState({ username: "", password: "", email: "" });
  const [wrongData, setWrongData] = useState();
  const [registerError, setRegisterError] = useState();
  const dispatch = useDispatch();
  const validateEmail = email => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

  const handleChange = event => {
    event.persist();
    setWrongData();
    setRegisterError();
    setState(state => ({ ...state, [event.target.name]: event.target.value }));
  };

  const handleLogin = event => {
    event.preventDefault();
    dispatch(loginUser(state))
      .then(() => {
        history.push("/home");
      })
      .catch(err => setWrongData("incorrect username or password"));
  };

  const handleRegister = event => {
    event.preventDefault();
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
    dispatch(registerUser(state,history)).then(x=>console.log(x));
  };

  return (
    <div>
      <Login
        handleChange={handleChange}
        handleSubmit={handleLogin}
        wrongData={wrongData}
      />
      <Register
        handleChange={handleChange}
        handleSubmit={handleRegister}
        registerError={registerError}
      />
    </div>
  );
}
