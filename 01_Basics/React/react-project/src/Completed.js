import React, {Component} from "react";
import './Todo.css';
import Task from './Task.js';
import {CiCircleChevRight, CiCircleChevDown} from 'react-icons/ci'

class Completed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange() {
        this.setState({isHidden: !this.state.isHidden});
      }

      handleSubmit() {
      }

    render() {
        return(
            <div class="completed">
                <p onClick={this.handleChange}>{(this.state.isHidden) ? <CiCircleChevRight /> : <CiCircleChevDown />} Completed</p>
                <div class="task-list" hidden={this.state.isHidden}>
                    {this.props.tasks.map(task => <Task task={task}/>)}
                </div>
            </div>
        );
    }
}

export default Completed;