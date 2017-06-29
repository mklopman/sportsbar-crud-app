DROP TABLE IF EXISTS sports_bars;
DROP TABLE IF EXISTS users;

CREATE TABLE users;
id SERIAL PRIMARY KEY,
name VARCHAR,
email VARCHAR,
password_digest VARCHAR NOT NULL

CREATE TABLE sports_bars (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  rating INT,
  price VARCHAR(255),
  icon TEXT,
  lat VARCHAR,
  long VARCHAR
);

