import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./SignupNewForm.css"

const API = process.env.REACT_APP_API_URL;

function SignupNewForm() {
  const [newUser, setNewUser] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API}/users/new`, newUser)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));

    setNewUser({
        username: "",
        password: ""
    });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">User </label>
        <input
          id="username"
          type="text"
          onChange={handleTextChange}
          value={newUser.username}
        />
        <label htmlFor="password">Pass </label>
        <input
          id="password"
          type="password"
          onChange={handleTextChange}
          value={newUser.password}
        />
        <div></div>
        <input id="submit-button" type="submit" />
      </form>
    </div>
  );
}

export default SignupNewForm;