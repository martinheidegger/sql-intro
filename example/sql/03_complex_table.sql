CREATE table members (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  created_at DATE(6),
  updated_at DATE(6),
  `name` VARCHAR(255),
  `rank` INT CHECK (rank >= 0 AND rank <= 10)
);
CREATE INDEX rank_index ON members(rank);