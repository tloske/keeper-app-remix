import { useState } from "react";

export default function ToDoItem(props: any) {
  const [style, setStyle] = useState({});

  function handleClick(event: any) {
    const { checked } = event.target;
    console.log(checked);

    if (checked) {
      setStyle({ textDecoration: "line-through" });
    } else {
      setStyle({ textDecoration: "none" });
    }
  }
  return (
    <li key={props.key} className={props.className} style={style}>
      <input
        className="form-check-input me-1"
        type="checkbox"
        onClick={() => props.onClick(props.id)}
      />
      {props.text}
    </li>
  );
}
