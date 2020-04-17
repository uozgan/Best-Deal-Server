"use strict";

const CartProduct = require("../models").cartProduct;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cartProducts = await Promise.all([
      CartProduct.upsert({
        productId: 1,
        cartId: 1,
        quantity: 3,
      }),
      CartProduct.upsert({
        productId: 2,
        cartId: 1,
        quantity: 2,
      }),
      CartProduct.upsert({
        productId: 3,
        cartId: 1,
        quantity: 1,
      }),
      CartProduct.upsert({
        productId: 1,
        cartId: 2,
        quantity: 1,
      }),
      CartProduct.upsert({
        productId: 4,
        cartId: 2,
        quantity: 1,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cartProducts", null, {});
  },
};
