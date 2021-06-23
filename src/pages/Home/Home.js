import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import TaskContainer from '../../components/Task/TaskContainer'
import './Home.css'
import { Layout } from 'antd'
import { Route, Switch } from "react-router-dom";

const Home = () => {
    const { Content, Sider } = Layout;
    return (
        <div className='home'>
            <Layout >
                <Sider ><Sidebar /></Sider>
                <Route path='/home/workspaces/:id' render={(rp) => (<TaskContainer {...rp} />)}/>
            </Layout  >
        </div>
    )
}

export default Home
