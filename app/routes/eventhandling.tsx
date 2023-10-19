import type { SetStateAction } from "react";
import { useState } from "react";

export default function EventHandling() {
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  function handleClick() {
    setHeadingText(name);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event: { target: { value: SetStateAction<string> } }) {
    setName(event.target.value);
  }

  return (
    <div>
      <div className="form-group">
        <h1>Hello {headingText}</h1>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          placeholder="What's your name?"
          value={name}
        />
      </div>
      <button
        style={{
          backgroundColor: isMouseOver ? "white" : "black",
          color: isMouseOver ? "black" : "white",
        }}
        className="btn btn-primary"
        onClick={handleClick}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
      >
        Submit
      </button>
    </div>
  );
}
