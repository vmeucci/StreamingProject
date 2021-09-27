const model = require("../models");

const Endereco = model.endereco_model;
const Cadastro = model.cadastro_model;

// Cria um Cadastro
const create = (request, response) => {

    let dataResponse = { ...object.dataValues };

    Cadastro.create(request.body)
        .then((object) => {
            let result = object.dataValues;
            dataResponse = { ...dataResponse, ...result };
            response.status(200).send(dataResponse);
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

//Lista todos os cadastros
const getAll = (request, response) => {
    Cadastro.findAll({
        attributes: [
            "nome",
            "sobrenome",
            "dataNascimento",
            "email",
            "cpf",
            "enderecoId",
            "endereco_model.logradouro",
            "endereco_model.bairro",
            "endereco_model.numero",
            "endereco_model.cep",
        ],
        raw: true,
        include: [
            {
                model: Endereco,
                required: false,
                attributes: [],
            },
        ],
    })
        .then((object) => {
            console.log(object);
            response.status(200);
            response.send(object);
        })
        .catch((error) => response.status(400).send(error));
};

//Seleciona um cadastro por ID
const getById = (request, response) => {
    Cadastro.findByPk(request.params.id)
        .then((object) => {
            response.status(200).send(object.dataValues);
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

//Altera um cadastro dado um ID
const alterById = (request, response) => {
    const caData = {
        nome: request.body.nome,
        sobrenome: request.body.sobrenome,
        dataNascimento: request.body.dataNascimento,
        email: request.body.email,
        cpf: request.body.cpf,
        enderecoId: object.dataValues.enderecoId,
    };

    Cadastro.update(caData, {
        raw: true,
        where: { cadastroId: request.params.id },
    })
        .then((object) => {
            response
                .status(200)
                .send("Cadastro com id = " + request.params.id + " Atualizado!");
            }
        )
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

// Deleta um cadastro dado um ID
const deleteById = (request, response) => {
    Cadastro.destroy({
        where: { cadastroId: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhum cadastro foi encontrado para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Cadastro com id = " + request.params.id + " deletado!"
                    );
            }
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

module.exports = {
    create,
    getAll,
    getById,
    alterById,
    deleteById,
};