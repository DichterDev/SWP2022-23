import React from 'react'
import Task, { ITask } from './Task';
import { ITaskFunctions } from '../App';
import './../App.css';

interface TaskList {
    tasklist: ITask[];
    taskFunctions: ITaskFunctions;
}

function Tasklist({tasklist, taskFunctions}: TaskList) {

    if (!tasklist?.length) {
        return(
            <div className='tasklist'>
                <p>
                    No tasks available
                </p>
            </div>
        )
    }

    return (
        <div className='tasklist'>
            {
                tasklist.map((task, index) => {
                    return(
                        <Task index={index} task={task} taskFunctions={taskFunctions}></Task>
                    )
                })
            }
        </div>
    );
}

export default Tasklist;