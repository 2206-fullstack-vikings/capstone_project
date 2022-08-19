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
   const{playerName, price,image}=product
   const cartItem ={id, image, playerName, price}
   
    
    const {cart} = req.session;
   
    if (cart) {
        const {items} = cart;
        items.push(cartItem);
    } else {
        req.session.cart = {items: [cartItem]};
        
    }
    res.send(cart)
})

cartRouter.delete('/:cartIndex', (req, res, next) =>{
    const idx = req.params.cartIndex;
   
    
    const {cart}= req.session
    const {items}= cart;
     items.splice(idx,1)
    
res.send(items)
})
module.exports = cartRouter