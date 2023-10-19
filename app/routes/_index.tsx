import type { MetaFunction } from "@remix-run/node";
import Note from "~/components/Note";
import { useState } from "react";
import CreateArea from "~/components/CreateArea";

export const meta: MetaFunction = () => {
  return [
    { title: "Keeper App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [notes, setNotes] = useState([]);

  function addNote(note: any) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id: number) {
    setNotes((prevNotes) => {
      return prevNotes?.filter((_note, index) => {
        return index != id;
      });
    });
  }

  return (
    <div className="keeper">
      <CreateArea onClick={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onClick={deleteNote}
        />
      ))}
    </div>
  );
}
