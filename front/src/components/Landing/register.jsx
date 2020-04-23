import React from "react";

export default function landingRegister({
  state,
  handleChange,
  handleSubmit,
  registerError,
  usernameError,
  handleGoToRegOrSign
}) {
  return (
    <div className="signBox fill-window">
      <img src="/bitcoin.png" className="signLogo" />
      <h2 className="signTitle">COIN PURSE</h2>
      <form className="signForm regForm">
        <input
          className="signInput"
          required
          placeholder="Username"
          name="username"
          value={state.username}
          onChange={e => handleChange(e)}
        />

        <input
          className="signInput"
          name="email"
          placeholder="Email (optional)"
          value={state.email}
          onChange={e => handleChange(e)}
        />
        <input
          className="signInput"
          required
          placeholder="Password"
          name="password"
          type="password"
          value={state.password}
          onChange={e => handleChange(e)}
        />

        <input
          className="signInput"
          required
          placeholder="Confirm password"
          name="confirmPassword"
          type="password"
          value={state.confirmPassword}
          onChange={e => handleChange(e)}
        />
      </form>
      {registerError || usernameError.length ? (
        <p className="signErrors regErrors">{registerError || usernameError}</p>
      ) : (
        <button className="signButton" onClick={e => handleSubmit(e)}>Register</button>
      )}
      <div className="resetPassOrRegisterBox registerBox">
        <button className="resetOrRegButton" onClick={e => handleGoToRegOrSign(e)}>Sign in</button>
      </div>
    </div>
  );
}
