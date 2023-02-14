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
  // handleSearch,
}) {
  const [myNotes, setMyNotes] = useState([]);
  //! Search State - Save user Input
  const [search, setSearch] = useState("");
  //
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/notes`)
      .then((res) => {
       setFiltered(res.data); // 
      setMyNotes(res.data);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <div className="Notes-Container">
      <SearchBar
        setFiltered={setFiltered}
        setSearch={setSearch}
        setMyNotes={setMyNotes}
        myNotes={myNotes}
      />
      {filtered.map((note) => {
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
