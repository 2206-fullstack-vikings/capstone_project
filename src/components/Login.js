import axios from "axios";
import React from "react";
import "../style/Login.css";

const Login = (props) => {
  const {
    userToken,
    setUserToken,
    userName,
    userPassword,
    setUserName,
    setUserPassword,
    email,
    setEmail,
    name,
    setName,
    currentUser,
    setCurrentUser,
    confirmPassword,
    setConfirmPassword,
    location,
    setLocation,
  } = props;

  const logInUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          username: userName,
          password: userPassword,
        }
      );

      window.localStorage.setItem("token", response.data.token);
      setUserToken(response.data.token);
      setCurrentUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const registerNewUser = async (event) => {
    event.preventDefault();
    if (userPassword !== confirmPassword) alert("Passwords Do Not Match");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        {
          name: name,
          username: userName,
          password: userPassword,
          email: email,
          location: location,
        }
      );
      console.log(response);
      window.localStorage.setItem("token", response.data.token);
      setUserToken(response.data.token);
      setCurrentUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const signOutUser = async (event) => {
    setCurrentUser({});
    setUserToken("");
    setName("");
    setUserName("");
    setUserPassword("");
    setEmail("");
    setConfirmPassword("");
  };

  return (
    <div className="login_page">
      <div className="register">
        {userToken ? (
          <>
            <h2>Welcome back {currentUser.name}! Have fun shopping!!</h2>
            <button onClick={signOutUser}>Sign Out</button>
          </>
        ) : (
          <form className="login" onSubmit={logInUser}>
            <h3>Login</h3>
            <label>Username</label>

            <input
              type="text"
              required
              onChange={(event) => setUserName(event.target.value)}
            ></input>

            <label>Password</label>

            <input
              type="password"
              required
              onChange={(event) => setUserPassword(event.target.value)}
            ></input>

            <button typeof="submit">Log In</button>
          </form>
        )}
        {userToken ? null : (
          <form className="register" onSubmit={registerNewUser}>
            <h3>Register</h3>
            <label>Name</label>

            <input
              type="text"
              required
              onChange={(event) => setName(event.target.value)}
            />

            <label>Username</label>

            <input
              type="text"
              required
              onChange={(event) => setUserName(event.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              required
              onChange={(event) => setUserPassword(event.target.value)}
            />

            <label>Confirm Password</label>

            <input
              type="password"
              required
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <label>Email</label>

            <input
              type="text"
              required
              onChange={(event) => setEmail(event.target.value)}
            />

            <label>City, State</label>
            <input
              type="text"
              required
              onChange={(event) => setLocation(event.target.value)}
            />

            <button typeof="submit">Register Account</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
