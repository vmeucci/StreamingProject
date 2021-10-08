DROP DATABASE IF EXISTS STREAMING;
CREATE DATABASE STREAMING;
USE STREAMING;


CREATE TABLE endereco (
enderecoId INT AUTO_INCREMENT PRIMARY KEY,
logradouro VARCHAR (50),
bairro VARCHAR (40),
numero INTEGER (6),
cep VARCHAR(8)
);


CREATE TABLE cadastro (
cadastroId INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (200) NOT NULL,
sobrenome VARCHAR (200) NOT NULL,
dataNascimento DATE NOT NULL,
email VARCHAR (100) NOT NULL,
cpf VARCHAR (14),
enderecoId INT NOT NULL,
FOREIGN KEY (enderecoId) REFERENCES endereco(enderecoId)
);


CREATE TABLE categoria (
categoriaId INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (200)
);


CREATE TABLE filme (
filmeId INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR (200) NOT NULL,
subtitulo VARCHAR (150),
duracao_min INT NOT NULL,
sinopse VARCHAR (5000),
categoriaId INT NOT NULL,
classificacaoIndicativa VARCHAR (30),
FOREIGN KEY (categoriaId) REFERENCES categoria(categoriaId) 
);


CREATE TABLE serie (
serieId INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR (200) NOT NULL,
subtitulo VARCHAR (150), 
episodios INT,
sinopse VARCHAR (5000),
categoriaId INT NOT NULL,
classificacaoIndicativa VARCHAR (30),
FOREIGN KEY (categoriaId) REFERENCES categoria(categoriaId) 
);


CREATE TABLE filmeCategoriaRelacao (
filmeId INT,
categoriaId INT,
PRIMARY KEY (filmeId, categoriaId),
FOREIGN KEY (filmeId) REFERENCES filme(filmeId) ON DELETE CASCADE,
FOREIGN KEY (categoriaId) REFERENCES categoria(categoriaId)
);


CREATE TABLE serieCategoriaRelacao (
serieId INT,
categoriaId INT,
PRIMARY KEY (serieId, categoriaId),
FOREIGN KEY (serieId) REFERENCES serie(serieId) ON DELETE CASCADE,
FOREIGN KEY (categoriaId) REFERENCES categoria(categoriaId)
);





