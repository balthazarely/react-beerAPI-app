import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Sandbox() {
  const data = useSelector((state) => state.test.data);

  return (
    <div>
      <h3>SAndbox</h3>
      {data}
    </div>
  );
}
