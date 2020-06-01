import React from 'react'
import TasksAPI from '../apis/TasksAPI'
import DisplayTasks from './DisplayTasks'
import AddTask from './AddTask'

class App extends React.Component {

    state = { tasks: [] }

    async componentDidMount() {
        const response = await TasksAPI.get('projects/4354708170/todolists/127120540806/tasks')

        this.setState({ tasks: response.data })
    }

     addTask = async(title) => {
        const response = await TasksAPI.post('projects/4354708170/todolists/127120540806/tasks', {title})
        console.log("add task" +response.data)
        this.setState({tasks: [response.data, ...this.state.tasks]})
    }

    editTask = async(id) => {
        const response = await TasksAPI.put(`projects/4354708170/todolists/127120540806/tasks/${id}`,
    {
        title:"new updated"
    })
        console.log("edit task" +response.data)

        const newTasks = this.state.tasks.map(task=> {
            if(task.id === id){
                return response.data
            }
            return task
        })
        this.setState({tasks: newTasks})
    }

    deleteTask = async(id) => {
        const response = await TasksAPI.delete(`projects/4354708170/todolists/127120540806/tasks/${id}`,{
        data:{
            id:id
        }
    })
    this.setState({tasks: this.state.tasks.filter(tasks => id!==tasks.id)})
    }

    render() {
        return (
            <div>
            <div><AddTask addTask={this.addTask}></AddTask></div>
                <div><DisplayTasks tasks={this.state.tasks}
                editTask={this.editTask}
                deleteTask={this.deleteTask}>
                </DisplayTasks> </div>
            </div>
        )
    }
}

export default App