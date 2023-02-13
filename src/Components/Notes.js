import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";
// CSS
import "./Notes.css";
//*
import CreateNote from "./CreateNote";
//
const API = process.env.REACT_APP_API_URL;

export default function Notes({
  handleSubmit,
  handleTextChange,
  handleCheckChange,
}) {
  const [myNotes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/notes`)
      .then((res) => setNotes(res.data))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <div className="Notes">
      {myNotes.map((note) => {
        <p>{console.log(note)}</p>;
        return <Note key={note.id} note={note} />;
      })}
      <CreateNote
        handleSubmit={handleSubmit}
        handleCheckChange={handleCheckChange}
        handleTextChnage={handleTextChange}
      />
    </div>
  );
}
