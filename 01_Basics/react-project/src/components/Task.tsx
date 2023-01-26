import React from 'react';
import { IconContext, icons } from 'react-icons/lib';
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
    const iconSize: number = 42;
    
    return (
        <div className='task box default-cursor'>
            <IconContext.Provider value={{size: `${iconSize}px`}}>
                <div className="task-completion task-icon" onClick={() => taskFunctions.changeCompletionStatus(task.index)}>
                    {
                        (task.isDone) ? <MdOutlineCheckBox className='icon'></MdOutlineCheckBox> : <MdOutlineCheckBoxOutlineBlank className='icon'></MdOutlineCheckBoxOutlineBlank>
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
                    <CiTrash className='icon'></CiTrash>
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Task;