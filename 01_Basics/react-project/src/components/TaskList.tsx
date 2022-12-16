import React from 'react'
import Task, { ITask } from './Task';
import './../App.css';

interface TaskList {
    tasklist: ITask[];
}

function Tasklist({tasklist}: TaskList) {
    
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
                tasklist.map(task => {
                    return(
                        <Task {...task}></Task>
                    )
                })
            }
        </div>
    );
}

export default Tasklist;