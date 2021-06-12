import React,{useState} from 'react'
import { GoogleLogin } from 'react-google-login'
import { GoogleLogout } from 'react-google-login';
import Sidebar from './components/Sidebar'
import Tasks from './components/TaskContainer'
import Header from './components/Header'

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")) : '')

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj)
    setUser(response.profileObj)
    localStorage.setItem("user",JSON.stringify(response.profileObj))
  }
  const logout = ()=>{
    console.log('logout success!')
    setUser('')
    console.log(JSON.parse(localStorage.getItem("user")))
    localStorage.clear()
  }
  return (
    <div className="App">
      {user === '' &&
        <GoogleLogin
          clientId='1065711859175-1b0qoiugiom8c5cqgfenc7dhal0f6q0p.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      }
      {user !== '' &&
        <div>
          <h3>Welcome {user.name}</h3>
          <img src={user.imageUrl} alt="profilePic" />
          <GoogleLogout
            clientId='1065711859175-1b0qoiugiom8c5cqgfenc7dhal0f6q0p.apps.googleusercontent.com'
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </div>
      }
      <Header />
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
