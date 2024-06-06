import React, { useState } from 'react'
import { TodoItem } from './TodoItem'

export const DisplayTodo = ({ todos, deleteTodo, toggleComplete, editTodo, deleteAllTodo }) => {
  const [filter, setFilter] = useState('All')

  const filteredTodos = filter === 'All' 
  ? todos 
  : filter === 'Active' 
  ? todos.filter(todo => !todo.isCompleted) 
  : filter === 'Completed' 
  ? todos.filter(todo => todo.isCompleted) 
  : todos;


  return (
    <section className='bg-white rounded shadow my-4'>
      {/* title */}
      <div className="flex justify-between items-center py-4 px-4">
        <p>{filteredTodos.length} Items left</p>
        <div className='flex gap-2'>
          <button
            onClick={() => setFilter('All')}
            className={filter === 'All' ? ' font-bold' : ''}
          >
            All
          </button>
          <button
            onClick={() => setFilter('Active')}
            className={filter === 'Active' ? ' font-bold' : ''}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('Completed')}
            className={filter === 'Completed' ? ' font-bold' : ''}
          >
            Completed
          </button>
        </div>
        <button
          onClick={deleteAllTodo}
        >
          Clear All
        </button>
      </div>

      {filteredTodos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          toggleComplete={toggleComplete} 
          editTodo={editTodo} 
        />
      ))}
    </section>
  )
}
