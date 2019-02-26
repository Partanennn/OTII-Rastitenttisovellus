CREATE DATABASE db;
USE db;

CREATE TABLE db.teacher
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varChar(50) NOT NULL,
    priority TINYINT,
    email varChar(50) NOT NULL
)
ENGINE=InnoDB;

CREATE TABLE db.data
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    student_name varChar(40) NOT NULL,
    student_number INT NOT NULL,
    student_email varChar(50),
    course_number varChar(10),
    course_name varChar(50),
    room varChar(30),
    tent_date date
)
ENGINE=InnoDB;