import React from "react";
import { Products, Selector, Cart } from "./";
import "../style/HomePage.css"

const HomePage =(props)=>{
    const {allProducts, setAllProducts, email,setEmail}= props
    return (
        <div className='home_page'>
            <Selector allProducts={allProducts}/>
            <Products allProducts={allProducts}  setAllProducts={setAllProducts}/>
            <Cart/>
        </div>
    )
}

export default HomePage;