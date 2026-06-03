import React from 'react';

function TodoFilters({ currentFilter, onFilterChange, onClearCompleted, hasCompleted }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="filter-container">
      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={currentFilter === f ? 'active-filter' : ''}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      {hasCompleted && (
        <button onClick={onClearCompleted} className="clear-btn">
          Clear Completed
        </button>
      )}
    </div>
  );
}

export default TodoFilters;