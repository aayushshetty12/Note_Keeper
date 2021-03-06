import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="output">
      <div className="upper">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <div className="lower">
        <p>{props.date}</p>
        <button
          onClick={() => {
            props.deleteNote(props.index);
          }}
        >
          <DeleteIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default Note;
