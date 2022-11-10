import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { decrement, increment, incrementByAmount } from "./counterSlice";
//import type { RootState } from "../../app/store";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <h2>{count}</h2>
        <button
          aria-label="Incremente Value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decremente Value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decremente Value"
          onClick={() => dispatch(incrementByAmount(11))}
        >
          Increment by 11
        </button>
      </div>
    </>
  );
}
