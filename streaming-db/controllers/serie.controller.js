const model = require("../models");

const Serie = model.serie_model;
const Categoria = model.categoria_model;

//Definindo as relações entre os Models
Categoria.hasMany(Serie, {
    foreignKey: "categoriaId",
});

Serie.belongsTo(Categoria, {
    foreignKey: "categoriaId",
});

const create = (request, response) => {

    const caData = {
        nome: request.body.nome
    };

    Categoria.create(caData)
        .then((object) => {
            const seData = {
                titulo: request.body.titulo,
                subtitulo: request.body.subtitulo,
                episodios: request.body.episodios,
                sinopse: request.body.sinopse,
                categoriaId: object.dataValues.categoriaId,
                classificacaoIndicativa: request.body.classificacaoIndicativa
            };
            
            let dataResponse = { ...object.dataValues };
            
            Serie.create(seData)
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

//Lista todas as séries
const getAll = (request, response) => {
    Serie.findAll({
        attributes: [
            "titulo",
            "subtitulo",
            "episodios",
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

//Seleciona uma série por ID
const getById = (request, response) => {
    Serie.findByPk(request.params.id)
        .then((object) => {
            response.status(200).send(object.dataValues);
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

//Altera uma série dado um ID
const alterById = (request, response) => {
    const caData = {
        nome: request.body.nome,
    };

    Categoria.update(caData, {
        raw: true,
        where: { categoriaId: request.params.id },
    })
        .then((object) => {
            const seData = {
                titulo: request.body.titulo,
                subtitulo: request.body.subtitulo,
                episodios: request.body.episodios,
                sinopse: request.body.sinopse,
                categoriaId: request.params.id,
                classificacaoIndicativa: request.body.classificacaoIndicativa
            };

            Serie.update(seData, {
                where: { categoriaId: seData.categoriaId },
                raw: true,
            })
                .then((object) => {
                    response
                        .status(200)
                        .send("Série com id = " + request.params.id + " Atualizado!");
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

const deleteById = (request, response) => {
    Serie.destroy({
        where: { categoriaId: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhuma série foi encontrada para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Série com id = " + request.params.id + " deletada!"
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