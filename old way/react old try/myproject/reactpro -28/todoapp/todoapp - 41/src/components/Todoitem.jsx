export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <>
      <h3 key={item}>{item}</h3>
      <span>
        <button onClick={() => handleDelete(item)}>X</button>
      </span>
    </>
  );
}
