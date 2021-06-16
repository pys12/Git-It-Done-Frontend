import React from 'react'
import { Route, Switch } from "react-router-dom";
import Index from './pages/Index'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

function App() {

  
  
  return (
    <div className="App">
      <Header />
      <Container>
      <Switch>
        <Route component={Home} path='/home'/>
        <Route component={Index} path='/'/>
      </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
