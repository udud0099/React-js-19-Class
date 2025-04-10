export default function Message() {
  function handleClick() {
    console.log("Button click");
  }
  return (
    <>
      <button onClick={handleClick}>Click hear to get a message</button>
    </>
  );
}
