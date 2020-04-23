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

module.exports = router;
