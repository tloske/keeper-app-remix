import { Delete } from "@mui/icons-material";

export default function Note(props: any) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onClick(props.id);
        }}
      >
        <Delete />
      </button>
    </div>
  );
}
