"use client";
import { useState, useRef } from "react";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  const addTask = () => {
    const text = inputRef.current.value;
    const newTask = { completed: false, text };
    setTasks([...tasks, newTask]);
    inputRef.current.value = "";
  }
  const doneTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <ul>
        {
          tasks.map((task, index) => (
            <div className="f">
              <li key={index} onClick={() => doneTask(index)}
                className={task.completed ? "d" : "w"}>{task.text}
              </li>
              <span onClick={() => deleteTask(index)}>❌</span>
            </div>
          ))
        }
      </ul>
      <input ref={inputRef} type="text" placeholder="Add a new task" />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default App;
