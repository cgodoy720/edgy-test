import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";
//*
const API = process.env.REACT_APP_API_URL;
console.log("API CALL", API);

export default function Notes() {
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
        <p>{console.log(note)}</p>
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
}
