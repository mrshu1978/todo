import React from 'react';

function TodoFilter({ currentFilter, onFilterChange }) {
  return (
    <div className='todo-filter'>
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={currentFilter === 'active' ? 'active' : ''}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
