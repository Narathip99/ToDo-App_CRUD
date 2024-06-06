import { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { DisplayTodo } from "./components/DisplayTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "This is a first todo",
      isCompleted: false,
    },
    {
      id: 2,
      text: "This is a second todo",
      isCompleted: false,
    },
  ]);

  const [newTodo, setNewTodo] = useState({
    id: Math.floor(Math.random() * 1000),
    text: "",
    isCompleted: false,
  });
  
  const [editId , setEditId] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.text) {
      alert("Please add a todo");
    } else if (editId) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editId) {
            return {...todo, text: newTodo.text}; // อัปเดต text ด้วย newTodo.text
          }
          return todo;
        })
      );
      setEditId(null);
      setNewTodo({
        id: Math.floor(Math.random() * 1000),
        text: "",
        isCompleted: false,
      });
    } else {
      setTodos([...todos, newTodo]);
      setNewTodo({
        id: Math.floor(Math.random() * 1000),
        text: "",
        isCompleted: false,
      });
    }
  };
  

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
  }

  const editTodo = (id) => {
    setEditId(id)
    setNewTodo(todos.find(todo => todo.id === id))
  }

  return (
    <main className="bg-gray-200 min-h-screen p-4">
      <h1 className="text-4xl font-bold my-4">
        <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
          Todo App
        </span>
      </h1>
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} editId={editId} setEditId={setEditId} />
      <DisplayTodo todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo} />
    </main>
  );
}
