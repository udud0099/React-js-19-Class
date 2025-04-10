import { RootState, AppDispatch } from "../state/store";

import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>inc</button>
        <button onClick={() => dispatch(decrement())}>dec</button>

        <button onClick={() => dispatch(incrementByAmount(10))}>
          inc by amt
        </button>

        <button onClick={() => dispatch(incrementAsync(10))}>inc by amt</button>
      </div>
    </div>
  );
};

export default Counter;
