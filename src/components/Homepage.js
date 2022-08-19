import React from "react";
import { Products, Selector, Cart } from "./";
import "../style/HomePage.css"

const HomePage =(props)=>{
    const {allProducts, setAllProducts,shoppingCart, setShoppingCart}= props
    return (
        <div className='home_page'>
            {/* <Selector allProducts={allProducts}/> */}
            <Products allProducts={allProducts}  setAllProducts={setAllProducts} setShoppingCart={setShoppingCart}/>
            {/* <Cart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} /> */}
        </div>
    )
}

export default HomePage;