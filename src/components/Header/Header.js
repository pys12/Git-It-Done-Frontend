import React,{useState} from 'react'
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import './Header.css'
import { CheckCircleTwoTone } from '@ant-design/icons';

const Header = () => {
    const clientId = '174106107401-lv3ergmh2c99jna91om8mtvij3am2b5l.apps.googleusercontent.com'

    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")) : '')
    
    return (
        <div className='header'>
            <h1><CheckCircleTwoTone twoToneColor="#52c41a" />Git It Done</h1>
            <div>
            <Login user={user} setUser={setUser} clientId={clientId} />
            <Logout user={user} setUser={setUser} clientId={clientId} />
            </div>
        </div>
    )
}

export default Header
