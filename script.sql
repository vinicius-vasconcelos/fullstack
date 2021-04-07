DROP DATABASE IF EXISTS Pokemon;
CREATE DATABASE IF NOT EXISTS Pokemon;

USE Pokemon;

CREATE TABLE IF NOT EXISTS pokemons (
	id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(100) NOT NULL,
  
  PRIMARY KEY (id)
);

INSERT INTO pokemons (id, name, type) VALUES
  ('4', 'Charmander', 'Fire'),
  ('5', 'Charmeleon', 'Fire'),
  ('7', 'Squirtle', 'Water'),
  ('8', 'Wartotle', 'Water'),
  ('9', 'Blastoise', 'Water'),
  ('10', 'Caterpie', 'Bug'),
  ('11', 'Metapod', 'Bug'),
  ('23', 'Ekans', 'Poison'),
  ('24', 'Arbok', 'Poison'),
  ('25', 'Pikachu', 'Eletric');
