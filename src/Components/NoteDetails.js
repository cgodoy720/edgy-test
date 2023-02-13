import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//TODO: Import DragDrop WHen Added

const API = process.env.REACT_APP_API_URL;
function NoteDetails() {
  const [note, setNote] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/notes/${id}`)
      .then((response) => {
        setNote(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

  // DELETE
  const deleteNote = () => {
    axios
      .delete(`${API}/notes/${id}`)
      .then(
        () => {
          navigate(`/notes`);
        },
        (error) => console.error(error)
      )
      .catch((e) => console.warm(e));
  };

  return (
    <div className="NoteDeails">
      <h2>
        {note.title}
        {note.is_bookmark ? "⭐️" : null}
      </h2>

      <header>
        <span>
          {" "}
          <h3>{note.title}</h3> <b>{note.date}</b> <b>{note.time}</b>
        </span>
      </header>
      <div className="note-body">
        <p>{note.content}</p>
      </div>
      <footer>
        <p>{note.is_bookmark ? "⭐️" : null}</p>
        {/* // TODO: For history */}
        <button disabled="disabled">✅</button>
      </footer>
      <div className="note-buttons">
        <button onClick={deleteNote}>🗑️</button>
        <Link to={`/notes/${id}/edit`}>
          {" "}
          <button>📝</button>
        </Link>
        <Link to={`/notes`}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default NoteDetails;
