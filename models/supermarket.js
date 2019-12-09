'use strict';
module.exports = (sequelize, DataTypes) => {
  const supermarket = sequelize.define('supermarket', {
    nome: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  supermarket.associate = function(models) {
    supermarket.hasMany(models.valueSupermarket);
  };
  return supermarket;
};