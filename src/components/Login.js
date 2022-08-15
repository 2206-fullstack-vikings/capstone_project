import axios from "axios";
import React from "react";
import {logInUser, registerNewUser} from "../axios-services"

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
    location,
    setLocation,
    currentUser,
    setCurrentUser,
    confirmPassword,
    setConfirmPassword
  } = props;

  

  return (
    <div className="login_page">
      <form className="login" onSubmit={logInUser}>
        <h3> Please log in to continue</h3>
        <label>Username</label>
        <br />
        <input
          type="text"
          required
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          required
          onChange={(event) => setUserPassword(event.target.value)}
        ></input>
        <br />
        <button typeof="submit">Log In</button>
      </form>
      <form className="register" onSubmit={registerNewUser}>
        <h3>Please register to have access to site</h3>
        <label>Name</label>
        <br />
        <input
          type="text"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label>Username</label>
        <br />
        <input
          type="text"
          required
          onChange={(event) => setUserName(event.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          required
          onChange={(event) => setUserPassword(event.target.value)}
        />
        <br />
        <label> Confirm Password</label>
        <br />
        <input
          type="password"
          required
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label>Location</label>
        <br />
        <input
          type="text"
          required
          onChange={(event) => setLocation(event.target.value)}
        />
        <br />

        <button typeof="submit">Register Account</button>
      </form>
    </div>
  );
};

export default Login;
