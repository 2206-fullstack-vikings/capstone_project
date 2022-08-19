import React, { useState, useEffect } from "react";
import "../style/OrderForm.css";
import axios from "axios";

const OrderForm = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const removeCartItem = async (index) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/cart/${index}`)
        
        setShoppingCart(response.data)
    } catch (error) {
        console.log(error)
    }
//     let tempCart = [];

//     let placeholder = shoppingCart;

//     placeholder = placeholder.map((cartItem, idx) => {
//       if (parseInt(idx) != parseInt(index)) {
//         tempCart.push(cartItem);
//       }
//     });

//     setShoppingCart(tempCart);
  };
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/cart");
       
        const cart = response.data.items;
        setShoppingCart(cart);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCart();
  }, []);

  return (
    <>
      <div className="cart_page">
        {shoppingCart && shoppingCart.length ? (
          shoppingCart.map((cartItem, idx) => {
            return (
                <>
              <div className="cart_item" key={idx}>
                <img className="cart_image" src={cartItem.image} />
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
                <button onClick={() => removeCartItem(idx)}>
                  Remove from Cart
                </button>
              </div>
              <div className="order_information">
              <p>name</p>
              <p>address</p>
              <p>creditcard</p>
            </div>
            </>
            );
          })
        ) : (
          <h1>No items currently in cart</h1>
        )}
      </div>
      
    </>
  );
};

export default OrderForm;
