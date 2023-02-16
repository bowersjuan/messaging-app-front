import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./LoginForm.css"

const API = process.env.REACT_APP_API_URL;

function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API}/users/login`, user)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));

    setUser({
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
          value={user.username}
        />
        <label htmlFor="password">Pass </label>
        <input
          id="password"
          type="password"
          onChange={handleTextChange}
          value={user.password}
        />
        <div></div>
        <input id="submit-button" type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;