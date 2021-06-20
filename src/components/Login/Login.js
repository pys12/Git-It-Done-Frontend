import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { Redirect } from 'react-router-dom'
import './Login.css'
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
        <div>
        {user === '' ?
            
         <GoogleLogin
         clientId={clientId}
         render={renderProps => (
            <button onClick={renderProps.onClick}>Login</button>
         )}
          buttonText='Login'
          onSuccess={onSuccss}
          onFailure={onFailure}
          //cookiePolicy={'single_host_origin'}
            />
        : <div>
            <Redirect to='/home' />
            <img className='profilePic' src={user.imageUrl} alt="profilePic" />
            {/* <h3>Welcome {user.name}</h3> */}
        </div>
        }
        
        </div>
    )
}

export default Login
