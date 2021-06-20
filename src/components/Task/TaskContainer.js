import React,{useState,useEffect} from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import { PlusCircleTwoTone } from '@ant-design/icons';

const TaskContainer = () => {
  const [tasks, setTasks] = useState(null)
  const [showCreate, setShowCreate] = useState(false)
  const onToggle =() => {
     setShowCreate(!showCreate)
  }
    
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
      const userId = JSON.parse(localStorage.getItem('user')).googleId
      return tasks.map((task, index) => {
         //console.log(userId)
        if (task.userId === userId) {
          return <Task key={index} tasks={tasks} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        }
      })
    }
    const loading = () => {
        return <h1>loading now..</h1>
    }
    
    return (
        <div>
            <div>Create Task<PlusCircleTwoTone twoToneColor="#52c41a" onClick={onToggle}/></div>

            {showCreate && <TaskForm createTask={createTask} showCreate={showCreate} setShowCreate={setShowCreate} />}
            {tasks ? loaded() : loading()}
            
        </div>
    )
}

export default TaskContainer
