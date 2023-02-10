import { Link } from "react-router-dom";
export default function Navigation() {
  // let navigate = useNavigate();
  return (
    <div className="Navigation">
      <h1>Welcome to Note-It</h1>
      <Link to={`/notes/new`}>
        <button>New</button>
      </Link>
    </div>
  );
}
