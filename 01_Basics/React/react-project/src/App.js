// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  
  let [task, setTaskname] = useState({});
  let [tasks, setTasks] = useState([{}]);

  const handleTasknameChange = (event) => {
    const value = event.target.value;
    setTaskname({
      name: value
    })
  };

  const handleTaskChange = () => {
    const value = tasks.push(task);
    setTasks(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        TODO
        <div>
          <input value={task.name} onChange={handleTasknameChange}></input>
          <button onClick={handleTaskChange}></button>
        </div>
        <ul>
          {
            tasks.forEach(task => {
              <li>{task.name}</li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
