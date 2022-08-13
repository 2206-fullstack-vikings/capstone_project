import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from "../axios-services";
import { Title, HomePage ,Admin, Login} from "./";
import "../style/App.css";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");


  //This is where we will create state that we think we will need
  const [testState, setTestState]= useState("test");
  const [allProducts, setAllProducts]= useState([]);
  const [userToken, setUserToken]= useState("");
  const [userLogin, setUserLogin]= useState("")
  const [userPassword, setUserPassword]= useState("")
  const [isAdmin, setIsAdmin]= useState(false);
  const [productByTeam, setProductByTeam]= useState([]);
  const [productByDivision,setProductByDivision]=useState([]);
  const [currentUser, setCurrentUser]=useState({});




  useEffect(() => {
    // follow this pattern inside your useEffect calls:
    // first, create an async function that will wrap your axios service adapter
    // invoke the adapter, await the response, and set the data
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    };

    // second, after you've defined your getter above
    // invoke it immediately after its declaration, inside the useEffect callback
    getAPIStatus();
  }, []);

  // return (
  //   <div className="app-container">
  //     <h1>Hello, World!</h1>
  //     <p>API Status: {APIHealth}</p>
  //   </div>
  // );


  return (
    <BrowserRouter>
    <Title/>
    
      <Routes>
      <Route path='/' element ={<HomePage allProducts={allProducts} testState={testState} setAllProducts={setAllProducts} />}/>
      <Route path="/admin" element={<Admin testState={testState}/>}/>
      <Route path="/login" element={<Login/>}/>
     
      </Routes>
      
      
      
    </BrowserRouter>
  );
};

export default App;
