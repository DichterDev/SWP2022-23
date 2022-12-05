import React from 'react'

export interface ITask {
    name: string,
    description: string,
    date: Date,
    isDone: boolean
}

function Task(task: ITask) {
    return (
        <div>
            <p className="title">
                {task.name}
            </p>
            <p className="description">
                {task.description}
            </p>
            <p className="timestamp">
                {task.date.toString()}
            </p>

            <div>
                <img alt=''></img>
            </div>
        </div>
    );
}

export default Task;