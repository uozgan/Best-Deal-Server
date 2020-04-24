const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Product = require("../models").product;
const Category = require("../models").category;
const Cart = require("../models").cart;
const CartProduct = require("../models").cartProduct;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: { model: Category },
    });
    res.status(200).send(products);
  } catch (e) {
    next(e);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    const { productId, cartId, quantity } = req.body;
    console.log("productId, cartId, quantity", productId, cartId, quantity);

    console.log("Added Product", product);

    const cartProduct = await CartProduct.create({
      productId: product.id,
      cartId: cartId,
      quantity: quantity,
    });

    console.log("cartProduct", cartProduct);
    return res
      .status(201)
      .send({ message: "Product added to your cart", cartProduct });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
