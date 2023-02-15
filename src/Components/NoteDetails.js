import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//CSS
import "./NoteDetails.css";
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
    <div className="bg-blue-300 w-2/3 h-72 flex flex-col items-center">
      <header className="flex justify-evenly p-5">
        <h3 className="mx-3">
          <span>{note.title} </span>
          <span>{note.is_bookmark ? "⭐️" : null}</span>
        </h3>
        <h3 className="mx-3">
          <span>{note.date}</span> @
          <span> {note.time}</span>
        </h3>
      </header>
      <div className="note-body">
        <p>{note.content}</p>
      </div>
      {/* <footer>
        <p>{note.is_bookmark ? "⭐️" : null}</p>
              <button disabled="disabled">✅</button>
      </footer> */}
      <div className="flex bg-red-400 my-auto justify-around ">
        <button className=" bg-neutral-800 hover:bg-red-800 py-2 px-4 rounded-md" onClick={deleteNote}>🗑️</button>
        <Link to={`/notes/${id}/edit`}>
          {" "}
          <button className="bg-neutral-800 hover:bg-green-700 py-2 px-4 rounded-md">📝</button>
        </Link>
        <Link to={`/notes`}>
          <button className="bg-neutral-800 hover:bg-yellow-500 py-2 px-3 rounded-md text-white font-bold">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default NoteDetails;
