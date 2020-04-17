"use strict";

const Cart = require("../models").cart;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const carts = await Promise.all([
      Cart.upsert({
        userId: 1,
      }),
      Cart.upsert({
        userId: 2,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("carts", null, {});
  },
};
