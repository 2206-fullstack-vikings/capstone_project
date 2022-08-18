import React, { useState, useEffect } from "react";
import"../style/OrderForm.css"
import axios from "axios"

const OrderForm = (props) => {
    const {shoppingCart, setShoppingCart}=props

     
    const removeCartItem = (index)=>{
        console.log(index)
         shoppingCart.splice(index,1);
       
        console.log(shoppingCart)
        
        console.log(shoppingCart)
        
} 
    useEffect(()=>{
        const fetchCart = async ()=>{
       try {
        
        const response = await axios.get("http://localhost:3000/api/cart")
        const cart=response.data.items
        setShoppingCart(cart)
        console.log(cart)
        
        

       } catch (error) {
        console.error(error)
       }
    }
       fetchCart() 
    },[] )

    return(
        <>
        <div className="cart_page">
            {shoppingCart.length > 0  ?
            shoppingCart.map((cartItem,idx)=>{
                return(
                    <div className="cart_item" key={idx}>
                    <img className="cart_image" src={cartItem.image}/>
                    <span>{cartItem.playerName}</span>
                    <span>${cartItem.price}</span>
                    <select name="1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>

                    </select>
                    <button onClick={()=>removeCartItem(idx)}>Remove from Cart</button>
                    </div>
                )
            })
             :<h1>No items currently in cart</h1>}
        </div>
        <div className="order_information">
            <p>name</p>
            <p>address</p>
            <p>creditcard</p>
        </div>
        </>
    )

}

export default OrderForm;