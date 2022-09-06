import React from 'react'
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
  return (
    <form action="">
        <h2 className="heading">Villa</h2>         
        <input type="email" name="email" id="username-field" className="login-button" placeholder="Email"></input>
        <input type="password" name="password" id="password-field" className="login-button" placeholder="Set Password"></input>
        <input type="password" name="password-confirm" id="password-field" className="login-button" placeholder="Confirm Password"></input>
        <button type='submit' classNameName='log' id='logIn'>Login</button>
    </form>
  )
}

export default SignUp
