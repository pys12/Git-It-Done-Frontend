import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import './Workspace.css'

const Workspace = ({ workspace, updateWorkspace, deleteWorkspace }) => {

    const [showEdit, setShowEdit] = useState(false)
  
    const onToggle =() => {
        setShowEdit(!showEdit)
    }
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
        setShowEdit(!showEdit)
    }
   
    return (
        <div className='workspace'>
            <Link to={`/home/workspaces/${workspace._id}`}>{workspace.title}</Link>
            <EditTwoTone twoToneColor="#5aadad" onClick={onToggle} /><DeleteTwoTone twoToneColor="#5aadad" onClick={removeWorkspace} />
            {showEdit &&
             <form >
                <label>Title</label>
                <input type="text" name='title'  value={editWorkspaceForm.title} onChange={handleChange} size="10"/>
                {/* <label>Statuses</label>
                <input type="text" name='statuses' value={editWorkspaceForm.statuses} onChange={handleChange} size="8"/> */}
                <Button className='update-btn' onClick={handleSubmit}>Update</Button>
            </form>
            }
        </div>
    )
    
    
}

export default Workspace
