import { useReducer, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
// import Incre1 from "./components/Incre1";
function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type == "increment") {
      return state + action.payload;
    }
    if (action.type == "decrement") {
      return state + action.payload;
    }
  }

  return (
    <div className="App">
      <h1>Use State: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h1> User Reducer: {state}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment Count
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: -1 })}>
        Increment Count
      </button>

      <button onClick={() => dispatch({ type: "decrement", payload: -1 })}>
        Decrement Count
      </button>
    </div>
  );
}

export default App;
