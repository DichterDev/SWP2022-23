import React from 'react'
import react, { useState } from 'react';
import Task, { ITask } from './Task';
import { IEditTaskFunctions } from '../App';
import './../App.css';

interface _IEditTask {
    editTask: ITask;
    editTaskFunctions: IEditTaskFunctions;
}

function EditTask({editTask, editTaskFunctions}: _IEditTask) {
    const [task, setTask] = useState<ITask>(editTask);

    const handleNameChange = (event: react.ChangeEvent<HTMLInputElement>) => {
        let _task = task;
        _task.name = event.target.value;
        setTask(_task);
    }

    const handleDescriptionChange = (event: react.ChangeEvent<HTMLInputElement>) => {
        let _task = task;
        _task.description = event.target.value;
        setTask(_task);
    }

    const handleSubmit = (event: react.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let _task = task;
        _task.date = new Date();
        editTaskFunctions.changeTask(task.index, task);
    }

    return (
        <form className='edit-task' onSubmit={handleSubmit}>
            <input className='input-task-name' placeholder={task.name} onChange={handleNameChange}></input>
            <input className='input-task-description' onChange={handleDescriptionChange}></input>
            <input type='submit' className='button save' value='Save'></input>
            <div className='button cancel' onClick={() => editTaskFunctions.hideEditTask}>Cancel</div>
        </form>
    );
}

export default EditTask;