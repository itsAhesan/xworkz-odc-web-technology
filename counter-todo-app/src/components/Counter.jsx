import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div className="box">
      <h2>Counter App</h2>

      {show && <h1>{count}</h1>}

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <br /><br />

      <button onClick={() => setShow(!show)}>Toggle Counter</button>
    </div>
  );
};

export default Counter;
