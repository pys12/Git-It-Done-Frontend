import React, { useState } from 'react'


const WorkspaceForm = ({ createWorkspace,showCreate,setShowCreate}) => {

    const [workspaceForm, setWorkspaceForm] = useState({
        title: "",
        statuses: "",
    })

    const handleChange = (e) => {
        console.log(e.target.name);
        setWorkspaceForm({...workspaceForm, [e.target.name]: e.target.value });
        console.log(workspaceForm)
      };
    
      
      const handleSubmit = (e) => {
        e.preventDefault()
        const space = workspaceForm;
        space.userId = JSON.parse(localStorage.getItem('user')).googleId
        console.log(space)
        createWorkspace(space);
        setWorkspaceForm({
            title: "",
            statuses: "",
            
        })
        setShowCreate(!showCreate)
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name='title' placeholder='Add a workspace name' value={workspaceForm.title} onChange={handleChange}/>
                <label>Statuses</label>
                <input type="text" name='statuses' placeholder='Add a status' value={workspaceForm.statuses} onChange={handleChange}/>
                
                <input type="submit" value='Add' />
            </form>
            
        </div>
    )
}
 

export default WorkspaceForm
