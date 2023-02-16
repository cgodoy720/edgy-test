import { Link } from "react-router-dom";

import {CiLight} from "react-icons/ci"
export default function Navigation({ toggle }) {
  // let navigate = useNavigate();
  return (
    <div className="flex justify-between p-2 bg-slate-500 ">
      <Link to={`/notes`}>
        {" "}
        <h1 className="font-signature text-4xl text-slate-300 font-bold">
          <em> Note-It</em>
        </h1>
      </Link>

      {/* <Link to={`/notes/new`}>
        <button>Create</button>
      </Link> */}
      <button
        className="block justify-center bg-blue-300 p-1 rounded-md hover:cursor-pointer"
        onClick={() => {
          toggle((mode) => !mode);
        }}
      >
        <CiLight/>
      </button>
    </div>
  );
}
