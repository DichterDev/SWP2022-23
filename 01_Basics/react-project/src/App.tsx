import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { ITask } from './components/Task';
import AddTask from './components/AddTask';
import Tasklist from './components/TaskList';
import EditTask from './components/EditTask';

//TODO: Add EDIT TASK

export interface ITaskFunctions {
  changeCompletionStatus: (index:number) => void;
  removeTask: (index:number) => void;
  showEditTask: (index:number) => void;
}

export interface IEditTaskFunctions {
  changeTask: (index:number, task:ITask) => void;
  hideEditTask: () => void;
}

function App() {
  const [tasks, _setTasks] = useState<ITask[]>([]);
  const [editTask, setEditTask] = useState<ITask>({index: 0, name: '', description: '', date: new Date(), isDone: false});
  let editTaskBackup = useRef<ITask>({index: 0, name: '', description: '', date: new Date(), isDone: false});
  const [isEditTaskHidden, setIsEditTaskHidden] = useState(true);

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
    console.log(`${_tasks[index].name} set to ${(_tasks[index].isDone) ? 'Completed' : 'Todo'}`);
  }

  function removeTask(index:number) {
    let _tasks = tasks;
    _tasks.splice(index, 1);
    console.log(_tasks);
    
    setTasks(_tasks);
    console.log('remove');
  }

  function changeTask(index:number, task:ITask) {
    let _tasks = tasks;
    _tasks[getIndexOfTask(index)] = task;
    setTasks(_tasks);
    hideEditTask()
  }

  function showEditTask (index:number) {
    setEditTask(tasks[getIndexOfTask(index)]);
    editTaskBackup.current = tasks[getIndexOfTask(index)];
    setIsEditTaskHidden(false)
    console.log(`Editing ${editTask.name}`)
  }

  function getIndexOfTask(index:number) {
    return tasks.findIndex(task => task.index === index);
  }

  const hideEditTask = () => setIsEditTaskHidden(true);

  const taskFunctions: ITaskFunctions = {
    changeCompletionStatus: changeCompletionStatus,
    removeTask: removeTask,
    showEditTask: showEditTask
  }

  const editTaskFunctions: IEditTaskFunctions = {
    changeTask: changeTask,
    hideEditTask: hideEditTask
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
      { (isEditTaskHidden) ? null : <EditTask editTask={editTask} editTaskFunctions={editTaskFunctions}></EditTask> }
    </div>
  );
}

export default App;