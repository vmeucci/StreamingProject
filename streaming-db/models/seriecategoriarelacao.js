const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    serieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "serieId",
      references: {
        key: "serieId",
        model: "serie_model"
      }
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "categoriaId",
      references: {
        key: "categoriaId",
        model: "categoria_model"
      }
    }
  };
  const options = {
    tableName: "seriecategoriarelacao",
    comment: "",
    indexes: [{
      name: "categoriaId",
      unique: false,
      type: "BTREE",
      fields: ["categoriaId"]
    }]
  };
  const SeriecategoriarelacaoModel = sequelize.define("seriecategoriarelacao_model", attributes, options);
  return SeriecategoriarelacaoModel;
};