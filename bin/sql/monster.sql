
CREATE TABLE monsters (
  id serial,
  name Varchar(50),
  personality Varchar(50)
);

CREATE TABLE habitats (
  id serial,
  name Varchar(50),
  climate Varchar(50),
  tempreture int
);

CREATE TABLE lives (
  monster Varchar(50),
  habitat Varchar(50)
);

INSERT INTO monsters (name,personality)
VALUES
('Fluffy','aggressive'),
('Noodles','impatient'),
('Rusty', 'passionate');

INSERT INTO habitats (name,climate,tempreture)
VALUES
('desert','dry',100),
('forrest','haunted',70),
('mountain', 'icy',30);

INSERT INTO lives (monster,habitat)
VALUES 
('Fluffy','desert'),
('Noodles','forrest'),
('Rusty','mountain');
