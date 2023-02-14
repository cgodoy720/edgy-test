import "./Search.css";
import { MdSearch } from "react-icons/md";

export const SearchBar = ({ setSearch, setMyNotes, myNotes, setFiltered }) => {
  //HandleSearch
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (e.target.value) {
      setFiltered(
        myNotes.filter((note) =>
          note.content.toLowerCase().includes(e.target.value.toLowerCase()))
      )
    } else {
      setFiltered(myNotes);
    }
  };
  return (
    <div className="SearchBar">
      <MdSearch className="Search-Icon" />
      <input
        onChange={handleSearch}
        type="search"
        placeholder="Search for notes ..."
      />
    </div>
  );
};
