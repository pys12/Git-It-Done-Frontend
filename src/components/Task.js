import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Task = ({  task, updateTask,deleteTask }) => {
    const removeTask = () => {
        deleteTask(task._id)
        
    }
  
    const [editForm, setEditForm] = useState(task)

    const handleChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTask(editForm, task._id)
        
    }
    return (
    <div>
        <button onClick={removeTask}>Delete</button>
        <Link to={`/home/${task._id}`}><div>{task.title}</div></Link>
        <div>{task.description}</div>
        <div>{task.categories}</div>
        <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name='title' placeholder='Add a task' value={editForm.title} onChange={handleChange}/>
                <label>Description</label>
                <input type="text" name='description' placeholder='Add a detailed description' value={editForm.description} onChange={handleChange}/>
                <label>Categories</label>
                <input type="text" name='categories' placeholder='Pick a category' value={editForm.categories} onChange={handleChange}/>
                <input type="submit" value='Update' />
        </form>
    </div>
    )
}

export default Task
