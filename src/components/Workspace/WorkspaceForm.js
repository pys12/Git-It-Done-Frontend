import React, { useState } from 'react'
import { Button } from 'antd';
import './Workspace.css'

const WorkspaceForm = ({ createWorkspace,showCreate,setShowCreate}) => {

    const [workspaceForm, setWorkspaceForm] = useState({
        title: "",
        statuses: "",
    })

    const handleChange = (e) => {
        //console.log(e.target.name);
        setWorkspaceForm({...workspaceForm, [e.target.name]: e.target.value });
        //console.log(workspaceForm)
      };
    
      
      const handleSubmit = (e) => {
        e.preventDefault()
        const space = workspaceForm;
        space.userId = JSON.parse(localStorage.getItem('user')).googleId
        createWorkspace(space);
        console.log(space)
          
        setWorkspaceForm({
            title: "",
            statuses: "",
            
        })
        setShowCreate(!showCreate)
      }
  
    return (
        <div>
            <form className='create-form'  >
                <label>Title </label>
                <input type="text" name='title' size='10' value={workspaceForm.title} onChange={handleChange}/>
                {/* <label>Statuses</label>
                <input type="text" name='statuses' size='8' value={workspaceForm.statuses} onChange={handleChange}/> */}
                <Button onClick={handleSubmit}>Create</Button>
            </form>
        </div>
    )
}
 

export default WorkspaceForm
