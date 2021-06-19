import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Workspace = ({  workspace, updateWorkspace,deleteWorkspace }) => {
    const removeWorkspace = () => {
        deleteWorkspace(workspace._id)
        
    }
  
    const [editWorkspaceForm, setEditWorkspaceForm] = useState(workspace)

    const handleChange = (e) => {
        setEditWorkspaceForm({ ...editWorkspaceForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateWorkspace(editWorkspaceForm, workspace._id)
        
    }
    return (
    <div>
        <button onClick={removeWorkspace}>Delete</button>
        <Link to={`/home/workspaces/${workspace._id}`}><div>{workspace.title}</div></Link>
        <div>{workspace.description}</div>
        <div>{workspace.categories}</div>
        <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name='title' placeholder='Add a task' value={editWorkspaceForm.title} onChange={handleChange}/>
                <label>Statuses</label>
                <input type="text" name='statuses' placeholder='' value={editWorkspaceForm.statuses} onChange={handleChange}/>
                
                <input type="submit" value='Update' />
        </form>
    </div>
    )
}

export default Workspace
