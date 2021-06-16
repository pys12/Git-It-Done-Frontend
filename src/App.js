import React from 'react'
import Sidebar from './components/Sidebar'
import Tasks from './components/TaskContainer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
      <Header />
      <Sidebar />
      <Tasks />
      <Button>Button</Button>
      </Container>
    </div>
  );
}

export default App;
