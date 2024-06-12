import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // Function to add a new to-do
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { value: input, isComplete: false }]);
      setInput("");
    }
  };

  // Function to mark a to-do as complete
  const onMarkAsComplete = (index) => {
    setTodos(
      todos.map((item, idx) =>
        idx === index ? { ...item, isComplete: true } : item
      )
    );
  };

  // Function to toggle the complete status of a to-do
  const onToggleMarkAsComplete = (index) => {
    setTodos(
      todos.map((item, idx) =>
        idx === index ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  // Function to test toggling the complete status of a to-do
  const testToggle = () => {
    for (let i = 0; i < 3; i++) {
      onToggleMarkAsComplete(2);
    }
  };

  return (
    <div className="greeting">
      <h1>To-Do List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new to-do"
      />
      <button onClick={addTodo}>+</button>
      <h3>TASK LIST</h3>
      {todos.map((item, index) => (
        <div className="todo-item" key={index}>
          {item.isComplete ? <s>{item.value}</s> : <span>{item.value}</span>}
          <button onClick={testToggle}>edit</button>
          <button onClick={() => onMarkAsComplete(index)}>complete</button>
        </div>
      ))}
    </div>
  );
}
