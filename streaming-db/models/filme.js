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
      autoIncrement: true,
      comment: null,
      field: "filmeId"
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
    duracao_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "duracao_min"
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
    tableName: "filme",
    comment: "",
    indexes: [{
      name: "categoriaId",
      unique: false,
      type: "BTREE",
      fields: ["categoriaId"]
    }]
  };
  const FilmeModel = sequelize.define("filme_model", attributes, options);
  return FilmeModel;
};