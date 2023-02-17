import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./LoginSignupForms.css"

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
      .post(`${API}/users/signup`, newUser)
      .then(() => navigate("/login"))
      .catch((err) => console.error(err));

    setNewUser({
        username: "",
        password: ""
    });

    window.alert("Account created!")
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
            value={newUser.username}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            onChange={handleTextChange}
            value={newUser.password}
          />
          <br></br>
          <input id="submit-button" type="submit" value="Create New Account"/>
          <br></br>
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}

export default SignupNewForm;