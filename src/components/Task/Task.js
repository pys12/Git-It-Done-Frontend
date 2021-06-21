import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Space, Card } from 'antd';
import { EditTwoTone, DeleteTwoTone  } from '@ant-design/icons';

const Task = ({ task, updateTask, deleteTask }) => {
    const [showEdit, setShowEdit] = useState(false)
    const onToggle =() => {
        setShowEdit(!showEdit)
    }

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
        setShowEdit(!setShowEdit)
    }
    
    return (
        <div>
            <Space direction="vertical">
                <Card title={task.status} style={{ width: 300 }}>
                    <div>
                        <Link to={`/home/tasks/${task._id}`}>{task.title}</Link><EditTwoTone twoToneColor="#52c41a" onClick={onToggle}/><DeleteTwoTone twoToneColor="#52c41a" onClick={removeTask}/>
                    </div>
                    <div>{task.description}</div>
                    {showEdit &&
                        <form onSubmit={handleSubmit}>
                            <label>Title</label>
                            <input type="text" name='title' placeholder='Add a task' value={editForm.title} onChange={handleChange} />
                            <label>Description</label>
                            <input type="text" name='description' placeholder='Add a detailed description' value={editForm.description} onChange={handleChange} />
                            <label>Status</label>
                            <input type="text" name='status' placeholder='Pick a status' value={editForm.status} onChange={handleChange} />
                            <input type="submit" value='Update' />
                        </form>
                    }
                </Card>
            </Space>
    </div>
    )
}

export default Task
