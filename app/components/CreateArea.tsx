import { Form } from "@remix-run/react";
import { useState } from "react";

export default function CreateArea(props: any) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event: any) {
    const { name, value } = event.target;
    setNote((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <div className="inputbox">
      <Form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            setNote({ title: "", content: "" });
            props.onClick(note);
          }}
        >
          Add
        </button>
      </Form>
    </div>
  );
}
