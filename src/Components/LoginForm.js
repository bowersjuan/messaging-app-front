import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./LoginSignupForms.css"

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
        <div className="inputs-container">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            onChange={handleTextChange}
            value={user.username}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            onChange={handleTextChange}
            value={user.password}
          />
          <br></br>
          <input id="submit-button" type="submit" value="Login"/>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;