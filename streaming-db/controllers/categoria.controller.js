const model = require("../models");

const Categoria = model.categoria_model;

// Cria uma categoria
const create = (request, response) => {

    let dataResponse = { ...object.dataValues };

    Categoria.create(request.body)
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

//Lista todos as categorias
const getAll = (request, response) => {
    Categoria.findAll({
        attributes: [
            "nome",
        ],
        raw: true,
        include: [
            {
                model: Categoria,
                required: true,
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

//Seleciona uma categoria por ID
const getById = (request, response) => {
    Categoria.findByPk(request.params.id)
        .then((object) => {
            response.status(200).send(object.dataValues);
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

//Altera uma categoria dado um ID
const alterById = (request, response) => {
    const caData = {
        nome: request.body.nome,
    };

    Categoria.update(caData, {
        raw: true,
        where: { categoriaId: request.params.id },
    })
        .then((object) => {
            response
                .status(200)
                .send("Categoria com id = " + request.params.id + " Atualizada!");
            }
        )
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

// Deleta uma categoria dado um ID
const deleteById = (request, response) => {
    Categoria.destroy({
        where: { categoriaId: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhuma categoria foi encontrado para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Categoria com id = " + request.params.id + " deletada!"
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