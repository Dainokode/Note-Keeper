import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <form className="createArea">
      <input
        onChange={handleChange}
        value={note.title}
        type="text"
        placeholder="Title"
        name="title"
      />
      <textarea
        onChange={handleChange}
        value={note.content}
        name="content"
        placeholder="Note content"
      ></textarea>
      <button onClick={submitNote}>Add</button>
    </form>
  );
};

export default CreateArea;
