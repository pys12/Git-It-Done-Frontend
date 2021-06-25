import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { Redirect } from 'react-router-dom'
import './Login.css'
import { BiLogInCircle } from "react-icons/bi";
import { Tooltip } from 'antd';

const Login = ({user,clientId,setUser}) => {
    
    
    const onSuccss = (response) => {
        console.log('login success')
        console.log(response.profileObj)
        setUser(response.profileObj)
        localStorage.setItem("user", JSON.stringify(response.profileObj))
    }
   
    const onFailure = (response) => {
        console.log(`Login Failed ${response.profileObj}`)
        
    }
 
    
    return (
        <div >
            {user === '' ?
                
            <GoogleLogin
            clientId={clientId}
            render={renderProps => (
                <Tooltip title='Login' color={"#c2dada"}>
                    <span className='login-icon'><BiLogInCircle onClick={renderProps.onClick} /></span>
                </Tooltip>
            )}
            onSuccess={onSuccss}
            onFailure={onFailure}
            />
            :
            <div>
                    <Redirect to='/home' />
                    <Tooltip title={user.name} color={"#c2dada"}>
                        <span>
                           <img className='profilePic' src={user.imageUrl} alt="profilePic" />
                        </span>
                    </Tooltip>
            </div>
            }
        </div>
    )
}

export default Login
