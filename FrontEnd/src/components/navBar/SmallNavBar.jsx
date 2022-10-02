import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import {SideBarData} from './SideBarData'
function SmallNavBar() {
    const [sidebar,setSidebar]=useState(false)

    function toggle(){
        setSidebar(!sidebar)
        console.log(sidebar);
    }
  return (
    <>
      <div className="navBar2 nav-active">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={toggle}/>
        </Link>
    </div> 
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
           <li className="navbar-toggle">
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {
                SideBarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.Title}</span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>    
    </nav> 
    </>
  )
}

export default SmallNavBar
