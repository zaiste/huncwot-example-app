CREATE TABLE task (
  id serial primary key,
  name text,
  done boolean
);

INSERT INTO task (name, done)
VALUES
    ('Share the love about Huncwot', false),
    ('Build a fantastic web application', false),
    ('Give back to the community', false);
