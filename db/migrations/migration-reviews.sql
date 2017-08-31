\c reviews_dev;

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  className TEXT,
  instructor VARCHAR(255),
  level VARCHAR(255),
  review TEXT
);
