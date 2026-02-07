import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className='todo-input'>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Add new todo...'
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
