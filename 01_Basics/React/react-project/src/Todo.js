// import logo from './logo.svg';
import './Todo.css';
import React, {Component} from 'react';
import TodoList from './TaskList.js';

class Todo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({task: {name: event.target.value}});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task]
    });
    console.log(this.state.tasks);
  } 

  render() {
    return (
      <div class="todo">
          <label class="todo-label">TODO</label>
          <div>
            <input value={this.state.task.name} onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Add</button>
          </div>
          <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Todo;
