
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

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    event.target.reset()
  }


  return (
    <form action="" onSubmit={handleSubmit}>
        <h2 className="heading">Villa</h2> 
        <input type="text" name="full_Name" id="username-field" className="login-button" placeholder="Full_Name" onChange={handleChange}></input>        
        <input type="email" name="email" id="usermail-field" className="login-button" placeholder="Email" onChange={handleChange}></input>
        <input type="password" name="password" id="password-field" className="login-button" placeholder="Set Password" onChange={handleChange}></input>
        <input type="password" name="password_Confirming" id="password-field" className="login-button" placeholder="Confirm Password" onChange={handleChange}></input>
        <button type='submit' className='log' id='logIn'>Login</button>
    </form>
  )
}

export default SignUp
