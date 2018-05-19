DROP DATABASE IF EXISTS TapIt_db;

CREATE DATABASE TapIt_db;

USE TapIt_db;

DROP TABLE IF EXISTS login;

CREATE TABLE login (id int AUTO_INCREMENT, full_name varchar(50), first_name varchar(50),  last_name varchar(100), email varchar(80), third_party_id varchar(50) PRIMARY KEY (id));
