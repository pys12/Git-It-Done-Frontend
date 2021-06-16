import React,{useState,useEffect} from 'react'
import Task from './Task'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import '../stylesheets/taskContainerStyles.css'
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
                <h4>Create Task</h4>
                {/* add hover effects here */}
            <Form className='task-form shadow' onSubmit={handleSubmit}>
                <div>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder='Add a task' value={form.title} onChange={handleChange}/>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name='description' placeholder='Add a detailed description' value={form.description} onChange={handleChange}/>
                    <Form.Label>Categories</Form.Label>
                    <Form.Control type="text" name='categories' placeholder='Pick a category' value={form.categories} onChange={handleChange}/>
                    <Button variant="secondary" type="submit" value='Save'>Submit</Button>
                </div>
                {tasks ? loaded() : loading()}
            </Form>
            
        </div>
    )
}

export default TaskContainer
