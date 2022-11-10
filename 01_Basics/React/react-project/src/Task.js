import './Todo.css';
import React, {Component} from "react";

class Task extends Component {
    render() {
        return(
            <div class="task">
                <div name="name">{this.props.task.name}</div>
            </div>
        )
    };
}

export default Task;