import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (text) => {
    const newTodo = { id: crypto.randomUUID(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className='app-container'>
      <header>
        <h1>My Todo List</h1>
      </header>
      <main className='todo-main'>
        <TodoInput onAdd={handleAddTodo} />
        <div className='todo-list'>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
