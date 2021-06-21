import React from 'react'
import './Sidebar.css'
import Workspaces from '../../components/Workspace/Workspaces'
//import { Menu } from 'antd';

const Sidebar = () => {
    //const { SubMenu } = Menu;
    return (
        <div className='sidebar'>
            {/* <Menu>
            <SubMenu title="Navigation One">
                <Menu.Item >Sidebar</Menu.Item>
            </SubMenu> */}
             <div>Sidebar</div>
             <div>Search Bar</div>
             <div><Workspaces /></div>
            {/* </Menu> */}
        </div>
    )
}

export default Sidebar
