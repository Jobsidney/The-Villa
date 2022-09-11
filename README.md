# THE-VILLA
***
## DESCRIPTION
This is A fully functional web application that deals with providing hospitality to users. The website provides a platfrom where one can order food, be a user and even comment on the hospitality of the restaurant.

## [Features]()

- Well Designed Interface(UI).
- intensive use of css for design
- React
- API intergration
- Switch to multiple categories via buttons
- Responsive to variety of devices like mobile,tablet and PC
- Backend with Ruby & Sqlite3 Database
- Perfect ROute navigation and OOP implimentation.
- Secure login & Signup.
- Fast loading & interaction

## [InstallationInstructions]() 
### requirements:
- chrome browser/any other browser
- any type of computer(phone of laptop)
- Internet connection
- Navigate to the git repository
- clone the repo to local machine
#### BackEnd SetUP
- Open the backend folder on A termina
- Then, run `bundle install` to install require gems
- run  (`bundle exec rake server`) to run the backend
#### FrontEnd SetUP
- Navigate to the frontEnd folder and open it in the terminal
- run (`npm start`) to run the applicationon the browser.
- Done..! the site is up and running locally.

## Target to future improvement
- Domain to deploy the application to the web.
- User payment method intergration.
- Proper User authentication.

### Program Sample
#### React Code
```React
import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
function Login() {

const [formData,setData] = useState({})
const[data,setUser]=useState('');
const [action,setAction] = useState(true);
const navigate=useNavigate();

useEffect(()=>{
  fetch('http://localhost:9292/users/logins')
  .then(res=>res.json())
  .then(data=>setUser(data))
},[])}
```

#### CSS
    Example of Css
```Css
.cards{
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
}
```
#### Ruby Api
    Example of working ruby code
```Ruby
class User< ActiveRecord::Base
    has_many :reviews
    has_many :foods, through: :reviews
end
```
## PROJECT AUTHOR
- [Jobsidney](https://github.com/Jobsidney/)
- [<img style="border: 1px solid white;" src="./assets/images/job.png">](https://github.com/Jobsidney/)
***

## license information.
### The MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
