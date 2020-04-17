"use strict";

const Supermarket = require("../models").supermarket;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const supermarkets = await Promise.all([
      Supermarket.upsert({
        name: "Albert Heijn",
      }),
      Supermarket.upsert({
        name: "Jumbo",
      }),
      Supermarket.upsert({
        name: "Plus",
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("supermarkets", null, {});
  },
};
