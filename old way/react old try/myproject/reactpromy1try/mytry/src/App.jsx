import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <h1>
        <Hello message="Hello sis" name="Gita" />
        <Hello message="hi bro" name="Hari" />
      </h1>
    </div>
  );
}

export default App;
