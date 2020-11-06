import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/testReducer";

export default function Sandbox() {
  // the useDispatch hook guves us the ability to call our store dispatch function, allowing us to call our actions
  const dispatch = useDispatch();
  // The useSelector hook is from redux, and it allows us get the state
  const data = useSelector((state) => state.test.data);
  return (
    <div>
      <h3>The data is: {data} </h3>
      <button onClick={() => dispatch(increment(20))}>Increase</button>
      <button onClick={() => dispatch(decrement(20))}>Decrease</button>
    </div>
  );
}
