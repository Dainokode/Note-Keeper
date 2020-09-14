import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import notes from "../notes";

const App = () => {
  return (
    <>
      <Header />

      <div className="container">
        {notes.map((note) => {
          return (
            <Note key={note.id} title={note.title} content={note.content} />
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default App;
