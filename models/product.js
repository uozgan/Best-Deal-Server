"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {}
  );
  product.associate = function (models) {
    // associations can be defined here
    product.belongsTo(models.category);
    product.belongsToMany(models.supermarket, {
      through: "productPrices",
      foreignKey: "productId",
    });
    product.belongsToMany(models.cart, {
      through: "cartProducts",
      foreignKey: "productId",
    });
  };
  return product;
};
