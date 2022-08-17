const express = require("express");
const cartRouter = express.Router();
const {getProductById} = require("../db/models/productsModel");

cartRouter.get("/", async (req, res, next) => {
    const {cart} = req.session;
    if (!cart) {
        res.send("No items to display");
    } else {
        res.send(cart);
    }
   
    
    
})

cartRouter.post("/:productId", async (req, res, next) => {
    
     const id =req.params.productId;
    
    const product =  await getProductById({id});
   const{playerName, price}=product
   const cartItem ={id, playerName, price}
   
    
    const {cart} = req.session;
    console.log('this is cart', cart);
    if (cart) {
        const {items} = cart;
        items.push(cartItem);
    } else {
        console.log('else', req.session)
        req.session.cart = {items: [cartItem]};
    }
    res.send(cart)
})

module.exports = cartRouter