import React ,{useState, useEffect} from "react";
import "../style/Cart.css"



const Cart =(props)=>{
    const {shoppingCart, setShoppingCart}= props;




// useEffect(()=>{
//     const renderCart = ()=>{
//         shoppingCart.map((eachItem,idx)=>{
//             return(
//                 <div>
//                     <span>{eachItem.playerName}</span>
//                     <span>{eachItem.price}</span>
//                 </div>
//             )
//         })
//     };
//      renderCart()
// },[])
    
            
    return(
        <>
              
        <div className='cart'>
           
        <h4>this is going to be where the users cart is going to be</h4>
        <h3>we are going to have each item listed in a column</h3>
        <h3>then have a total at the bottom of the cart with a submit order button</h3>
        </div>
        </>
    )
}

export default Cart;