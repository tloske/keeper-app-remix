import type { MetaFunction } from "@remix-run/node";
import Note from "~/components/Note";

export const meta: MetaFunction = () => {
  return [
    { title: "Keeper App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
      <Note title="title" content="content" />
    </div>
  );
}
