"use strict";
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define(
    "cart",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {}
  );
  cart.associate = function (models) {
    // associations can be defined here
    cart.belongsToMany(models.product, {
      through: "cartProducts",
      foreignKey: "cartId",
    });
    cart.belongsTo(models.user);
  };
  return cart;
};
