// import logo from './logo.svg';
import './Todo.css';
import React, {Component} from 'react';
import TodoList from './TaskList.js';
import Task from './Task.js'
import Completed from './Completed.js';

class Todo extends Component{
  constructor(props) {
    super(props);
    this.completedTasks = []
    this.todo = []
    this.state = {
      tasks: [],
      task: {
        completed: true
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.checkCompletion = this.checkCompletion.bind(this);
  }

  handleChange(event) {
    this.setState({task: {name: event.target.value}});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task]
    });
    this.checkCompletion()
  }

  checkCompletion() {
    if (this.state.task.completed) {
      this.completedTasks.push(this.state.task)
    }
    else {
      this.todo.push(this.state.task)
    }
  }

  removeTask (event, element) {
    console.log(element);
    this.setState({tasks: this.state.tasks.splice(this.state.tasks.indexOf(element), 1)})
    this.checkCompletion()
  }

  render() {
    return (
      <div class="todo">
          <p class="todo-label">TODO</p>
          <div class="add-task">
            <input value={this.state.task.name} onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Add</button>
          </div>
          <div class="task-list">
                {this.state.tasks.map(task => <Task task={task} removeTask={this.removeTask}/>)}
          </div>
          <Completed tasks={this.completedTasks} />
      </div>
    );
  }
}

export default Todo;
