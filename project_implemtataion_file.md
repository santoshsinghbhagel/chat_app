# 💬 Santosh Chatting App — Full Implementation Plan

> **College Project** | Real-time Group Chat Application  
> **Stack:** Node.js · Express · EJS · WebSocket · PostgreSQL

---

## 📌 Project Overview

A real-time group chat web application where:
- An **Admin** can log in, and create / manage chat groups.
- **Guest Users** can browse available groups, enter a temporary name, and join a chat instantly.
- All messages and admin credentials are **stored in PostgreSQL**.
- The UI is **modern, clean, and impressive** — green & white color scheme.

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | EJS (Embedded JavaScript Templates)  |
| Backend    | Node.js + Express.js                 |
| Real-time  | WebSocket (`ws` library)             |
| Database   | PostgreSQL (`pg` library)            |
| Icons      | Font Awesome (`fa-icons`)            |
| Styling    | Vanilla CSS (Green + White theme)    |

---

## 📁 Folder Structure

```
santosh_chatting_app/
│
├── src/
│   ├── config/
│   │   └── db.js                  # PostgreSQL connection setup
│   │
│   ├── controllers/
│   │   ├── adminController.js     # Admin login, group CRUD logic
│   │   └── chatController.js      # Guest join, message fetch logic
│   │
│   ├── routes/
│   │   ├── adminRoutes.js         # /admin/* routes
│   │   └── chatRoutes.js          # /chat/* routes
│   │
│   ├── websocket/
│   │   └── wsHandler.js           # WebSocket connection & message handler
│   │
│   └── middleware/
│       └── authMiddleware.js      # Admin session check middleware
│
├── views/                         # EJS templates
│   ├── partials/
│   │   ├── header.ejs             # Common HTML head + nav
│   │   └── footer.ejs             # Common footer + scripts
│   │
│   ├── home.ejs                   # Landing page (Admin Login | Join Chat)
│   ├── admin/
│   │   ├── login.ejs              # Admin login page
│   │   └── dashboard.ejs          # Admin dashboard (group management)
│   └── chat/
│       ├── groups.ejs             # List of all public groups
│       ├── join.ejs               # Enter temporary name to join a group
│       └── room.ejs               # Live chat room page
│
├── public/                        # Static assets
│   ├── css/
│   │   └── style.css              # Global styles (green + white theme)
│   ├── js/
│   │   └── chat.js                # Client-side WebSocket connection script
│   └── icons/                     # (Optional) local icon assets
│
├── .env                           # Environment variables (DB, session secret)
├── .gitignore
├── package.json
├── package-lock.json
└── server.js                      # App entry point
```

---

## 🗄️ Database Schema (PostgreSQL)

