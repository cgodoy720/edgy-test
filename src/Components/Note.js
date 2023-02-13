import { Link } from "react-router-dom";
//TODO: Import HOWLER
import "./Notes.css";
export default function Note({
  note: { id, title, content, date, time, is_bookmark },
}) {
  return (
    <div className="Note">
      {" "}
      <div className="single_note">
        <Link to={`/notes/${id}`}>
          <header>
            <span>
              {" "}
              <h3>{title}</h3> <b>{date}</b> <b>{time}</b>
            </span>
          </header>
          <div className="note-body">
            <p>{content}</p>
          </div>
          <footer>
            <p>{is_bookmark ? "⭐️" : null}</p>
          </footer>
        </Link>
        <button>✅</button>
      </div>
       </div>
  );
}
