import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./LoginSignupForms.css"

const API = process.env.REACT_APP_API_URL;

function LoginForm({login}) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const errorLogin = useRef()

  const handleLoginError = () => {
    errorLogin.current.classList.toggle("visible");
  }

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API}/users/login`, user)
      .then((res) => {
        login(true)
        window.localStorage.setItem("user", JSON.stringify({name: res.data.username, id: res.data.id}));
        navigate(`/users/${res.data.id}/messages`)
      })
      .catch((err) => {
        console.error(err)
        handleLoginError()
      });

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
          <p id="incorrect-login-prompt" className="visible" ref={errorLogin}>* Incorrect Login Info</p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;