// NOTE: THIS COMPONENT IS NOT PART OF CURRENT APPLICATION AND
// IS AN ONGOING FEATURE STILL BEING BUILT OUT.

import React, { useState, useEffect } from "react";
import "../style/Cart.css";

const Cart = (props) => {
  const { shoppingCart, setShoppingCart } = props;

  return (
    <>
      <div className="cart">
        <h4>this is going to be where the users cart is going to be</h4>
        <h3>we are going to have each item listed in a column</h3>
        <h3>
          then have a total at the bottom of the cart with a submit order button
        </h3>
      </div>
    </>
  );
};

export default Cart;
