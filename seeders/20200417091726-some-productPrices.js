"use strict";

const ProductPrice = require("../models").productPrice;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productPrices = await Promise.all([
      ProductPrice.upsert({
        productId: 1,
        supermarketId: 1,
        priceEuroCent: 299,
      }),
      ProductPrice.upsert({
        productId: 1,
        supermarketId: 2,
        priceEuroCent: 275,
      }),
      ProductPrice.upsert({
        productId: 1,
        supermarketId: 3,
        priceEuroCent: 310,
      }),
      ProductPrice.upsert({
        productId: 2,
        supermarketId: 1,
        priceEuroCent: 255,
      }),
      ProductPrice.upsert({
        productId: 2,
        supermarketId: 2,
        priceEuroCent: 249,
      }),
      ProductPrice.upsert({
        productId: 2,
        supermarketId: 3,
        priceEuroCent: 250,
      }),
      ProductPrice.upsert({
        productId: 3,
        supermarketId: 1,
        priceEuroCent: 490,
      }),
      ProductPrice.upsert({
        productId: 3,
        supermarketId: 2,
        priceEuroCent: 475,
      }),
      ProductPrice.upsert({
        productId: 3,
        supermarketId: 3,
        priceEuroCent: 525,
      }),
      ProductPrice.upsert({
        productId: 4,
        supermarketId: 1,
        priceEuroCent: 670,
      }),
      ProductPrice.upsert({
        productId: 4,
        supermarketId: 2,
        priceEuroCent: 650,
      }),
      ProductPrice.upsert({
        productId: 4,
        supermarketId: 3,
        priceEuroCent: 680,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("productPrices", null, {});
  },
};
