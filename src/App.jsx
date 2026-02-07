import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  return (
    <div className='app-container'>
      <header>
        <h1>My Todo List</h1>
      </header>
      <main className='todo-main'>
      </main>
    </div>
  );
}

export default App;
