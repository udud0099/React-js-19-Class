import Todoitem from "./Todoitem";
export default function TodoList({ todos, setTodos }) {
  return (
    <>
      {todos.map((item) => (
        <Todoitem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </>
  );
}
