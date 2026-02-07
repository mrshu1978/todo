import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (text) => {
    const newTodo = { id: crypto.randomUUID(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className='app-container'>
      <header>
        <h1>My Todo List</h1>
      </header>
      <main className='todo-main'>
        <TodoInput onAdd={handleAddTodo} />
      </main>
    </div>
  );
}

export default App;
