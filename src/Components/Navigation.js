import { Link } from "react-router-dom";
import './Nav.css'
export default function Navigation({toggle}) {
  // let navigate = useNavigate();
  return (
    <div className="Navigation">
      <Link to={`/notes`}>
        {" "}
        <h1>Welcome to <em> Note-It</em></h1>
      </Link>

      {/* <Link to={`/notes/new`}>
        <button>Create</button>
      </Link> */}
<button onClick={()=>{toggle((mode)=> !mode)}}>Mode</button>
  </div>);
}
