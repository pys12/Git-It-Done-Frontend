import React from 'react'
import Sidebar from './components/Sidebar'
import Tasks from './components/TaskContainer'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
