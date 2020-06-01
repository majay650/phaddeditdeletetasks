import React from 'react'


class AddTask extends React.Component {

    state = { title: ''}

    onInputChange = (event) => {
        console.log(event.target.value)
        this.setState({title:event.target.value})
    }

    onButtonClick =() => {
        this.props.addTask(this.state.title)
    }

render(){
    return(
        <div>
        <label>Add Task:</label>
        <input type="text" onChange={this.onInputChange}></input>
        <button type="submit" onClick={this.onButtonClick}>ADD TASK</button>
        </div>
    )
}
}

export default AddTask