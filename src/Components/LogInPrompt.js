import { useNavigate } from "react-router-dom";
import loginLogo from "../Assets/log-in-robot.png";
import "./LoginPrompt.css";

function LogInPrompt() {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <img src={loginLogo} alt="login robot" width="300px" />
          <p>Login for Access</p>
        </div>
        <div className="modal-footer">
          <button onClick={() => navigate("/login")}>Close</button>
        </div>
      </div>
    </div>
  );

}

export default LogInPrompt