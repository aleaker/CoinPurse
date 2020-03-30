import React from "react";

export default function landingRegister({
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
          name="registerUsername"
          onChange={e => handleChange(e)}
        />

        <input
          className="signInput"
          name="email"
          placeholder="Email (optional)"
          onChange={e => handleChange(e)}
        />
        <input
          className="signInput"
          required
          placeholder="Password"
          name="registerPassword"
          type="password"
          onChange={e => handleChange(e)}
        />

        <input
          className="signInput"
          required
          placeholder="Confirm password"
          name="confirmPassword"
          type="password"
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
