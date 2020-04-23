import React from "react";
import { Link } from "react-router-dom";
export default function landingLogin({
  state,
  handleChange,
  handleSubmit,
  wrongData,
  handleGoToRegOrSign
}) {
  return (
    <div className="signBox fill-window">
      <img src="/bitcoin.png" className="signLogo" />
      <h2 className="signTitle">COIN PURSE</h2>
      <form className="signForm">
        <input
          name="username"
          className="signInput"
          placeholder="Username"
          value={state.username}
          onChange={e => handleChange(e)}
        />

        <input
          name="password"
          className="signInput"
          placeholder="Password"
          type="password" 
          value={state.password}
          onChange={e => handleChange(e)}
        />
      </form>
      {/* <p className="loginForm loginErrors"> */}
        {wrongData ? (
          <p className="signErrors">{wrongData}</p>
        ) : (
          <button className="signButton" onClick={e => handleSubmit(e)}>
            Sign in
          </button>
        )}
      

      <div className="resetPassOrRegisterBox">
        <button className="resetOrRegButton">Reset password</button>
        <p className="resetOrRegDivition">|</p>
        <button className="resetOrRegButton" onClick={e => handleGoToRegOrSign(e)}>Register</button>
      </div>
    </div>
  );
}
