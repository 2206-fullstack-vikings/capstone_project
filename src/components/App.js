import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from "../axios-services";
import {
  Title,
  HomePage,
  Admin,
  Login,
  SingleProductView,
  OrderForm,
} from "./";
import "../style/App.css";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");

  //This is where we will create state that we think we will need

  const [allProducts, setAllProducts] = useState([]);
  const [userToken, setUserToken] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("api/products");
        const result = response.data;
        setAllProducts(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <Title />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <Admin
              currentUser={currentUser}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              userToken={userToken}
              setUserToken={setUserToken}
              userName={userName}
              userPassword={userPassword}
              setUserName={setUserName}
              setUserPassword={setUserPassword}
              email={email}
              setEmail={setEmail}
              name={name}
              setName={setName}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              location={location}
              setLocation={setLocation}
            />
          }
        />
        <Route
          path="/:id"
          element={<SingleProductView allProducts={allProducts} />}
        />
        <Route
          path="/orderform"
          element={<OrderForm currentUser={currentUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
