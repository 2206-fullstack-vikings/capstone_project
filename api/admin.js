const express = require("express");
const adminRouter = express.Router();
const {
  insertProduct,
  deleteProductById
} = require("../db/products");
const { getUserByUsername } = require("../db/users");

// DELETE /api/admin:productId
adminRouter.delete("/:productId", async (req, res, next) => {
  const { productId } = req.params;
  const { username } = req.body.user;
  try {
    const user = await getUserByUsername(username);
    if (user.admin) {
      const product = await deleteProductById(productId);
      res.send(product);
    } else {
      next(
        product
          ? {
              name: "UnauthorizedUserError",
              message: "You must be an adminsitrator to delete a product",
            }
          : {
              name: "ProductNotFoundError",
              message: "That product does not exist",
            }
      );
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// post /api/admin
adminRouter.post("/", async (req, res, next) => {
  const { playerName, teamName, division, jerseyNumber, price } = req.body;
  const productData = {};
  productData.playerName = playerName;
  productData.teamName = teamName;
  productData.division = division;
  productData.jserseyNumber = jerseyNumber;
  productData.playerName = playerName;
  productData.price = price;
  try {
    const user = await getUserByUsername(username);
    if (user.admin) {
      const product = await insertProduct(productData);
    } else {
      next(
        product
          ? {
              name: "UnauthorizedUserError",
              message: "You must be an adminsitrator to delete a product",
            }
          : {
              name: "ProductNotFoundError",
              message: "That product does not exist",
            }
      );
    }
    if (product) {
      res.send({ product });
    } else {
      next({
        name: "Error creating product",
        message: `Error creating product`,
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = adminRouter;
