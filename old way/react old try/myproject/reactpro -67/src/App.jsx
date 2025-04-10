import { useReducer, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
// import Incre1 from "./components/Incre1";
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy };
      // return state + action.payload;
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy };
    }
    if (action.type == "setIncrement") {
      return { ...state, incrementBy: action.payload };
    }
  }

  return (
    <div className="App">
      <h1> User Reducer: {state.count}</h1>
      <input
        type="text"
        name=""
        id=""
        value={state.incrementBy}
        onChange={(e) =>
          dispatch({ type: "setIncrement", payload: Number(e.target.value) })
        }
      />
      <br />
      <br />

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment Count
      </button>
      <br />
      <br />

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement Count
      </button>
      <br />
      <br />
    </div>
  );
}

export default App;
