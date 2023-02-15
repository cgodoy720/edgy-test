import { Link } from "react-router-dom";
import Files from "../Components/Files";
// import drag context ftom beaiful dnd
// Dropable -- sets an area that allows for individual items to move around
// Draggablle -- raps every li items so that they can be dragged
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//TODO: Import HOWLER
import "./Notes.css";
export default function Note({
  note: { id, title, content, date, time, is_bookmark },
}) {
  return (
    <div className="Note">
      {/* <DragDropContext>
        {/*  Droppablefunction allows to pass some information to the droppables  */}
        {/* <Droppable droppableId="Single-Container"> */}
          {/* {(provided) => ( */} 
            <ul
              className="Single_Note"
              // {...provided.droppableProps}
              // ref={provided.innerRef}
            >
              {/* <Draggable> */}
                <li style={{ listStyle: "none" }}>
                  <Link to={`/notes/${id}`}>
                    <div className="Header">
                      {" "}
                      <h3>{title}</h3> <b>{date}</b> <b>{time}</b>
                    </div>
                    <p>{content}</p>
                    <div className="Footer">
                      {" "}
                      <p>{is_bookmark ? "⭐️" : null}</p>
                    </div>
                  </Link>
                  {/* <button>✅</button> */}
                  <Files />
                </li>
              {/* </Draggable> */}
            </ul>
           {/* )} */}
        {/* </Droppable>
      </DragDropContext> */}
    </div>
  );
}