### Table 1 — `admins`
```sql
CREATE TABLE admins (
  id        SERIAL PRIMARY KEY,
  username  VARCHAR(100) UNIQUE NOT NULL,
  password  VARCHAR(255) NOT NULL,        -- bcrypt hashed
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Table 2 — `groups`
```sql
CREATE TABLE groups (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(150) UNIQUE NOT NULL,
  description TEXT,
  created_by  INT REFERENCES admins(id),
  created_at  TIMESTAMP DEFAULT NOW()
);
```

### Table 3 — `messages`
```sql
CREATE TABLE messages (
  id         SERIAL PRIMARY KEY,
  group_id   INT REFERENCES groups(id) ON DELETE CASCADE,
  sender     VARCHAR(100) NOT NULL,       -- guest temporary name
  content    TEXT NOT NULL,
  sent_at    TIMESTAMP DEFAULT NOW()
);
```

---

## 🔑 Environment Variables (`.env`)

```env
PORT=3000
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/santosh_chat
SESSION_SECRET=your_super_secret_key
```

---

## 🚀 Implementation Steps

### ✅ Step 1 — Project Setup
- [ ] Initialize the project: `npm init -y`
- [ ] Install dependencies:
  ```bash
  npm install express ejs ws pg express-session bcrypt dotenv
  npm install --save-dev nodemon
  ```
- [ ] Create the full folder structure shown above
- [ ] Set up `.env` and `.gitignore`
- [ ] Configure `nodemon` in `package.json`:
  ```json
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
  ```

---

### ✅ Step 2 — Database Setup (`src/config/db.js`)
- [ ] Connect to PostgreSQL using the `pg` library
- [ ] Export a reusable `query()` helper function
- [ ] Run SQL scripts to create the 3 tables (`admins`, `groups`, `messages`)
- [ ] Seed one default admin user (hashed password via `bcrypt`)

---

### ✅ Step 3 — Entry Point (`server.js`)
- [ ] Set up Express app with:
  - EJS as the view engine
  - `express.static('public')` for serving CSS/JS
  - `express-session` for admin session management
  - `express.urlencoded` for form parsing
- [ ] Attach HTTP server + WebSocket server on the same port
- [ ] Import and use `adminRoutes` and `chatRoutes`
- [ ] Import and initialize `wsHandler`

---

### ✅ Step 4 — Admin Routes & Controller

#### Routes (`src/routes/adminRoutes.js`)
| Method | Path                  | Action                        |
|--------|-----------------------|-------------------------------|
| GET    | `/admin/login`        | Show login page               |
| POST   | `/admin/login`        | Authenticate admin            |
| GET    | `/admin/logout`       | Destroy session & redirect    |
| GET    | `/admin/dashboard`    | Show group list (protected)   |
| POST   | `/admin/groups`       | Create a new group            |
| POST   | `/admin/groups/:id/update` | Update group name/desc   |
| POST   | `/admin/groups/:id/delete` | Delete a group           |

#### Controller (`src/controllers/adminController.js`)
- [ ] `login` — compare password with bcrypt, save to session
- [ ] `dashboard` — fetch all groups from DB
- [ ] `createGroup` — INSERT into `groups`
- [ ] `updateGroup` — UPDATE group by ID
- [ ] `deleteGroup` — DELETE group by ID (cascades messages)

---

### ✅ Step 5 — Chat Routes & Controller

#### Routes (`src/routes/chatRoutes.js`)
| Method | Path                  | Action                        |
|--------|-----------------------|-------------------------------|
| GET    | `/`                   | Home/landing page             |
| GET    | `/chat/groups`        | Show all available groups     |
| GET    | `/chat/join/:id`      | Show "enter your name" page   |
| GET    | `/chat/room/:id`      | Open live chat room           |
| GET    | `/chat/history/:id`   | Fetch past messages (JSON)    |

#### Controller (`src/controllers/chatController.js`)
- [ ] `listGroups` — SELECT all groups
- [ ] `joinPage` — Render join form for a given group
- [ ] `chatRoom` — Render room page (pass groupId + guestName)
- [ ] `getHistory` — SELECT last 50 messages for a group

---

### ✅ Step 6 — WebSocket Handler (`src/websocket/wsHandler.js`)
- [ ] On `connection`: parse groupId + senderName from URL query params
- [ ] Add client to a `rooms` map: `{ groupId: [ws, ws, ...] }`
- [ ] On `message`:
  - Parse JSON payload `{ groupId, sender, content }`
  - Save message to `messages` table in DB
  - Broadcast to all clients in the same `groupId` room
- [ ] On `close`: remove client from the room map

---

### ✅ Step 7 — Frontend (EJS Views)

#### `views/home.ejs`
- Two big call-to-action cards:
  - 🔐 **Admin Login** → `/admin/login`
  - 💬 **Join a Chat** → `/chat/groups`

#### `views/admin/login.ejs`
- Username + Password form → POST `/admin/login`

#### `views/admin/dashboard.ejs`
- List of all groups (name, description)
- **Create Group** form (inline)
- **Edit** and **Delete** buttons per group (Font Awesome icons)

#### `views/chat/groups.ejs`
- Grid/list of all groups
- **Join** button → `/chat/join/:id`

#### `views/chat/join.ejs`
- Input: "Enter your nickname"
- On submit → redirect to `/chat/room/:id?name=nickname`

#### `views/chat/room.ejs`
- Chat header: group name + member count
- Scrollable message list
- Message input + Send button
- Each message shows: **sender name · timestamp · message text**

---

### ✅ Step 8 — Client-Side WebSocket (`public/js/chat.js`)
- [ ] On page load: connect to `ws://localhost:3000?groupId=X&name=Y`
- [ ] On `open`: fetch chat history via `/chat/history/:id` and render
- [ ] On `message`: append new message to the chat box (auto-scroll)
- [ ] On send button click / Enter key: send JSON payload over WebSocket
- [ ] Display message timestamps in `HH:MM` format

