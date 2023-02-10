import { Link } from "react-router-dom";
//TODO: Import HOWLER
export default function Note({
  note: { id, title, content, date, time, is_bookmark },
}) {
  return (
    <Link to={`/notes/${id}`}>
      {" "}
      <div className="single_note">
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
          <p>{is_bookmark ? "yes" : null}</p>
          <button disabled="disabled">✅</button>
        </footer>
      </div>
    </Link>
  );
}
