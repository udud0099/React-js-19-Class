import { useState } from "react";
import { useReducer } from "react";

function App() {
  function reducer(state, action) {}
  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "sub") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);
  return (
    <div className="App">
      {state.balance}
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "sub", payload: Number(amount) })}
      >
        Withdreaw
      </button>
    </div>
  );
}

export default App;
