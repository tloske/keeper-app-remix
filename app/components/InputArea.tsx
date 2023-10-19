import { Form } from "@remix-run/react";
import { useState } from "react";

export default function InputArea(props: any) {
  const [task, setTask] = useState<string>("");

  function handleChange(event: any) {
    const { value } = event.target;
    setTask(value);
  }
  return (
    <Form>
      <div className="form-group">
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          value={task}
        />
      </div>
      <button
        className="btn btn-primary mt-1"
        onClick={() => {
          setTask("");
          props.addTask(task);
        }}
      >
        Add
      </button>
    </Form>
  );
}
