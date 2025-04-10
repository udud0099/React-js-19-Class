import { useState } from "react";

import Todoitem from "./Todoitem";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <br />
      <TodoList todos={todos} setTodos={setTodos} />
      <h1>Completed Task {completedTodos}</h1>
      <h1>Total Task {totalTodos}</h1>
      {/* {todos} */}
      {/* {console.log(todos)} */}
    </>
  );
}
