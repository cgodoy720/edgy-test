import { Link } from "react-router-dom";
export default function Navigation() {
  // let navigate = useNavigate();
  return (
    <div className="Navigation">
      <Link to={`/notes`}>
        {" "}
        <h1>Welcome to Note-It</h1>
      </Link>

      <Link to={`/notes/new`}>
        <button>Create</button>
      </Link>
    </div>
  );
}
