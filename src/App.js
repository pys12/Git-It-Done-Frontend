import React from 'react'
import { Route, Switch } from "react-router-dom";
import Index from './pages/Index/Index'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TaskContainer from './components/Task/TaskContainer'
import 'antd/dist/antd.css'
function App() {

  
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/home/workspaces/:id' render={(rp) => (<TaskContainer {...rp} />)}/>
        <Route component={Home} path='/home'/>
        <Route component={Index} path='/' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
