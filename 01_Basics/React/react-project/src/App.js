import './App.css';
import React, {Component} from 'react';

function 

class App extends Component {

  tasks = [{
    id: 1, name: "asdf", assigned: "name"
  }];

  constructor() {
    this.tasks = [{}];
  }

  taskname = "";

  return (
    <header>
      Todos
      <div class="add-task">
        <input type="text" value={taskname}></input>
        <button onClick={}>Save</button>
      </div>
      <div class="tasks">
        {tasks && tasks.map(task => 
          <div> 
            {task.name}
          </div>  
        )}
      </div>
    </header>
  );
}

export default App;
