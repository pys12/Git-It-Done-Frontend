import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom'
import './Logout.css'
import { PoweroffOutlined  } from "@ant-design/icons";
import { Tooltip } from 'antd';

const Logout = ({user,clientId,setUser}) => {
    

    const logout = () => {
        console.log('logout success!')
        setUser('')
        console.log(JSON.parse(localStorage.getItem("user")))
        localStorage.clear();
    }
    
    return (
        <div>
            {user !== '' ?
            <div className='logout-icon'>
                <GoogleLogout
                    clientId={clientId}
                    render={renderProps => (
                        <Tooltip title='Logout' color={"#c2dada"}>
                            <span><PoweroffOutlined onClick={renderProps.onClick} /></span>
                        </Tooltip>
                    )}
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
