import React from 'react';
import {CiTrash} from 'react-icons/ci';
import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from 'react-icons/md';
import './../App.css';
import {ITaskFunctions} from '../App';

export interface ITask {
    index: number,
    name: string,
    description: string,
    date: Date,
    isDone: boolean
}

interface _Task {
    index: number;
    task: ITask;
    taskFunctions: ITaskFunctions;
}

function Task({index, task, taskFunctions}: _Task) {
    return (
        <div className='task box default-cursor'>
            <div className="task-completion task-icon" onClick={() => taskFunctions.changeCompletionStatus(task.index)}>
                {
                    (task.isDone) ? <MdOutlineCheckBox size={70} className='icon'></MdOutlineCheckBox> : <MdOutlineCheckBoxOutlineBlank size={70} className='icon'></MdOutlineCheckBoxOutlineBlank>
                }
            </div>
            <div className='task-information' onClick={() => taskFunctions.showEditTask(task.index)}>
                <p className="task-title">
                    {task.name}
                </p>
                <p className="task-description">
                    {task.description}
                </p>
                <p className="task-timestamp">
                    Created: {task.date.toUTCString()}
                </p>
            </div>
            <div className="task-delete task-icon" onClick={() => taskFunctions.removeTask(index)}>
                <CiTrash size={70} className='icon'></CiTrash>
            </div>
        </div>
    );
}

export default Task;