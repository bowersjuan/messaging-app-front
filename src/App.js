import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import "./App.css";
import Navbar from "./Common/Navbar";
import Signup from "./Pages/UserAuth/Signup";
import Login from "./Pages/UserAuth/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/messages" element={<Index />} />
          <Route path="/messages/:index" element={<Show />} />
          <Route path="/messages/new" element={<New />} />
          <Route path="/messages/:index/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
