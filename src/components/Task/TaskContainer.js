import React, { useState, useEffect } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import Search from "../Search/Search";
const TaskContainer = (props) => {
  const [tasks, setTasks] = useState("");

  const workspaceId = props.match.params.id;
  //console.log(workspaceId)

  const taskURL = "https://git-it-done-backend.herokuapp.com/api/tasks/";
  const URL = `https://git-it-done-backend.herokuapp.com/api/workspaces/${workspaceId}/alltasks`;

  const getTasks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data)
    setTasks(data);
  };

  const createTask = async (task, id) => {
    await fetch(taskURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then(console.log(task));

    getTasks();
  };

  const updateTask = async (task, _id) => {
    await fetch(taskURL + _id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    getTasks();
  };

  const deleteTask = async (id) => {
    await fetch(taskURL + id, {
      method: "delete",
    });
    getTasks();
  };

  const searchTask = (searchTerm) => {
    //console.log('search term:'+ searchTerm)
    if (searchTerm === "") {
      setTasks(tasks);
    } else {
      setTasks(
        tasks.filter(
          (searched) =>
            searched.title.toLowerCase() === searchTerm.toLowerCase()
        )
      );
    }
  };

  useEffect(() => {
    let isMounted = true;
    getTasks();
  }, [workspaceId]);

  const loaded = () => {
    //const userId = JSON.parse(localStorage.getItem('user')).googleId
    return tasks.map((task, index) => {
      //console.log(userId)
      //if (task.userId === userId) {
        console.log(task)
      return (
        <Task
          key={index}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      );
      
    });
    //})
  };
  
  const loading = () => {
    return <h1>loading now..</h1>;
  };

  return (
    <div>
      <Search search={searchTask} />
      <TaskForm createTask={createTask} workspaceId={workspaceId} />
      {tasks ? loaded() : loading()}
    </div>
  );
};

export default TaskContainer;
