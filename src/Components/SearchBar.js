import { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import { MdSearch } from "react-icons/md";

const API = process.env.REACT_APP_API_URL;
export const SearchBar = ({ handleSearch }) => {
  const [notes, setNotes] = useState("");


   //! DONT MIND THIS SIR DAN LOL, I WAS GONNA MAKE AN EXTRA CALL TO GET THE NOTES THEN FILTER IT AGAIN TO RETURN NOTES 
//   useEffect(() => {
//     axios
//       .get(`${API}/notes`)
//       .then((res) => setNotes(res.data))
//       .catch((error) => console.warn(error));
//   }, []);

  //HandleSearch
  const handleSearching = (e) => {
    e.preventDefault();
    handleSearch(e.target.value);

    console.log(e.target.value);
  };
  return (
    <div className="SearchBar">
      <>
{/* {notes.filter((note)=> note.content.toLowerCase().includes(handleSearching))} */}
      </>
      <MdSearch className="Search-Icon" />
      <input
        onChange={handleSearching}
        type="search"
        placeholder="Search for notes ..."
      />
    </div>
  );
};
