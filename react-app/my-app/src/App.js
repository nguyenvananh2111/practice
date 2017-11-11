import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

let tasksList = ['Task 1', 'Task 2'];

export default class App extends Component {
  render() {
    return (
      <div>
        <Todo tasks = {tasksList}/>
      </div>
    );
  }
}

