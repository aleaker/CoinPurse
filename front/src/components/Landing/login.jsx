import React from "react";
import {Link} from "react-router-dom"

export default function landingLogin({handleChange,handleSubmit,wrongData}) {
  
  return (
    <div>
      <form>
        <label>
        Username
          <input name="username" onChange={e=>handleChange(e)}/>
        </label>
        <label>
        Password:
          <input name="password" type="password" onChange={e=>handleChange(e)} />
        </label>
      </form>
      <p>{wrongData? wrongData : ""}</p>
     
      <button onClick={e=>handleSubmit(e)}>Login</button>
  
      <p>--------------------------------------------------------------------------------------------------</p>
    </div>
  );
}
