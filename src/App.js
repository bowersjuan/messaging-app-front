import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Navbar from "./Common/Navbar";
import Signup from "./Pages/UserAuth/Signup";
import Login from "./Pages/UserAuth/Login";
import About from "./Components/About/About"
import LogInPrompt from "./Components/LogInPrompt";

import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false)

  const login = () => {
    setIsLogged(true)
  }

  return (
    <div className="App">
      <Router>
        <Navbar isLogged={isLogged}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login login={login}/>} />
          <Route path="/prompt" element={<LogInPrompt />} />
          {
            isLogged ? 
              <>
                <Route path="/users/:id/messages" element={<Index />} />
                <Route path="/users/:id/messages/new" element={<New />} />
                <Route path="/users/:id/messages/:idx"  element={<Show />} />
                <Route path="/users/:id/messages/:idx/edit" element={<Edit />} />
              </> 
              : 
              <>
                <Route path="/users/:id/messages" element={<LogInPrompt />} />
                <Route path="/users/:id/messages/new" element={<LogInPrompt />} />
                <Route path="/users/:id/messages/:idx"  element={<LogInPrompt />} />
                <Route path="/users/:id/messages/:idx/edit" element={<LogInPrompt />} />
              </> 
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
