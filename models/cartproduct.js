"use strict";
module.exports = (sequelize, DataTypes) => {
  const cartProduct = sequelize.define(
    "cartProduct",
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
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "carts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {}
  );
  cartProduct.associate = function (models) {
    // associations can be defined here
    cartProduct.belongsTo(models.product);
    cartProduct.belongsTo(models.cart);
  };
  return cartProduct;
};
