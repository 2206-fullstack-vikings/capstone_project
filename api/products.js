const express = require('express');
const productsRouter = express.Router();
const { 
    getAllProducts, 
    getProductById, 
    getProductsByPlayerName, 
    getProductsByTeamName, 
    deleteProductById
} = require("../db/products")
const {getUserByUsername} = require("../db/users")


// GET /api/products
productsRouter.get("/", async (req, res, next) => {
    try {
        const allProducts = await getAllProducts();
        res.send(allProducts);
    } catch (error) {
        console.error(error);
    }
})

// GET /api/products:productId
productsRouter.get("/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
        const productsById = await getProductById(id);
        res.send(productsById);
    } catch (error) {
        console.error(error);
    }
})
// GET /api/products:productId
productsRouter.get("/:playerName", async (req, res, next) => {
    const { playerName } = req.params;
    try {
        const productsByPlayer = await getProductsByPlayerName(playerName);
        res.send(productsByPlayer);
    } catch (error) {
        console.error(error);
    }
})
// GET /api/products:productId
productsRouter.get("/:teamName", async (req, res, next) => {
    const { teamName} = req.params;
    try {
        const productsByTeam = await getProductsByTeamName(teamName);
        res.send(productsByTeam);
    } catch (error) {
        console.error(error);
    }
})
// GET /api/products:productId
productsRouter.get("/:division", async (req, res, next) => {
    const { division } = req.params;
    try {
        const productsByDivision = await getProductsByDivision(division);
        res.send(productsByDivision);
    } catch (error) {
        console.error(error);
    }
})

module.exports = productsRouter;