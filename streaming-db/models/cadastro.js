const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    cadastroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "cadastroId"
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    sobrenome: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sobrenome"
    },
    dataNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dataNascimento"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cpf"
    },
    enderecoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "enderecoId",
      references: {
        key: "enderecoId",
        model: "endereco_model"
      }
    }
  };
  const options = {
    tableName: "cadastro",
    comment: "",
    indexes: [{
      name: "idEndereco",
      unique: false,
      type: "BTREE",
      fields: ["idEndereco"]
    }]
  };
  const CadastroModel = sequelize.define("cadastro_model", attributes, options);
  return CadastroModel;
};