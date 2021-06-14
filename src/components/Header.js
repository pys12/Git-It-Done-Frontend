import React,{useState} from 'react'
import Login from './Login';
import Logout from './Logout';

const Header = () => {
    const clientId = '174106107401-lv3ergmh2c99jna91om8mtvij3am2b5l.apps.googleusercontent.com'

    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")) : '')
    return (
        <div>
            <h1>Git It Done</h1>
            <Login user={user} setUser={setUser} clientId={clientId} />
            <Logout user={user} setUser={setUser} clientId={clientId}/>
        </div>
    )
}

export default Header
