import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
// import Note from "./Note";
import { SearchBar } from "./SearchBar";
// CSS
import "./Notes.css";
//* Draggables
// import drag context ftom beaiful dnd
// Dropable -- sets an area that allows for individual items to move around
// Draggablle -- raps every li items so that they can be dragged
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CreateNote from "./CreateNote";
//
const API = process.env.REACT_APP_API_URL;

export default function Notes({
  handleSubmit,
  handleTextChange,
  handleCheckChange,
}) {
  const [myNotes, setMyNotes] = useState([]);
  //! Search State - Save user Input
  const [search, setSearch] = useState("");
  //
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/notes`)
      .then((res) => {
        setFiltered(res.data); //
        setMyNotes(res.data);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <div className="Notes-Container">
      <SearchBar
        setFiltered={setFiltered}
        setSearch={setSearch}
        setMyNotes={setMyNotes}
        myNotes={myNotes}
      />
      <DragDropContext>
        <Droppable droppableId="note">
          {(provided) => {
            return (
              <ul
                className="Notes"
                {...provided.droppableProps}
                ref={provided.ref}
              >
                {filtered.map(
                  ({ id, date, time, content, is_bookmark, title }, index) => {
                    // <Note key={note.id} note={note} />;
                    return (
                      <Draggable
                        key={id}
                        draggableId="notes_list"
                        index={index}
                      >
                        {(provided) => {
                          return (
                            <li
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              {/* <Link to={`/notes/${id}`}> */}
                                <div className="Header">
                                  {" "}
                                  <h3>{title}</h3> <b>{date}</b> <b>{time}</b>
                                </div>
                                <p>{content}</p>
                                <div className="Footer">
                                  <p>{is_bookmark ? "⭐️" : null}</p>
                                </div>
                              {/* </Link> */}
                            </li>
                          );
                        }}
                      </Draggable>
                    );
                  }
                )}
              </ul>
            );
          }}
        </Droppable>
      </DragDropContext>

      <CreateNote
        handleSubmit={handleSubmit}
        handleCheckChange={handleCheckChange}
        handleTextChnage={handleTextChange}
      />
    </div>
  );
}
