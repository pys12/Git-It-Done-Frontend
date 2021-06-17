import React,{useState,useEffect} from 'react'
import Task from './Task'
import Form from './Form'

const TaskContainer = () => {
    const [tasks, setTasks] = useState(null)
    
    const URL = "http://localhost:5000/api/tasks/";
    
    
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
    
    const updateTask = async (task, id) => {
        // make put request to create people
        await fetch(URL + id, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        })
        getTasks();

      }
    
    const deleteTask = async id => {
       
        await fetch(URL + id, {
          method: "delete",
        })
        getTasks();

    }
    
    useEffect(() => getTasks(), []);
    
    const loaded = () => {
        return tasks.map((task, index) => (
            <Task key={index} tasks={tasks} task={task} updateTask={updateTask} deleteTask={deleteTask}  />
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
           <Form createTask={createTask}/>
            {tasks ? loaded() : loading()}
            
        </div>
    )
}

export default TaskContainer
