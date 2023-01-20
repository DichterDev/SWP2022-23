import React from 'react'
import react, { useState } from 'react';
import Task, { ITask } from './Task';
import './../App.css';

export interface IEditTask {
    editTask: (task:ITask) => void;
}

function EditTask({editTask}: IEditTask) {
    const [task, setTask] = useState<ITask>({
        index: 0,
        name: '',
        description: '',
        date: new Date(),
        isDone: false
    });

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
        editTask(task);
    }

    return (
        <div className='edit-task'>

        </div>
    );
}

export default EditTask;