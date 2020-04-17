"use strict";
module.exports = (sequelize, DataTypes) => {
  const supermarket = sequelize.define(
    "supermarket",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  supermarket.associate = function (models) {
    // associations can be defined here

    supermarket.belongsToMany(models.product, {
      through: "productPrices",
      foreignKey: "supermarketId",
    });
  };
  return supermarket;
};
