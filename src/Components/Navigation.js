import { Link } from "react-router-dom";

import { CiLight } from "react-icons/ci";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GiExitDoor } from "react-icons/gi";
export default function Navigation({ toggle }) {
  return (
    <div className="flex justify-between p-2 bg-slate-500 sticky top-0 z-20 ">
      <Link to={`/notes`}>
        {" "}
        <h1 className="font-signature text-4xl text-slate-300 font-bold">
          <em> Note-It</em>
        </h1>
      </Link>

      <div className="flex">
        <Link to="/">
          <button className="block justify-center bg-blue-300 p-1 py-3 rounded-md hover:cursor-pointer mx-1">
            <MdOutlineMapsHomeWork />
          </button>
        </Link>
        <button
          className="block justify-center bg-blue-300 p-1 rounded-md hover:cursor-pointer mx-1"
          onClick={() => {
            toggle((mode) => !mode);
          }}
        >
          <CiLight />
        </button>
        <Link to="">
          <button className="block justify-center bg-blue-300 p-1 py-3 rounded-md hover:cursor-pointer mx-1">
            <GiExitDoor />
          </button>
        </Link>
      </div>
    </div>
  );
}
