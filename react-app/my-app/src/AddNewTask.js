import React, { Component } from 'react';
export default class AddNewTask extends Component {
  constructor(props){
    super(props);
  }

  justSubmitted(event){
    event.preventDefault();
    let text = event.target.querySelector('input').value;
    this.props.updateList(text);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.justSubmitted.bind(this)}>
          <input type='text'/> 
        </form>
      </div>
    )
  }
}