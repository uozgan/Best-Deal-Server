"use strict";

const Product = require("../models").product;
const Category = require("../models").category;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const food = await Category.findOne({ where: { type: "Food" } });
    const toys = await Category.findOne({ where: { type: "Toys" } });
    const houseGood = await Category.findOne({
      where: { type: "House Goods" },
    });

    const products = await Promise.all([
      Product.upsert({
        name: "Orange",
        brand: "Ah",
        image:
          "https://pngriver.com/wp-content/uploads/2018/04/Download-Orange-Transparent.png",
        categoryId: food.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Product.upsert({
        name: "Apple",
        brand: "Ah",
        image:
          "https://etenvandelelystadseboer.nl/wp-content/uploads/2019/04/jonagold2.png",
        categoryId: food.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Product.upsert({
        name: "Toilet Paper",
        brand: "Ah",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81Z72KPMkpL._AC_SY355_.jpg",
        categoryId: houseGood.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Product.upsert({
        name: "Teddy Bear",
        brand: "Ah",
        image:
          "https://www.internet-toys.com/producten/large/gerardos_toys_knuffelbeer_60_cm_lichtbruin_301036_1560944858.jpg",
        categoryId: toys.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
