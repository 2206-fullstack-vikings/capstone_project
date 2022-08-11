import React from "react";
import { Products, Selector, Cart } from "./";

const HomePage =()=>{

    return (
        <div className='home_page'>
            <Selector/>
            <Products/>
            <Cart/>
        </div>
    )
}

export default HomePage;