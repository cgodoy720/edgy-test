// TODO: SOUND
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//
const API = process.env.REACT_APP_API_URL;

export default function EditNote() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [note, setEdit] = useState({
    title: "",
    content: "",
    date: "",
    time: "",
    is_bookmark: false,
  });

  //Update a NOTE
  const updateNote = (updatedNote) => {
    axios
      .put(`${API}/notes/${id}`, updatedNote)
      .then(
        (response) => {
          navigate(`/notes/${id}`);
        },
        (error) => console.log(error)
      )
      .catch((error) => console.warn(error));
  };

  //TextChange
  const handleTextChange = (e) => {
    setEdit({ ...note, [e.target.id]: e.target.value});
  };
  // CheckBox
  const handleCheckChange = () => {
    setEdit({ ...note, is_bookmark: !note.is_bookmark });
  };

  useEffect(() => {
    axios.get(`${API}/notes/${id}`).then(
      (response) => setEdit(response.data),
      (error) => navigate("/not-found")
    );
  }, [id, navigate]);
  
  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(note, id);
  };
  return (
    <div className="EditNote">
    
     <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={note.title}
          id="title"
          placeholder="Click to add title"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="content">Note:</label>
        {/* <input
          type="text"
          id="content"
          value={note.content}
          placeholder="Click to add text"
          onChange={handleTextChange}
          required
        /> */}
        <textarea id="content"
        rows= "10"
        cold= "10"
          value={note.content}
          placeholder="Click to add text" onChange={handleTextChange}></textarea>
          <p>WORD COUNTER</p>
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={note.date}
          placeholder="Click to add date"
          onChange={handleTextChange}
          required
        />{" "}
        <br />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          value={note.time}
          placeholder="Click to add time"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="is_bookmark">Save</label>
        <input
          type="checkbox"
          id="is_bookmark"
          checked={note.is_bookmark}
          onChange={handleCheckChange}
        />
        <input type="submit" />
      </form> 


    </div>
  );
}
