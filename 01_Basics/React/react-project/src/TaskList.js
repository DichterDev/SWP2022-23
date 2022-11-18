import React, {Component} from "react";
import './Todo.css';
import Task from './Task.js';

class TaskList extends Component {

    constructor(props){
        super(props);
        this.removeTask = this.removeTask.bind(this);
    }

    removeTask = (element) => {
        console.log(element);
        this.setState({tasks: this.props.tasks.splice(this.props.tasks.indexOf(element), 1)})
    }

}

export default TaskList;