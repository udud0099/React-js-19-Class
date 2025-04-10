import "./../style.css";

export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  }
  const classStyle = item.done ? "completed" : "";

  return (
    <>
      <style></style>
      <span
        className={classStyle}
        onClick={() => handleClick(item.name)}
        key={item.name}
      >
        {item.name}
      </span>
      <span>
        <button onClick={() => handleDelete(item)}>X</button>
      </span>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
