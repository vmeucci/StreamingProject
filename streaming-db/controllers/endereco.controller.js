const model = require("../models");

const Endereco = model.endereco_model;

// Cria um Endereço
const create = (request, response) => {

    let dataResponse = { ...object.dataValues };

    Endereco.create(request.body)
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

//Lista todos os endereços
const getAll = (request, response) => {
    Endereco.findAll({
        attributes: [
            "logradouro",
            "bairro",
            "numero",
            "cep"
        ],
        raw: true,
    })
        .then((object) => {
            console.log(object);
            response.status(200);
            response.send(object);
        })
        .catch((error) => response.status(400).send(error));
};

//Seleciona um endereço por ID
const getById = (request, response) => {
    Endereco.findByPk(request.params.id)
        .then((object) => {
            response.status(200).send(object.dataValues);
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

//Altera um endereço dado um ID
const alterById = (request, response) => {
    const enData = {
        logradouro: request.body.logradouro,
        bairro: request.body.bairro,
        numero: request.body.numero,
        cep: request.body.cep
    };

    Endereco.update(enData, {
        raw: true,
        where: { enderecoId: request.params.id },
    })
        .then((object) => {
            response
                .status(200)
                .send("Endereço com id = " + request.params.id + " Atualizado!");
            }
        )
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

// Deleta um endereço dado um ID
const deleteById = (request, response) => {
    Endereco.destroy({
        where: { enderecoId: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhum endereço foi encontrado para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Endereço com id = " + request.params.id + " deletado!"
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