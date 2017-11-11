import React, { Component } from 'react';
import AddNewTask from './AddNewTask';
import ToDoAppList from './ToDoAppList';
export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: this.props.tasks
    }
  }

  updateList(text){
    let updateTasks = this.state.tasks;
    updateTasks.push(text);
    this.setState({tasks: updateTasks});
  }

  remove(value){
    let updateTasks = this.state.tasks;
    updateTasks.splice(updateTasks.indexOf(value),1);
    this.setState({tasks: updateTasks});
  }

  render(){
    return (
      <div>
        <h1>Todo Apps</h1>
        <AddNewTask updateList = {this.updateList.bind(this)}/>
        <ToDoAppList 
          tasks = {this.state.tasks}
          remove = {this.remove.bind(this)}
        />
      </div>
    )
  }
}