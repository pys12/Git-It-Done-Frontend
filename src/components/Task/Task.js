import React,{useState,useEffect} from 'react'
import { Space, Card } from 'antd';
import { EditTwoTone, DeleteTwoTone  } from '@ant-design/icons';
import './Task.css'

const Task = ({ task, updateTask, deleteTask }) => {
    const [showContent, setShowContent] = useState(true)
    const [showEdit, setShowEdit] = useState(false)

    const onToggle =() => {
        setShowEdit(!showEdit)
        setShowContent(!showContent)
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
        setShowContent(!showContent)

    }

    useEffect(() => {
        setEditForm(task)
    }, [task]);
    
    return (
        <div>
            <Space direction="horizontal">
                <Card title={task.status} style={{ width: 300, height:200, margin:10 }} extra={<DeleteTwoTone twoToneColor="#5aadad" onClick={removeTask} />}>
                    {showContent &&
                    <>
                    <div className='task-title' >
                        {task.title}<EditTwoTone twoToneColor="#5aadad" onClick={onToggle}/>
                    </div>
                    <div className='task-description' >{task.description}</div>
                    </>
                    }
                    {showEdit &&
                        <form className='editForm' onSubmit={handleSubmit}>
                            <label>Title:</label>
                            <input type="text" name='title' placeholder='Add a task' value={editForm.title} onChange={handleChange} />
                            <label>Description:</label>
                            <input type="text" name='description' placeholder='Add a detailed description' value={editForm.description} onChange={handleChange} />
                            <label>Status:</label>
                            <input type="text" name='status' placeholder='Pick a status' value={editForm.status} onChange={handleChange} />
                            <input className='update-btn' type="submit" value='Update' />
                        </form>
                    }
                </Card>
            </Space>
        </div>
    )
}

export default Task
