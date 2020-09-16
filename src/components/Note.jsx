import React from "react";

const Note = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
