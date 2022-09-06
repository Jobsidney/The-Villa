import React from 'react'

function SignUp() {
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
