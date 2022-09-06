
import React, { useState, useEffect } from 'react';

function SignUp() {
const [formData,setData] = useState({})
  function handleChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  }


  return (
    <form action="" onSubmit={handleSubmit}>
        <h2 className="heading">Villa</h2>         
        <input type="email" name="email" id="username-field" className="login-button" placeholder="Email" onChange={handleChange}></input>
        <input type="password" name="password" id="password-field" className="login-button" placeholder="Set Password" onChange={handleChange}></input>
        <input type="password" name="password-confirm" id="password-field" className="login-button" placeholder="Confirm Password" onChange={handleChange}></input>
        <button type='submit' className='log' id='logIn'>Login</button>
    </form>
  )
}

export default SignUp
