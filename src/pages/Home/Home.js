import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Workspaces from '../../components/Workspace/Workspaces'
import './Home.css'
import { Layout} from 'antd'
const Home = () => {
    const { Header, Content, Footer, Sider } = Layout;
    return (
        <div className='home'>
            <Layout >
                <Sider><Sidebar /></Sider>
                <Content><Workspaces /></Content>
                
            </Layout  >
                
        </div>
    )
}

export default Home
