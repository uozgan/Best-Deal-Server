"use strict";
module.exports = (sequelize, DataTypes) => {
  const productPrice = sequelize.define(
    "productPrice",
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      supermarketId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "supermarkets",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      priceEuroCent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  productPrice.associate = function (models) {
    // associations can be defined here
    productPrice.belongsTo(models.product);
    productPrice.belongsTo(models.supermarket);
  };
  return productPrice;
};
