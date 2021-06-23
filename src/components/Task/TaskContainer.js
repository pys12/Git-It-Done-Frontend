import React,{useState,useEffect} from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import { PlusCircleTwoTone } from '@ant-design/icons';
import Search from '../Search/Search'
const TaskContainer = (props) => {
  
  const [tasks, setTasks] = useState('')
  
  const workspaceId = props.match.params.id

  //console.log(workspaceId)
    //const URL = "http://localhost:5000/api/tasks/";
    const URL = `http://localhost:5000/api/workspaces/${workspaceId}/alltasks`;
    
  const getTasks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setTasks(data);
  };
  
    const createTask = async (task,id) => {
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
    const searchTask = (searchTerm) => {
      console.log('search term:'+ searchTerm)
       if (searchTerm === '') {
          setTasks(tasks)
       } else {
        setTasks(tasks.filter((searched)=> searched.title.toLowerCase() === searchTerm.toLowerCase()))
        }
    }
 
    
    useEffect(() => getTasks(), []);
    
  const loaded = () => {
      const userId = JSON.parse(localStorage.getItem('user')).googleId
      return tasks.map((task, index) => {
         //console.log(userId)
        //if (task.userId === userId) {
          return <Task key={index} tasks={tasks} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        })
      //})
    }
    const loading = () => {
        return <h1>loading now..</h1>
    }
    
    return (
        <div>
          <Search search={searchTask}/>
          <TaskForm createTask={createTask} workspaceId={workspaceId}/>
          {tasks ? loaded() : loading()}
        </div>
    )
}

export default TaskContainer
