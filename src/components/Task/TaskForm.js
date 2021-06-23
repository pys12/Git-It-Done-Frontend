import React,{useState} from 'react'
import { Modal, Button } from 'antd';

const TaskForm = ({ createTask, workspaceId }) => {
     
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const [taskForm, setTaskForm] = useState({
        title: "",
        description: "",
        status:""
    })

    const handleChange = (e) => {
       // console.log(e.target.name);
       setTaskForm({...taskForm, [e.target.name]: e.target.value });
        //console.log(form)
      };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const card = taskForm;
        card.userId = JSON.parse(localStorage.getItem('user')).googleId;
        card.workspaceId = workspaceId;
        createTask(card);
        setTaskForm({
            title: "",
            description: "",
            status:""
        })
        setIsModalVisible(false);


    }
    return (
            <div>
             <Button type="primary" onClick={showModal}> Create </Button>
             <Modal title="Create a task" visible={isModalVisible} onOk={handleSubmit} onCancel={handleCancel}>
             <form>
                <p><label>Title</label></p>
                <p><input type="text" name='title' placeholder='Add a task' value={taskForm.title} onChange={handleChange}/></p>
                <p><label>Description</label></p>
                <p> <input type="text" name='description' placeholder='Add a detailed description' value={taskForm.description} onChange={handleChange}/></p>
                <p><label>Status</label></p>
                <p> <input type="text" name='status' placeholder='Pick a status' value={taskForm.status} onChange={handleChange}/></p>
            </form>
            </Modal>
            </div>
         
        
    )
}

export default TaskForm
