import React from 'react'
import login from './login.css'
function LoginForm() {
  return (
    <div className="image">
        <div className='overlay'>
            <form id='log'>
                <h2 class="heading">Villa</h2>
                
                    <input type="text" name="username" id="username-field" class="login-button" placeholder="Username"></input>
                    <input type="password" name="password" id="password-field" class="login-button" placeholder="Password"></input>
                
                <button type='submit' className='log' id='logIn'>Login</button>
            </form>

            <h3 id="password"><a href ="" id="reset">forgot password?</a></h3>
         </div>
    </div>
    
  )
}

export default LoginForm