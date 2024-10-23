import { useReducer } from "react";

const reducer = (state, action) => {
  console.log("action", action);
  switch (
    action.type // switch statements are common in reducers
  ) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "increment10":
      return state + action.payload.amount;
    default:
      return state;
  }
};
function ReducerCounter() {
  // useReducer takes a reducer function and the initial state value
  // returns array with the state variable and a dispatch function
  const [counter, dispatch] = useReducer(reducer, 0);
  const handleIncrement = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: "increment" });
  };
  const handleIncrement10 = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: "increment10", payload: { amount: 100 } });
  };
  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: "decrement" });
  };
  return (
    <div className="ReducerCounter componentBox">
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
      <button onClick={handleIncrement10}>Reducer Increment 10</button>
    </div>
  );
}
// see next slide for reducer function
export default ReducerCounter;
