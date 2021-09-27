const model = require("../models");

const Endereco = model.endereco_model;

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

module.exports = {
    create,
};