import React,{useState} from 'react'
import Task from './Task'
//import { Link } from 'react-router-dom';

const TaskContainer = () => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')
    const [description,setDescription] = useState('')
    const [category, setCategory] = useState('')
    
    const onSave = (task) => {
        const newTask = { ...task }
        setTasks([...tasks, newTask])
        console.log(task)
        console.log(tasks)
    }
    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!task) {
          alert('Please add a task')
          return
        }
        onSave({ task, description, category })
        
        setTask('')
        setDescription('')
        setCategory('')
    }
    
    return (
        <div>
            <h1>Tasks Area</h1>
                <div>Create Task</div>
                {/* add hover effects here */}
            <form  onSubmit={onSubmit}>
                <div>
                    <label>Task</label>
                    <input type="text" placeholder='Add a task' value={task} onChange={(e)=>{setTask(e.target.value)}}/>
                    <label>Description</label>
                    <input type="text" placeholder='Add a detailed description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                    <label>Category</label>
                    <input type="text" placeholder='Pick a category' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                    <input type="submit" value='Save' onClick={onSave}/>
                </div>
            </form>
            {tasks.map((task, index) => (
                <Task key={index} task={task}  />
             ))}
        </div>
    )
}

export default TaskContainer
