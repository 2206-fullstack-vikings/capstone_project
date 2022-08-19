const express = require('express');
const productsRouter = express.Router();
const { 
    getAllProducts, 
    getProductById, 
    getProductsByPlayerName, 
    getProductsByTeamName, 
    deleteProductById,
    insertProduct,
    deleteProduct,
    editProduct
} = require("../db/models/productsModel")
const {getUserByUsername} = require("../db/models/usersModel")


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

productsRouter.post("/", async (req, res, next) => {
          console.log("this is req.body");
        console.log(req.body);
    try {
        const productAdded = await insertProduct(req.body.newProduct);
            console.log("productAdded");
        console.log(productAdded)
  
        res.send("it worked")
    } catch(error){
        console.log(error)
    }
})

productsRouter.patch("/:productId", async (req, res, next) => {
    const { productId } = req.params;
        console.log("req.body")
    console.log(req.body)
    try {
        const productEdited = await editProduct({id: productId, playerName: req.body.product.playerName, teamName: req.body.product.teamName, division: req.body.product.division,jerseyNumber: req.body.product.jerseyNumber, price: req.body.product.price, image: req.body.product.image,});
        console.log("productEdited");
        console.log(productEdited);
        console.log("req.body");
        console.log(req.body.product)
        res.send(productEdited)
    } catch (error) {
        console.log(error);
    }
})

productsRouter.delete("/:productId", async (req, res, next) => {
    const { productId } = req.params
    try {
    const deletedProduct = await deleteProduct(productId);

    res.send(deletedProduct)
    } catch (error){
        console.log(error)
    }
})

module.exports = productsRouter;