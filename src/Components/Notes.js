import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Files from "../Components/Files";

import axios from "axios";
// import Note from "./Note";
import { SearchBar } from "./SearchBar";
// CSS
import "./Notes.css";
//! Draggables DnD
// import drag context ftom beaiful dnd
// Dropable -- sets an area that allows for individual items to move around
// Draggable -- raps every <li>items so that they can be dragged
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
//* Draggging State
const [dragNote, setDragNote] = useState(filtered)
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
    <div className="Notes-Page">
      
      <SearchBar
        setFiltered={setFiltered}
        setSearch={setSearch}
        setMyNotes={setMyNotes}
        myNotes={myNotes}
      />
<div className="bg-green-200 flex "> 
      <DragDropContext>
      
        <Droppable droppableId="note">
          {(provided) => {
            return (
              <ul
                className="bg-yellow-400 flex flex-wrap gap-2"
                {...provided.droppableProps}
                ref={provided.ref}
              >
                <CreateNote
        handleSubmit={handleSubmit}
        handleCheckChange={handleCheckChange}
        handleTextChnage={handleTextChange}
      />
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
                            <li  className="bg-blue-300 w-80 h-[10rem] pl-2"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                             
                                <Link to={`/notes/${id}`}>
                                  <div className="Header">
                                    {" "}
                                    <h3>{title}</h3> <b>{date}</b> <b>{time}</b>
                                  </div>
                                  <p>{content}</p>
                                  <div className="Footer">
                                    <p>{is_bookmark ? "⭐️" : null}</p>
                                  </div>
                                </Link>
                                <Files />
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
      </div>

    
    </div>
  );
}
