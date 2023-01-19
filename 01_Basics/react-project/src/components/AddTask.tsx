import react, { useState } from 'react'
import { ITask } from './Task'
import './../App.css';

interface IAddTask {
    addTask: (task: ITask) => void
}

function AddTask({addTask}: IAddTask) {
    
    const [task, setTask] = useState<ITask>({
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
        addTask(_task);
    }
    
    return(

        <form className='add-task' onSubmit={handleSubmit}>
            <input className='input-task-name' onChange={handleNameChange}></input>
            <input className='input-task-description' onChange={handleDescriptionChange}></input>
            <input type='submit' value='Add Task'></input>
        </form>
    );
}

export default AddTask;