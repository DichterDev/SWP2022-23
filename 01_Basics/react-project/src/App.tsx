import React, { useState } from 'react';
import { ITask } from './components/Task';
import AddTask from './components/AddTask';
import './App.css';
import Tasklist from './components/TaskList';

//TODO: Add EDIT TASK

export interface ITaskFunctions {
  changeCompletionStatus: (index:number) => void;
  removeTask: (index:number) => void;
}

function App() {
  const [tasks, _setTasks] = useState<ITask[]>([]);

  function setTasks (_tasks: ITask[]) {
    _setTasks([..._tasks])
  }

  function addTask(task:ITask) {
    setTasks([...tasks, {...task}]);
  }

  function changeCompletionStatus(index: number) {
    let _tasks: ITask[] = [...tasks];
    _tasks[index].isDone = !_tasks[index].isDone;
    setTasks(_tasks);
    console.log('change');
    console.log(_tasks);
    
  }

  function removeTask(index:number) {
    let _tasks = tasks;
    _tasks.splice(index, 1);
    console.log(_tasks);
    
    setTasks(_tasks);
    console.log('remove');
    
  }

  const taskFunctions: ITaskFunctions = {
    changeCompletionStatus: changeCompletionStatus,
    removeTask: removeTask
  }

  return (
    <div className="wrapper">
      <div className='todo'>
        <h2>
          ToDo
        </h2>
        <AddTask addTask={addTask}></AddTask>
        <Tasklist tasklist={[...tasks.filter(task => task.isDone === false)]} taskFunctions={taskFunctions}></Tasklist>
      </div>
      <div className='completed'>
        <h2>
          Completed
        </h2>
        <Tasklist tasklist={[...tasks.filter(task => task.isDone === true)]} taskFunctions={taskFunctions}></Tasklist>
      </div>
    </div>
  );
}

export default App;