CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    password TEXT NOT NULL,
    has_voted BOOLEAN DEFAULT false,
    election_id TEXT,
    commitment TEXT
  );
  