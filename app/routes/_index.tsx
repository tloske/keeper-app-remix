import type { MetaFunction } from "@remix-run/node";
import Note from "~/components/Note";
import notes from "../notes.json";

export const meta: MetaFunction = () => {
  return [
    { title: "Keeper App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      {notes.map((note) => {
        return (
          <Note key={note.title} title={note.title} content={note.content} />
        );
      })}
    </div>
  );
}
