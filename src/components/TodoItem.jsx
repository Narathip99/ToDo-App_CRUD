import React from "react";

export const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <>
      <hr />
      <div className="flex justify-between p-4 items-center">
        <div className="flex gap-4 items-center">
          <input
            type="checkbox"
            className="w-6 h-6"
            onClick={() => toggleComplete(todo.id)}
          />

          {todo.isCompleted ? (
            <p className="text-xl font-medium line-through">{todo.text}</p>
          ) : (
            <p className="text-xl font-medium">{todo.text}</p>
          )}
        </div>

        <div className="flex gap-2">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-all duration-300"
            onClick={() => editTodo(todo.id)}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-all duration-300"
            onClick={() => deleteTodo(todo.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};
