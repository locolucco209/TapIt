DROP DATABASE IF EXISTS TapIt_db;

CREATE DATABASE TapIt_db;

USE TapIt_db;

DROP TABLE IF EXISTS user_accounts;

CREATE TABLE user_accounts (
    id int AUTO_INCREMENT, 
    first_name VARCHAR(50), 
    last_name VARCHAR(100), 
    email VARCHAR(80), 
    access_token VARCHAR(300), 
    PRIMARY KEY (id)
    );


SELECT email FROM user_accounts;