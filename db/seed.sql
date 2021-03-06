DROP TABLE IF EXISTS sports_bars CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL
);

CREATE TABLE sports_bars (
  id SERIAL PRIMARY KEY,
  bar_id VARCHAR,
  name VARCHAR(255),
  address VARCHAR(255),
  rating VARCHAR,
  price VARCHAR(255),
  icon TEXT,
  user_id INT REFERENCES users(id)
);