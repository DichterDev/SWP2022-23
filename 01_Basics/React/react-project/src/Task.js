import './Todo.css';
import React, {Component} from "react";
import { CiCircleRemove } from 'react-icons/ci';

class Task extends Component {

    render() {
        return(
            <div class="task">
                <div name="name">{this.props.task.name}</div>
                <div onClick={this.props.removeTask(this.props.task)}>
                    <CiCircleRemove />
                </div>
            </div>
        )
    };
}

export default Task;