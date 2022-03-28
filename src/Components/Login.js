import React from "react";
import authService from "./Auth";

const Login = (props) => {
  const [username, setUsername] = React.useState("UserName");
  const [password, setPassword] = React.useState("Password");
  const [loginMessage, setLoginMessage] = React.useState("");
  const [email, setEmail] = React.useState("Email");

  const logUserIn = (e) => {
    e.preventDefault();
    authService.login(username, password).then((res) => {
      console.log({ res });
    });
  };

  const signupUser = (e) => {
    e.preventDefault();
    authService.signup(username, password, email).then((res) => {
      console.log({ res });
    });
  };

  return (
    <div className="signup-form">
      <h3>Sign up for an account or login to view your profile</h3>
      <div className="signup-form-contents">
      {props.login && (
        <form onSubmit={logUserIn}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
      {!props.login && (
        <form onSubmit={signupUser}>
        <label htmlFor="username">Username</label>
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      )}
      <p>{loginMessage}</p>
      </div>
    </div>
  );
};

export default Login;
