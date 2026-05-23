# Project knowledge

This file gives Codebuff context about your project: goals, commands, conventions, and gotchas.

## Project Overview
Real-time group chat web application (college project). Admins log in, create/manage chat groups. Guest users browse groups, enter a temporary name, and join chat rooms. Messages stored in PostgreSQL. Green & white theme.

## Quickstart
- **Setup:** `npm install` — requires Node.js, PostgreSQL running, and a `.env` file configured
- **Dev:** `npm run dev` (nodemon auto-restart on changes)
- **Start:** `npm start` (node server.js)
- **DB Setup:** Create `santosh_chat` database, then run SQL from `src/config/query.md` to create tables (admins, groups, messages) and seed default admin (`admin` / `admin123`)
- **Access:** `http://localhost:3000`

## Architecture
| Layer        | Technology                          |
|-------------|--------------------------------------|
| Frontend     | EJS templates + vanilla CSS + JS     |
| Backend      | Node.js + Express 5                  |
| Real-time    | WebSocket (`ws` library)             |
| Database     | PostgreSQL (`pg` pool)              |
| Icons        | Font Awesome 6 Free (CDN)           |
| Font         | Google Fonts: Inter                  |

### Key directories
- `src/controllers/` — Route handler logic (admin auth, group CRUD, chat)
- `src/websocket/wsHandler.js` — WebSocket server: rooms map, message broadcast, DB persistence
- `views/` — EJS templates: admin login/dashboard, guest join/room/home
- `public/css/style.css` — All styling (CSS custom properties, responsive)
- `public/js/chat.js` — Client-side WebSocket connect + form handling

### Data flow
1. Guest selects a group → enters nickname → `/chat/room/:id?name=...`
2. JS client connects WebSocket with `?groupId=X&name=...` query params
3. On message send: JSON `{ content }` sent over WS → server saves to DB → broadcasts to all clients in same group room
4. On page load: chat history fetched via HTTP GET `/chat/history/:id` (last 50 messages)

### Database tables
- `admins` (id, username, password(bcrypt), created_at)
- `groups` (id, name, description, created_by FK→admins, created_at)
- `messages` (id, group_id FK→groups ON DELETE CASCADE, sender, content, sent_at)

## Environment Variables (`.env`)
```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/santosh_chat
SESSION_SECRET=your_secret_key
```

## Conventions
- **No TypeScript** — plain JavaScript throughout
- **EJS** as template engine (no React/Vue)
- **CSS custom properties** for theming — colors defined in `:root` block of `style.css`
- **Font Awesome** classes for icons (e.g., `<i class="fas fa-comment"></i>`)
- **Admin routes** prefixed `/admin/*`, protected by session middleware (`authMiddleware.js`)
- **Chat routes** prefixed `/chat/*`, open to guests
- **WebSocket** uses `ws` library (not Socket.IO) — client at `public/js/chat.js`
- **No automated tests, linters, or build steps**
- `.env` is gitignored — always ensure it exists locally

## Gotchas
- **Express 5** (^5.2.1) — check for v5-specific API differences if adding middleware
- **`bcrypt`** ^6.0.0 uses async hash/compare — no callback API
- WebSocket URL protocol must match HTTP (`ws:` for `http:`, `wss:` for `https:`)
- Guest names are URL-encoded in WebSocket query params (`encodeURIComponent`)
- Messages are broadcast after DB insert — no optimistic UI update on client
- CSS uses `calc(100vh - 160px)` for chat container height — may need adjustment on mobile
