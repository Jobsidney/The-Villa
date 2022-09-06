import React from 'react'

function Login() {
    
  return (
    <form id='log'>
        <h2 className="heading">Villa</h2>
        
            <input type="email" name="username" id="username-field" className="login-button" placeholder="Email"></input>
            <input type="password" name="password" id="password-field" className="login-button" placeholder="Password"></input>
        
        <button type='submit' classNameName='log' id='logIn'>Login</button>

        <h3 id="password"><a href ="##">forgot password?</a></h3>
        <div className="horizontal">
            <div className="hor"><hr/>
            </div>
            <h3>OR</h3>
            <div className="hor"><hr/>
            </div>
        </div>
        <h3 id="account">Don't have an account? <a href ="" id="sign">Sign up</a></h3>
    </form>
  )
}

export default Login
