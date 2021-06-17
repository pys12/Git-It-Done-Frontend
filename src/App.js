import React from 'react'
import { Route, Switch } from "react-router-dom";
import Index from './pages/Index'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={Home} path='/home'/>
        <Route component={Index} path='/'/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
