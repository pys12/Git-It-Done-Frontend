import React from 'react'

const Task = ({task}) => {
    return (
    <div>
        <div>{task.task}</div>
        <div>{task.description}</div>
        <div>{task.category}</div>
    </div>
    )
}

export default Task
