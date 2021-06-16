import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

const Task = ({task}) => {
    return (
    <div>
        <Card>
        <div>{task.title}</div>
        <div>{task.description}</div>
        <div>{task.categories}</div>
        </Card>
    </div>
    )
}

export default Task
