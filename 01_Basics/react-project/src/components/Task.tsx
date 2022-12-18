import React from 'react'
import './../App.css';

export interface ITask {
    name: string,
    description: string,
    date: Date,
    isDone: boolean
}

interface _Task {
    index: number;
    task: ITask;
    changeCompletion: (index:number) => void;
}

function Task({index, task, changeCompletion}: _Task) {

    return (
        <div className='task'>
            <p className="task-title">
                {task.name}
            </p>
            <p className="task-description">
                {task.description}
            </p>
            <p className="task-timestamp">
                Created: {task.date.toUTCString()}
            </p>

            <div onClick={() => changeCompletion(index)}>
                <img alt=''></img>
            </div>
        </div>
    );
}

export default Task;