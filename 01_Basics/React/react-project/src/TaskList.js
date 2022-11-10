import React, {Component} from "react";
import Task from './Task.js';

class TaskList extends Component {
    render() {
        return(
            <div>
                {this.props.tasks.map(task => <Task task={task}/>)}
            </div>
        );
    }
}

export default TaskList;