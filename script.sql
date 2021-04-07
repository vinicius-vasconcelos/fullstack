DROP DATABASE IF EXISTS Pokemon;
CREATE DATABASE IF NOT EXISTS Pokemon;

USE Pokemon;

CREATE TABLE IF NOT EXISTS pokemons (
	id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(100) NOT NULL,
  
  PRIMARY KEY (id)
);

INSERT INTO pokemons (name, type) VALUES
  ('Charmander', 'Fire'),
  ('Charmeleon', 'Fire'),
  ('Squirtle', 'Water'),
  ('Wartotle', 'Water'),
  ('Blastoise', 'Water'),
  ('Caterpie', 'Bug'),
  ('Metapod', 'Bug'),
  ('Ekans', 'Poison'),
  ('Arbok', 'Poison'),
  ('Pikachu', 'Eletric');
