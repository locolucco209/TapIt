DROP DATABASE IF EXISTS TapIt_db;

CREATE DATABASE TapIt_db;

USE TapIt_db;

DROP TABLE IF EXISTS user_accounts;

CREATE TABLE user_accounts (id int AUTO_INCREMENT, first_name VARCHAR(50), last_name VARCHAR(100), email VARCHAR(80), access_token VARCHAR(50), PRIMARY KEY (id));

INSERT INTO user_accounts (first_name, last_name, email, access_token) VALUES ('Fleebs', 'Lorkdar', 'stupidshit@dumb.com', 'a bunch of random shit');
