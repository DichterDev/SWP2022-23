import react, { useState, useRef } from 'react'
import { ITask } from './Task'
import './../App.css';

interface IAddTask {
    addTask: (task: ITask) => void
}

function AddTask({addTask}: IAddTask) {
    
    const taskCounter = useRef(0);

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
        if (!task.name) _task.name = 'Task';
        if(!task.description) _task.description = 'Lorem Ipsum';
        _task.index = taskCounter.current++;
        _task.date = new Date();
        addTask(_task);
    }
    
    return(

        <form className='add-task box' onSubmit={handleSubmit}>
            <input type='text' className='input-task-name' placeholder='Title' onChange={handleNameChange}></input>
            <input type='text' className='input-task-description' placeholder='Description' onChange={handleDescriptionChange}></input>
            <input type='submit' className='button save' value='Add Task'></input>
        </form>
    );
}

export default AddTask;