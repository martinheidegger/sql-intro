CREATE table members (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  created_at DATE(6),
  updated_at DATE(6),
  `name` VARCHAR(255),
  `rank` INT CHECK (rank >= 0 AND rank <= 10),
  INDEX rank_index (rank)
);