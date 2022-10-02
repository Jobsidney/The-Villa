import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'


export const SideBarData=[

    {
        Title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        Title: 'About',
        path:'/abouts',
        icon: <FaIcons.FaRegAddressBook/>,
        cName:'nav-text'
    },
    {
        Title: 'Menu',
        path:'/menu',
        icon: <FaIcons.FaRegAddressBook/>,
        cName:'nav-text'
    },
    {
        Title: 'Reservation',
        path:'/reservation',
        icon: <IoIcons.IoIosCall/>,
        cName:'nav-text'
    }
]