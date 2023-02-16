import LoginForm from "../../Components/LoginForm";

function Login({login}) {
  return (
    <div>
      <h2>Login</h2>
      <br></br>
      <LoginForm login={login} />
    </div>
  );
}

export default Login;
