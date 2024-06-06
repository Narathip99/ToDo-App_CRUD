import React from 'react'
import { TodoItem } from './TodoItem'

export const DisplayTodo = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <section className='bg-white rounded shadow my-4'>
      {/* title */}
      <div className="flex justify-between items-center py-4 px-4">
        <p>4 Items left</p>
        <div className='flex gap-2'>
          <p className='font-bold'>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p>Clear All</p>
      </div>

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo} />
      ))}
    </section>
  )
}
