-- DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE e5v6hftvhk8qie5t;

CREATE TABLE burgers (
  id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(60) UNIQUE NOT NULL,
  devoured BOOLEAN
) 

