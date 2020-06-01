import React from 'react'

const DisplayTasks = (props) => {

    const allTasks = props.tasks.map(task => {
        return (
            <div key={task.id}>
            <br></br>
                {task.title}
                <button type="submit" onClick={() => props.editTask(task.id)}>EDIT TASK</button>
                <button type="submit" onClick={() => props.deleteTask(task.id)}>DELETE TASK</button>
            </div>
        )
    })

    return (
        <div> {allTasks} </div>
    )
}
export default DisplayTasks