'use strict';
module.exports = (sequelize, DataTypes) => {
  const valueSupermarket = sequelize.define('valueSupermarket', {
    value: DataTypes.INTEGER,
    supermarketId: DataTypes.INTEGER,
    produtoId: DataTypes.INTEGER,
    data: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  valueSupermarket.associate = function(models) {
    valueSupermarket.belongsTo(models.supermarket, {
      foreignKey: 'supermarketId'
    });

    valueSupermarket.belongsTo(models.produto, {
      foreignKey: 'produtoId'
    });
  };
  return valueSupermarket;
};