import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import TaskContainer from '../../components/Task/TaskContainer'
import './Home.css'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
const Home = () => {
    const { Content, Sider } = Layout;
    return (
        <div className='home'>
            <Layout >
                <Sider ><Sidebar /></Sider>
                <TaskContainer />
                
            </Layout  >
                
        </div>
    )
}

export default Home
