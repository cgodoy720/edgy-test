import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";
import { SearchBar } from "./SearchBar";
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
  handleSearch,
}) {
  const [myNotes, setNotes] = useState([]);
  //! Search State - Save user Input
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/notes`)
      .then((res) => setNotes(res.data))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <>
      <div className="Notes-Container">
        <SearchBar handleSearch={setSearch} />
        {/* //TODO: FILTER to search for notes that include user inputs */}
        {/* {myNotes.filter((note)=>(note.content.toLowerCase().includes(handleSearch)))}  */}

        {myNotes.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
        <CreateNote
          handleSubmit={handleSubmit}
          handleCheckChange={handleCheckChange}
          handleTextChnage={handleTextChange}
        />
      </div>{" "}
    </>
  );
}
