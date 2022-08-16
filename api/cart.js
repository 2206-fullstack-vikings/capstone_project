const express = require("express");
const cartRouter = express.Router();

cartRouter.get("/", async (req, res, error) => {
    res.send(req.sessionID)
})

cartRouter.post("/", async (req, res, error) => {
    
})








module.exports = cartRouter