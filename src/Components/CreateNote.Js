import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//
const API = process.env.REACT_APP_API_URL;
export default function CreateNote() {
  // FormModal
  const [formModal, setFormModal] = useState(false);
  // New Note
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    date: "",
    time: "",
    is_bookmark: false,
  });
  let navigate = useNavigate();
  //Add NEW Note
  const addNewNote = (addedNote) => {
    axios
      .post(`${API}/notes`, addedNote)
      .then(
        () => {
          // navigate("/notes");
          window.location.reload();
        },
        (error) => console.log(error)
      )
      .catch((error) => console.log(error));
  };

  // TEXTCHANGE
  const handleTextChange = (e) => {
    setNewNote({ ...newNote, [e.target.id]: e.target.value });
  };
  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewNote(newNote);
    setFormModal(false);
  };
  // CheckBox
  const handleCheckChange = () => {
    setNewNote({ ...newNote, is_bookmark: !newNote.is_bookmark });
  };

  //! Character Count Feature
  const characterLimit = 120;
  const handleCharacterCount = (e) => {
    console.log(newNote.content);
    if (characterLimit - newNote.content.length >= 0) {
      setNewNote({ ...newNote, [e.target.id]: e.target.value });
    } else {
      console.log("Character LIMIT REACHED");
    }
  };

  return (
    <div className=" w-80 h-[10rem]">
      {formModal ? (
        <form
          className="bg-green-200 h-[25rem] absolute z-10 m-4 p-3"
          onSubmit={handleSubmit}
        >
          <label className="font-bold" htmlFor="title">
            Title
          </label>
          <input
            className="w-full"
            type="text"
            value={newNote.title}
            id="title"
            placeholder="Click to add title"
            onChange={handleTextChange}
          />

          <label className="font-bold" htmlFor="content">
            Description:
          </label>
          <textarea
            className="w-full"
            placeholder="Click to add text"
            id="content"
            value={newNote.content}
            onChange={handleCharacterCount}
            required
            // rows="10"
            // cols="10"
          ></textarea>
          {/* //! CharCount */}
          <div className="p-2 ">
            {characterLimit - newNote.content.length} Characters Remaining
          </div>

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={newNote.date}
            placeholder="Click to add date"
            onChange={handleTextChange}
            required
          />
          <label className="ml-2" htmlFor="time">
            Time:
          </label>
          <input
            type="time"
            id="time"
            value={newNote.time}
            placeholder="Click to add time"
            onChange={handleTextChange}
            required
          />
          <div>
            <div className="py-4">
              <label  className=" mr-2" htmlFor="is_bookmark">Favorite</label>
              <input
                type="checkbox"
                id="is_bookmark"
                checked={newNote.is_bookmark}
                onChange={handleCheckChange}
              />
            </div>
            <div className="flex justify-center ">
              <input className="bg-green-500 p-1 rounded-md" type="submit" />
            </div>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-center pt-2">
          <button className="mt-16 " onClick={() => setFormModal(true)}>CREATE+</button>
        </div>
      )}
    </div>
  );
}
