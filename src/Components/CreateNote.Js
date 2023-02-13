import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//
const API = process.env.REACT_APP_API_URL;

export default function CreateNote() {
  // New Note
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    date: "",
    time: "",
    is_bookmark: false,
  });
  let navigate = useNavigate();
  //Add NEW Note
  const addNewNote = (addedNote) => {
    axios
      .post(`${API}/notes`, addedNote)
      .then(
        () => {
          navigate("/notes");
        },
        (error) => console.log(error)
      )
      .catch((error) => console.log(error));
  };

  // TEXTCHANGE
  const handleTextChange = (e) => {
    setNewNote({ ...newNote, [e.target.id]: e.target.value });
  };
  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewNote(newNote);
  };
  // CheckBox
  const handleCheckChange = () => {
    setNewNote({ ...newNote, is_bookmark: !newNote.is_bookmark });
  };
  return (
    <div className="CreateNote">
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={newNote.title}
          id="title"
          placeholder="Click to add title"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="content">Note:</label>
        <input
          type="text"
          id="content"
          value={newNote.content}
          placeholder="Click to add text"
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={newNote.date}
          placeholder="Click to add date"
          onChange={handleTextChange}
          required
        />{" "}
        <br />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          value={newNote.time}
          placeholder="Click to add time"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="is_bookmark">Save</label>
        <input
          type="checkbox"
          id="is_bookmark"
          checked={newNote.is_bookmark}
          onChange={handleCheckChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
