"use strict";

const Category = require("../models").category;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await Promise.all([
      Category.upsert({
        type: "Food",
      }),
      Category.upsert({
        type: "House Goods",
      }),
      Category.upsert({
        type: "Toys",
      }),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
