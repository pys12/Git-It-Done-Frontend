import React from 'react'
import './Sidebar.css'
import Workspaces from '../../components/Workspace/Workspaces'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div>Sidebar</div>
            <div>Search Bar</div>
            <div><Workspaces/></div>
        </div>
    )
}

export default Sidebar
