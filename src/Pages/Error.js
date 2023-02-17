import { MdOutlineMapsHomeWork } from "react-icons/md";
import {BiNote} from 'react-icons/bi'
import { Link } from "react-router-dom";
import notebook from '../assets/notebook.jpg'
export default function Error() {
  return (
    //   <div className="grid h-screen px-4 bg-white place-content-center">
    //   <h1 className="tracking-widest text-gray-500 uppercase">404 | Not Found</h1>
    // </div>
    <div className="flex flex-col h-screen bg-white ">
      <img
        src={notebook}
        alt=""
        className="object-cover w-full h-64"
      />

      <div className="flex items-center justify-center flex-1">
        <div className="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We can't find that page.
          </h1>

          <p className="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>
          <div className="flex justify-between">
            <Link to="/">
              <button className="px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring m-auto flex items-center justify-center ">
                Go Back Home
                <MdOutlineMapsHomeWork className="m-2" />
              </button>
            </Link>
            <Link to="/notes">
              <button className="px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring m-auto flex items-center justify-center ">
                Back To Notes
                < BiNote className="m-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
