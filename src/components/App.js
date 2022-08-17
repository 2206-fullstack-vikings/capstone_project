import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from "../axios-services";
import { Title, HomePage , Admin, Login, SingleProductView, OrderForm} from "./";
import "../style/App.css";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");


  //This is where we will create state that we think we will need
  const [testState, setTestState]= useState("test");
  const [allProducts, setAllProducts]= useState([]);
  const [userToken, setUserToken]= useState("");
  const [userName, setUserName]= useState("");
  const [userPassword, setUserPassword]= useState("");
  const [isAdmin, setIsAdmin]= useState(false);
  const [productByTeam, setProductByTeam]= useState([]);
  const [productByDivision,setProductByDivision]=useState([]);
  const [currentUser, setCurrentUser]=useState({});
  const [email, setEmail]= useState("");
  const [name, setName]=useState("");
  const [location, setLocation]=useState("")
  const [confirmPassword, setConfirmPassword]=useState("");
  const [shoppingCart, setShoppingCart]= useState([]);




  // useEffect(() => {
  //   // follow this pattern inside your useEffect calls:
  //   // first, create an async function that will wrap your axios service adapter
  //   // invoke the adapter, await the response, and set the data
  //   const getAPIStatus = async () => {
  //     const { healthy } = await getAPIHealth();
  //     setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
  //   };

  //   // second, after you've defined your getter above
  //   // invoke it immediately after its declaration, inside the useEffect callback
  //   getAPIStatus();
  // }, []);

  useEffect(()=>{
    const fetchProducts = async ()=>{
        try {
            const response = await axios.get("http://localhost:3000/api/products")
            const result = response.data
            setAllProducts(result)
            
        } catch (error) {
            console.error(error)
        }
    };

    
    fetchProducts() 
},[])
  



  return (
    <BrowserRouter>
    <Title/>
    
      <Routes>
      <Route path="/" element ={<HomePage allProducts={allProducts} testState={testState} setAllProducts={setAllProducts} shoppingCart={shoppingCart} 
            setShoppingCart={setShoppingCart} />}/>
      <Route path="/admin" element={<Admin testState={testState} currentUser={currentUser} allProducts={allProducts} setAllProducts={setAllProducts}/>}/>
      <Route path="/login" element={<Login userToken={userToken}
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
            /> }/>
      <Route path="/:id" element={<SingleProductView allProducts={allProducts} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />}/>
      <Route path="/orderform" element={<OrderForm shoppingCart={shoppingCart}/>}/>

      </Routes>
      
      
      
    </BrowserRouter>
  );
};

export default App;
