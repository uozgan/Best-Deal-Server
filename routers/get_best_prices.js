const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Product = require("../models").product;
const Category = require("../models").category;
const Cart = require("../models").cart;
const CartProduct = require("../models").cartProduct;

const router = new Router();

router.get("/:cartId", async (req, res, next) => {
  const cartId = req.params.cartId;
  console.log("CartId", cartId);

  try {
    const cart = await Cart.findByPk(cartId);

    const productsInCart = await CartProduct.findAll({
      where: {
        cartId: cart.id,
      },
    });
    res.status(200).send(productsInCart);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
