import { useState } from "react";

import Todoitem from "./Todoitem";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <br />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* {todos} */}
      {/* {console.log(todos)} */}
    </>
  );
}
