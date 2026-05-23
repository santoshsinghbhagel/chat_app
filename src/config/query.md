CREATE DATABASE santosh_chat;

-- Connect to santosh_chat database and run:
CREATE TABLE admins (
  id        SERIAL PRIMARY KEY,
  username  VARCHAR(100) UNIQUE NOT NULL,
  password  VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE groups (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(150) UNIQUE NOT NULL,
  description TEXT,
  is_enable   CHAR(1) DEFAULT 'y' CHECK (is_enable IN ('y', 'n')),
  created_by  INT REFERENCES admins(id),
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE messages (
  id         SERIAL PRIMARY KEY,
  group_id   INT REFERENCES groups(id) ON DELETE CASCADE,
  sender     VARCHAR(100) NOT NULL,
  content    TEXT NOT NULL,
  sent_at    TIMESTAMP DEFAULT NOW()
);

-- Insert a default admin user (Password is 'admin123')
-- Note: 'admin123' is hashed using bcrypt here
INSERT INTO admins (username, password) 
VALUES ('admin', '$2b$10$wY9/zQJ2O8sZfG6Yg4Fv8e.E40OQ.a3q2.hW1n4GZtJzK3B7Y3tO');
