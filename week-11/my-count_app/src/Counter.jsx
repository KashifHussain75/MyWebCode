import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  function increase() {
    count = count + 1;
    setCount(count);
  }
  return (
    <div>
      <button onClick={increase}>Counter</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;