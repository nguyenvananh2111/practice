import React, { Component } from 'react';
export default class ToDoAppList extends Component {
  constructor(props){
    super(props);
  }

  remove(event){
    let value = event.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);
  }

  render(){
    let items = this.props.tasks.map(
      (item, index)=>
      <li key={index}><span>{item}</span><button onClick={this.remove.bind(this)}>X</button></li>
    );
    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}