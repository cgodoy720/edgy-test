import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Files from "./Components/Files";
import Navigation from "./Components/Navigation";
//Pages
//! import Login from "./Components/Login"
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";

function App() {
  //DarkMode
  const [mode, setMode]= useState(false)
  
  return ( 
    <div className={`${mode &&  'Darkmode'}`}> 
    <div className="App">
      <Router>
        <Navigation toggle ={setMode}  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Index />} />
          <Route path="/notes/:id" element={<Show />} />
          <Route path="/notes/new" element={<New />} />
          <Route path="/notes/:id/edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Files />
      </Router>
    </div></div>
   
  );
}

export default App;
