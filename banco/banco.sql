DROP DATABASE IF EXISTS projeto;
CREATE DATABASE projeto;
USE projeto;

DROP TABLE IF EXISTS `resposta`;
DROP TABLE IF EXISTS `perguntas`;
DROP TABLE IF EXISTS `users`;


CREATE TABLE `users` (
    `id` INT (10) NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR (100) NOT NULL,
    `matricula` VARCHAR (100) NOT NULL UNIQUE,
    `periodo` VARCHAR (100) NOT NULL,
    `senha` VARCHAR (100) NOT NULL,
    PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8;


CREATE TABLE `perguntas` (
    `id` INT (10) NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR (100) NOT NULL,
    `pergunta` VARCHAR (999) NOT NULL,
    `id_user` INT (10),
    PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8;


CREATE TABLE `resposta` (
    `id` INT (10) NOT NULL AUTO_INCREMENT,
    `resposta` VARCHAR (999) NOT NULL,
    `id_user` INT (10),
    `id_pergunta` INT (10),
    PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8;


ALTER TABLE `perguntas`
ADD FOREIGN KEY users_perguntas_fk (`id_user`) REFERENCES `users`(`id`);

ALTER TABLE `resposta`
ADD FOREIGN KEY users_resposta_fk (`id_user`) REFERENCES `users`(`id`);

ALTER TABLE `resposta`
ADD FOREIGN KEY perguntas_resposta_fk (`id_pergunta`) REFERENCES `perguntas`(`id`);