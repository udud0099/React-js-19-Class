import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
