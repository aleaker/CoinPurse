import React from "react";

export default function landingRegister({handleChange,handleSubmit,registerError}) {
  return (
    <div>
      <form>
        <label>
        Username:
          <input required name="registerUsername"  onChange={e=>handleChange(e)}/>
        </label>
        <label>
        Email:
          <input  name="email" placeholder="optional" onChange={e=>handleChange(e)}/>
        </label>
        <label>
        Password:
          <input required name="registerPassword" type="password" onChange={e=>handleChange(e)}/>
        </label>
        <label>
        Confirm password:
          <input required name="confirmPassword" type="password" onChange={e=>handleChange(e)}/>
        </label>
      </form>
      {registerError? <p>{registerError}</p> : ""}
      <button onClick={e=>handleSubmit(e)} >Register</button>

    </div>
  );
}
