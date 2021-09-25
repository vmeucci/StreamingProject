const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    enderecoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "enderecoId"
    },
    logradouro: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "logradouro"
    },
    bairro: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bairro"
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "numero"
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cep"
    }
  };
  const options = {
    tableName: "endereco",
    comment: "",
    indexes: []
  };
  const EnderecoModel = sequelize.define("endereco_model", attributes, options);
  return EnderecoModel;
};