const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "categoriaId"
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    }
  };
  const options = {
    tableName: "categoria",
    comment: "",
    indexes: []
  };
  const CategoriaModel = sequelize.define("categoria_model", attributes, options);
  return CategoriaModel;
};