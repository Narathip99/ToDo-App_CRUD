import React, { useState } from "react";

export const AddTodo = ( props ) => {
  const { newTodo, setNewTodo, addTodo, editId, setEditId } = props;

  return (
    <form onSubmit={addTodo}>
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo.text}
          onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
          className="flex-1 rounded-l py-2 px-4 text-xl outline-none"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-r">
          {editId ? "Edit Todo" : "Add Todo"}
        </button>
      </div>
    </form>
  );
};