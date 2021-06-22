import React,{useState} from 'react'
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import './Header.css'
import { CheckCircleTwoTone } from '@ant-design/icons';
import {GiSlicedBread} from 'react-icons/gi'
const Header = () => {
    const clientId = '174106107401-lv3ergmh2c99jna91om8mtvij3am2b5l.apps.googleusercontent.com'

    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")) : '')
    
    return (
        <div className='header'>
            <div className='title'><GiSlicedBread  />Git It Done</div>
            <div className='icons'>
            <Logout user={user} setUser={setUser} clientId={clientId} />
            <Login user={user} setUser={setUser} clientId={clientId} />
            </div>
        </div>
    )
}

export default Header
