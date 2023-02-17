import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navigation from "./Components/Navigation";
import { SignUp } from "./Components/SignUp";
import { Account } from "./Components/Account";
//Pages
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import { About } from "./Pages/About";
import Error from "./Pages/Error";
import LogIn from "./Components/LogIn";

function App() {
  //DarkMode
  const [mode, setMode] = useState(false);
  return (
    <div className={`dark:bg-neutral-300 dark:text-black ${mode && "dark"} `}>
      <div className=" min-h-[100vh] bg-neutral-300 dark:bg-slate-600 ">
        <Router>
          <Navigation toggle={setMode} mode={mode} />
          <Routes>
            {/* USER ROUTES */}
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
            {/* APP ROUTES */}
                      <Route path="/notes" element={<Index />} />
            <Route path="/notes/:id" element={<Show />} />
            <Route path="/notes/new" element={<New />} />
            <Route path="/notes/:id/edit" element={<Edit />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
