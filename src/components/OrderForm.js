import React, { useState, useEffect } from "react";
import "../style/OrderForm.css";
import axios from "axios";

const OrderForm = ({currentUser}) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [orderName, setOrderName]= useState("");
  const [orderAddress, setOrderAddress]= useState("");
  const [orderCity, setOrderCity]= useState("");
  const [orderState, setOrderState]= useState("");
  const [orderZip, setOrderZip]= useState("");




  
  const removeCartItem = async (index) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/cart/${index}`)
        
        setShoppingCart(response.data)
    } catch (error) {
        console.log(error)
    }

  };


  const submitOrder = async (event) =>{



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
            
          </>
          );
        } )
      
        ) : (
        <h1>No items currently in cart</h1>
      )}
    </div>
    {currentUser.name ?
    
      <div className="order_information">
            <form onSubmit={submitOrder}>
             <h4>{currentUser.name}, please submit order below!!!</h4>
              <button typeof="submit">SUBMIT ORDER</button>
            </form>
        </div>
    :<h1>Please Login or Register account to submit order</h1>
  }
    
  </>
);
};

export default OrderForm;



// KEEPING JUST IN CASE I BREAK SOMETHING -DUSTIN B.
//     let tempCart = [];

//     let placeholder = shoppingCart;

//     placeholder = placeholder.map((cartItem, idx) => {
//       if (parseInt(idx) != parseInt(index)) {
//         tempCart.push(cartItem);
//       }
//     });

//     setShoppingCart(tempCart);