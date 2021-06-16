import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const Logout = ({user,clientId,setUser}) => {
    

    const logout = () => {
        console.log('logout success!')
        setUser('')
        console.log(JSON.parse(localStorage.getItem("user")))
        localStorage.clear()
    }
    
    return (
        <div>
            {user !== '' ?
            <div>
            <GoogleLogout
                clientId={clientId}
                render={renderProps => (
                    <Button onClick={renderProps.onClick}>Logout</Button>
                    )}
                buttonText="Logout"
                onLogoutSuccess={logout}
            />
            <Redirect to='/home'/>  
            </div> :
            <Redirect to='/' />
            }
            
        </div>
    )
}

export default Logout
