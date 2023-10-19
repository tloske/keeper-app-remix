import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 1000);

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  return (
    <div>
      <div className="container">
        <h1>Test</h1>
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={decrease}>
          -
        </button>
        <button type="button" className="btn btn-primary" onClick={increase}>
          +
        </button>
      </div>
      <div className="container mt-5">
        <h1>{time}</h1>
      </div>
    </div>
  );
}
