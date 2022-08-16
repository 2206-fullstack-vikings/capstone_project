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
    const product = getProductById(id);
    console.log("inside cart post router", id);
    // const cartItem = {product.image, product.playerName, product.price}
    res.send(product);
    const {cart} = req.session;
    if (cart) {
        const {items} = cart;
        items.push(cartItem);
    } else {
        req.session.cart = {items: [cartItem]};
    }
})

module.exports = cartRouter