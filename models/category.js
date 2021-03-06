"use strict";
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      type: DataTypes.STRING,
    },
    {}
  );
  category.associate = function (models) {
    // associations can be defined here
    category.hasMany(models.product);
  };
  return category;
};
