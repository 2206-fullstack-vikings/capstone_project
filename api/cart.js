const express = require("express");
const cartRouter = express.Router();
const {getProductById} = require("../db/models/productsModel");

cartRouter.get("/items", async (req, res, error) => {
    const {cart} = req.session;
    if (!cart) {
        res.send("No items to display");
    } else {
        res.send(cart);
    }
    res.send(req.sessionID)
})

cartRouter.post("/items", async (req, res, error) => {
    const {id} = req.body;
    const product = await getProductById(id);
    const cartItem = {image: product.image, playerName: product.playerName, price: product.price}
    console.log("cartItem", cartItem);
    res.send(product);
    const {cart} = req.session;
    console.log('this is cart', cart);
    if (cart) {
        const {items} = cart;
        items.push(cartItem);
    } else {
        console.log('else', req.session)
        req.session.cart = {items: [cartItem]};
    }
})

module.exports = cartRouter