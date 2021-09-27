const model = require("../models");

const Filme = model.filme_model;
const Categoria = model.categoria_model;

//Definindo as relações entre os Models
Categoria.hasMany(Filme, {
    foreignKey: "categoriaId",
});

Filme.belongsTo(Categoria, {
    foreignKey: "categoriaId",
});

// Cria um filme
const create = (request, response) => {

    const caData = {
        nome: request.body.nome
    };

    Categoria.create(caData)
        .then((object) => {
            const fiData = {
                titulo: request.body.titulo,
                subtitulo: request.body.subtitulo,
                duracao_min: request.body.duracao_min,
                sinopse: request.body.sinopse,
                categoriaId: object.dataValues.categoriaId,
                classificacaoIndicativa: request.body.classificacaoIndicativa
            };

            let dataResponse = { ...object.dataValues };

            Filme.create(fiData)
                .then((object) => {
                    let result = object.dataValues;
                    delete result.categoriaId;
                    dataResponse = { ...dataResponse, ...result };
                    response.status(200).send(dataResponse);
                })
                .catch((error) => {
                    console.error(error);
                    response.status(400).send(error);
                });
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

//Lista todos os filmes
const getAll = (request, response) => {
    Filme.findAll({
        attributes: [
            "titulo",
            "subtitulo",
            "duracao_min",
            "sinopse",
            "categoriaId",
            "classificacaoIndicativa",
            "categoria_model.nome",
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

//Seleciona um filme por ID
const getById = (request, response) => {
    Filme.findByPk(request.params.id)
        .then((object) => {
            response.status(200).send(object.dataValues);
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

//Altera um filme dado um ID
const alterById = (request, response) => {
    const caData = {
        nome: request.body.nome,
    };

    Categoria.update(caData, {
        raw: true,
        where: { categoriaId: request.params.id },
    })
        .then((object) => {
            const fiData = {
                titulo: request.body.titulo,
                subtitulo: request.body.subtitulo,
                duracao_min: request.body.duracao_min,
                sinopse: request.body.sinopse,
                categoriaId: request.params.id,
                classificacaoIndicativa: request.body.classificacaoIndicativa
            };

            Filme.update(fiData, {
                where: { categoriaId: fiData.categoriaId },
                raw: true,
            })
                .then((object) => {
                    response
                        .status(200)
                        .send("Filme com id = " + request.params.id + " Atualizado!");
                })
                .catch((error) => {
                    console.error(error);
                    response.status(400).send(error);
                });
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

// Deleta um filme dado um ID
const deleteById = (request, response) => {
    Filme.destroy({
        where: { categoriaId: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhum filme foi encontrado para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Filme com id = " + request.params.id + " deletado!"
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