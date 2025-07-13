import React, { useState } from 'react';
import Todo from './Todo';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask('');
  };

  const deleteTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      {todos.length === 0 ? (
        <p className="empty">No tasks added yet!</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              index={index}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;