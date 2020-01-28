import React from "react";
import { Link } from "react-router-dom";
export default function landingLogin({
  handleChange,
  handleSubmit,
  wrongData,
  handleGoToRegister
}) {
  return (
    <div className="loginBox fill-window">
      <img src="/logo.png" className="loginLogo" />
      <h2 className="loginTitle">COIN PURSE</h2>
      <form className="loginForm">
        <input
          name="username"
          className="loginInput"
          placeholder="Username"
          onChange={e => handleChange(e)}
        />

        <input
          name="password"
          className="loginInput"
          placeholder="Password"
          type="password"
          onChange={e => handleChange(e)}
        />
      </form>
      {/* <p className="loginForm loginErrors"> */}
        {wrongData ? (
          <p className="loginErrors">{wrongData}</p>
        ) : (
          <button className="loginButton" onClick={e => handleSubmit(e)}>
            Log In
          </button>
        )}
      

      <div className="resetPassOrRegisterBox">
        <button className="resetOrRegButton">Reset password</button>
        <p className="resetOrRegDivition">|</p>
        <button className="resetOrRegButton" onClick={e => handleGoToRegister(e)}>Register</button>
      </div>
    </div>
  );
}
