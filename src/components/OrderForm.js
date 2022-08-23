import React, { useState, useEffect } from "react";
import "../style/OrderForm.css";
import axios from "axios";

const OrderForm = ({currentUser}) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  



  
  const removeCartItem = async (index) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/cart/${index}`)
        
        setShoppingCart(response.data)
    } catch (error) {
        console.log(error)
    }

  };


  const submitOrder = async (event) =>{
    event.preventDefault();
    if (!shoppingCart.length){
       alert("Please add items to cart to continue");
    } else{ alert(`Thanks for the order ${currentUser.name}! Your order will ship out to ${currentUser.location} shortly` )}
   
    setShoppingCart([]);
    


  }



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
              <span>1</span>
              <button onClick={() => removeCartItem(idx)}>
                Remove from Cart
              </button>
            </div>
            
          </>
          );
        } )
      
        ) : (
        <h1>No items currently in cart</h1>
      )}
    </div>
    {currentUser.name  ?
    
      <div className="order_information">
            <form className="submit_form" onSubmit={submitOrder}>
             <h4>{currentUser.name}, please submit order below!!!</h4>
              <button className="order_btn" typeof="submit">SUBMIT ORDER</button>
            </form>
        </div>
    :<h3>Please Login or Register account to submit order</h3>
  }
    
  </>
);
};

export default OrderForm;



