const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    filmeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "filmeId",
      references: {
        key: "filmeId",
        model: "filme_model"
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
    tableName: "filmecategoriarelacao",
    comment: "",
    indexes: [{
      name: "categoriaId",
      unique: false,
      type: "BTREE",
      fields: ["categoriaId"]
    }]
  };
  const FilmecategoriarelacaoModel = sequelize.define("filmecategoriarelacao_model", attributes, options);
  return FilmecategoriarelacaoModel;
};