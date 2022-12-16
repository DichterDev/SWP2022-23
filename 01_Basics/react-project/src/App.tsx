import React, { useState } from 'react';
import logo from './logo.svg';
import { ITask } from './components/Task';
import AddTask from './components/AddTask';
import './App.css';
import Tasklist from './components/TaskList';

function App() {
  const [tasks, _setTasks] = useState<ITask[]>([]);

  function setTasks (_tasks: ITask[]) {
    _setTasks([..._tasks])
  }

  function addTask(task:ITask)  {
    setTasks([...tasks, {...task}]);
  }

  function removeTask(index:number) {
    let _tasks = tasks;
    _tasks.slice(index, 1);
    setTasks(_tasks);
  }

  return (
    <div className="wrapper">
      <div className='todo'>
        <h2>
          ToDo
        </h2>
        <AddTask addTask={addTask}></AddTask>
        <Tasklist tasklist={[...tasks.filter(task => task.isDone === false)]}></Tasklist>
      </div>
      <div className='completed'>
        <h2>
          Completed
        </h2>
        <Tasklist tasklist={[...tasks.filter(task => task.isDone === true)]}></Tasklist>
      </div>
    </div>
  );
}

export default App;
