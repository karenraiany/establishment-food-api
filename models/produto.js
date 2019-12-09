'use strict';
module.exports = (sequelize, DataTypes) => {
  const produto = sequelize.define('produto', {
    nome: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  produto.associate = function(models) {
    produto.hasMany(models.valueSupermarket);
  };
  return produto;
};