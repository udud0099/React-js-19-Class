import { useReducer, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
// import Incre1 from "./components/Incre1";
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + action.payload };
      // return state + action.payload;
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count + action.payload };
    }
  }

  return (
    <div className="App">
      <h1> User Reducer: {state.count}</h1>
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
