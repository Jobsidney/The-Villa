import React,{useState,useEffect} from 'react'

function Login() {

const [users,setUser]=useState('');
const [formData,setData] = useState({})

// useEffect(()=>{
// fetch("http://localhost:3000/users")
// .then(res=>res.json())
// .then(data=>setUser(data));
// },[])
console.log(users);

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
    const current=users.map(user=>user.email===formData.email ? user : false 
    )
    console.log(current);

}

  return (
    <form id='log' onSubmit={handleSubmit}>
        <h2 className="heading">Villa</h2>
        
            <input type="email" name="email" id="username-field" className="login-button" placeholder="Email" onChange={handleChange}></input>
            <input type="password" name="password" id="password-field" className="login-button" placeholder="Password" onChange={handleChange}></input>
        
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
