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
      autoIncrement: true,
      comment: null,
      field: "serieId"
    },
    titulo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "titulo"
    },
    subtitulo: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "subtitulo"
    },
    episodios: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "episodios"
    },
    sinopse: {
      type: DataTypes.STRING(5000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sinopse"
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "categoriaId",
      references: {
        key: "categoriaId",
        model: "categoria_model"
      }
    },
    classificacaoIndicativa: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "classificacaoIndicativa"
    }
  };
  const options = {
    tableName: "serie",
    comment: "",
    indexes: [{
      name: "categoriaId",
      unique: false,
      type: "BTREE",
      fields: ["categoriaId"]
    }]
  };
  const SerieModel = sequelize.define("serie_model", attributes, options);
  return SerieModel;
};