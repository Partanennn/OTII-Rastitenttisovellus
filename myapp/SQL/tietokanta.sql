DROP DATABASE IF EXISTS db;
CREATE DATABASE db;
USE db;

/* Priority data of teachers */
CREATE TABLE db.teacher
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varChar(50) NOT NULL,
    priority TINYINT DEFAULT 10,
    email varChar(50) NOT NULL
)
ENGINE=InnoDB;

/* All data about student who is coming for tent */
CREATE TABLE db.data
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    huone varChar(10),
    valvoja varChar(50),
    luokka varChar(10),
    opiskelija varChar(50),
    kurssi varChar(50),
    opettaja varChar(50),
    tenttityyppi varChar(50),
    tentin_lisatiedot varChar(50),
    kampus varChar(50)
)
ENGINE=InnoDB;

CREATE TABLE db.classroom
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nimi varChar(10),
    koko int(3),
    atk boolean,
    kampus varChar(50)
)
ENGINE=InnoDB;

CREATE TABLE db.courses 
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nimi varCHar(60),
    atk boolean
)
ENGINE=InnoDB;
