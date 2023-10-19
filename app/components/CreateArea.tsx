import { Form } from "@remix-run/react";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";

export default function CreateArea(props: any) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setNote((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <div className="inputbox">
      <Form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          onClick={() => {
            setIsExpanded(true);
          }}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
        />
        {isExpanded && (
          <Zoom in={isExpanded}>
            <Fab
              onClick={() => {
                setIsExpanded(false);
                setNote({ title: "", content: "" });
                props.onClick(note);
              }}
            >
              <Add />
            </Fab>
          </Zoom>
        )}
      </Form>
    </div>
  );
}