---

### ✅ Step 9 — Styling (`public/css/style.css`)

#### Color Palette
| Token               | Value      | Usage                     |
|---------------------|------------|---------------------------|
| `--primary`         | `#22c55e`  | Buttons, links, accents   |
| `--primary-dark`    | `#16a34a`  | Hover states              |
| `--primary-light`   | `#dcfce7`  | Message bubbles, cards    |
| `--bg`              | `#f8fafc`  | Page background           |
| `--surface`         | `#ffffff`  | Cards, chat panels        |
| `--text`            | `#1e293b`  | Main body text            |
| `--text-muted`      | `#64748b`  | Timestamps, subtitles     |
| `--border`          | `#e2e8f0`  | Dividers, input borders   |

#### UI Components to Style
- [ ] Global reset + font (`Google Fonts: Inter`)
- [ ] Navigation bar
- [ ] Hero / landing cards (home page)
- [ ] Admin login form card
- [ ] Admin dashboard table + action buttons
- [ ] Group cards grid
- [ ] Chat room layout (flex column)
- [ ] Message bubbles (own vs. others — right vs. left aligned)
- [ ] Input bar (sticky bottom)
- [ ] Hover effects + smooth transitions
- [ ] Responsive layout (mobile-friendly)

---

### ✅ Step 10 — Middleware (`src/middleware/authMiddleware.js`)
- [ ] `isAdmin` — check `req.session.admin`, redirect to `/admin/login` if not set

---

### ✅ Step 11 — Testing & Verification

- [ ] Admin can log in and log out
- [ ] Admin can create, update, and delete groups
- [ ] Guest can browse groups list
- [ ] Guest can enter a name and join a group
- [ ] Real-time messages appear instantly for all users in the same group
- [ ] Messages persist in DB after page refresh (history loads)
- [ ] Multiple users in different groups do NOT see each other's messages
- [ ] App works on mobile screen sizes

---

## 📦 NPM Packages Summary

```json
{
  "dependencies": {
    "express": "^4.18.x",
    "ejs": "^3.1.x",
    "ws": "^8.x",
    "pg": "^8.x",
    "express-session": "^1.17.x",
    "bcrypt": "^5.x",
    "dotenv": "^16.x"
  },
  "devDependencies": {
    "nodemon": "^3.x"
  }
}
```

---

## 🎨 UI/UX Design Guidelines

1. **Font:** `Inter` from Google Fonts
2. **Icons:** Font Awesome 6 Free (CDN)
3. **Theme:** Green (#22c55e) + White/Light grey backgrounds
4. **Style:** Clean cards, rounded corners (`border-radius: 12px`), subtle shadows
5. **Animations:** Smooth hover transitions (`transition: all 0.2s ease`)
6. **Chat Bubbles:** Own messages → right-aligned green; Others → left-aligned white with border
7. **Mobile:** Fully responsive flex/grid layout

---

## 📋 Quick Start Commands

```bash
# 1. Install dependencies
npm install

# 2. Set up your .env file (copy values from this doc)

# 3. Create DB tables (run SQL in psql or pgAdmin)

# 4. Start development server
npm run dev

# 5. Open in browser
http://localhost:3000
```

---

*Last Updated: May 2026 | Author: Santosh*
