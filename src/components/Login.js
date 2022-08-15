import axios from "axios";
import React from "react";

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
         
        }
      );
        console.log(response)
      window.localStorage.setItem("token", response.data.token);
      setUserToken(response.data.token);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_page">
      {userToken ? (
        <h2>Welcome back {userName}! Have fun shopping!!</h2>
      ) : (
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
     )}
     {userToken ? null:
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
        

        <button typeof="submit">Register Account</button>
      </form>
}
    </div>
  );
};

export default Login;
