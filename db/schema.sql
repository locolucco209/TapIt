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

CREATE TABLE sanDiego_breweries (
    id int AUTO_INCREMENT, 
    name VARCHAR(300), 
    street_address VARCHAR(300), 
    city VARCHAR(300), 
    state VARCHAR(300), 
    zip INT(20), 
    likes INT(100), 
    PRIMARY KEY (id));

    INSERT INTO sanDiego_breweries(name, street_address, city, state, zip, likes) VALUES ('10 Barrel Brewing Co.', '1501 E St', 'San Diego', 'CA', '92101', '0')