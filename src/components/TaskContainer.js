import React,{useState,useEffect} from 'react'
import Task from './Task'
//import { Link } from 'react-router-dom';

const TaskContainer = () => {
    const [tasks, setTasks] = useState(null)
    const URL = "http://localhost:5000/api/tasks";
    
    const [form, setForm] = useState({
        title: "",
        description: "",
        categories:""
    })
   
    
    const getTasks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setTasks(data);
    };
    const createTask = async (task) => {
        await fetch(URL, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task)
        }).then(console.log(task));

        getTasks();
    };
    const handleChange = (e) => {
        console.log(e.target.name);
        setForm({...form, [e.target.name]: e.target.value });
        console.log(form)
      };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(form);
        setForm({
            title: "",
            description: "",
            categories:""
        })
    }
    useEffect(() => getTasks(), []);
    
    const loaded = () => {
        return tasks.map((task, index) => (
            <Task key={index} task={task}  />
        ))
    }
    const loading = () => {
        return <h1>loading now..</h1>
    }
    
    return (
        <div>
            <h1>Tasks Area</h1>
                <div>Create Task</div>
                {/* add hover effects here */}
            <form  onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name='title' placeholder='Add a task' value={form.title} onChange={handleChange}/>
                    <label>Description</label>
                    <input type="text" name='description' placeholder='Add a detailed description' value={form.description} onChange={handleChange}/>
                    <label>Categories</label>
                    <input type="text" name='categories' placeholder='Pick a category' value={form.categories} onChange={handleChange}/>
                    <input type="submit" value='Save' />
                </div>
                {tasks ? loaded() : loading()}
            </form>
            
        </div>
    )
}

export default TaskContainer
