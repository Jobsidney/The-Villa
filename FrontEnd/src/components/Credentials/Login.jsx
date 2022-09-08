import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
function Login() {

const [formData,setData] = useState({})
const[data,setUser]=useState('');

useEffect(()=>{
  fetch('http://localhost:9292/users/logins')
  .then(res=>res.json())
  .then(data=>setUser(data))
},[])


  function handleChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setData({
      ...formData,
      [name]: value,
    })
    console.log(formData);

  }

function handleSubmit(event){
    event.preventDefault();
    const item=data.find(item=>item.email===formData.email)
    if (item && item.password===formData.password){
        alert('Login Successfull !...')
        event.target.reset() 
    }else{
      alert('Login Failure! Wrong email or password!')
    };



}

  return (
    <form id='log' onSubmit={handleSubmit}>
        <h2 className="heading">Villa</h2>
        
            <input type="email" name="email" id="username-field" className="login-button" placeholder="Email" onChange={handleChange} required></input>
            <input type="password" name="password" id="password-field" className="login-button" placeholder="Password" onChange={handleChange} required></input>
        
        <button type='submit' classNameName='log' id='logIn'>Login</button>

        <h3 id="password"><a href ="##">forgot password?</a></h3>
        <div className="horizontal">
            <div className="hor"><hr/>
            </div>
            <h3>OR</h3>
            <div className="hor"><hr/>
            </div>
        </div>
        <h3 id="account">Don't have an account? <Link to="/signUp" id="sign">Sign up</Link></h3>
    </form>
  )
}

export default Login
