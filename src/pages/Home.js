import React from 'react'
import Sidebar from '../components/Sidebar'
import TaskContainer from '../components/TaskContainer'
const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Sidebar />
            <TaskContainer/>
        </div>
    )
}

export default Home
