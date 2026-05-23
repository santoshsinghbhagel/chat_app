# 💬 Santosh Chatting App — Project Explanation

> **Submitted by:** Santosh  
> **Technology Stack:** Node.js + Express + WebSocket + PostgreSQL

---

## 📌 What is this project?

A **real-time group chat web application** where:

- An **Admin** can log in, create chat groups, and **enable/disable** them
- **Guest users** (no signup needed) can browse active groups, enter a nickname, and start chatting instantly
- All messages are stored in a **database** so the chat history is never lost
- Messages appear **instantly** on all users' screens using WebSocket technology

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 🛡️ **Admin Login** | Secure login with username/password (bcrypt encryption) |
| 📋 **Group Management** | Admin can Create, Edit, Delete, and Enable/Disable groups |
| 🔄 **Real-time Chat** | Messages appear instantly on all connected users' screens |
| 👤 **No Signup for Users** | Guests just enter a temporary name — no registration needed |
| 📜 **Chat History** | Last 50 messages load automatically when entering a room |
| 👥 **Live User Count** | Shows how many people are online in each chat room |
| 🚫 **Group Toggle** | Admin can disable a group — users cannot see or message in disabled groups |
| ⌨️ **Typing Indicator** | See when someone is typing a message |
| 📱 **Responsive Design** | Works on both desktop and mobile |

---

## 🛠️ How it works (simple flow)

```
User opens website → Home page (2 options)
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
        🔐 Admin Login          💬 Join a Chat
              │                       │
              ▼                       ▼
     ┌──────────────┐         Browse all active groups
     │  Dashboard   │               │
     │  • See all   │               ▼
     │    groups    │         Click "Join" on a group
     │  • Create    │               │
     │  • Edit      │               ▼
     │  • Delete    │         Enter your nickname
     │  • Enable/   │               │
     │    Disable   │               ▼
     └──────────────┘         🏠 Chat Room
                                   │
                                   ▼
                          Send & receive messages
                          in real-time instantly
```

---

## 🗄️ Database Tables (3 tables)

### 1. `admins` — Stores admin login details
| Column | What it stores |
|--------|---------------|
| id | Auto-generated number |
| username | Admin's login name |
| password | Encrypted password (bcrypt hash) |

### 2. `groups` — Stores chat groups
| Column | What it stores |
|--------|---------------|
| id | Auto-generated number |
| name | Group name (e.g., "Tech Talk") |
| description | Short description of the group |
| is_enable | `'y'` = Active, `'n'` = Disabled by admin |
| created_by | Which admin created this group |

### 3. `messages` — Stores all chat messages
| Column | What it stores |
|--------|---------------|
| id | Auto-generated number |
| group_id | Which group the message belongs to |
| sender | The guest's nickname |
| content | The message text |
| sent_at | Timestamp of when it was sent |

---

## 💻 How to run the project

```bash
# 1. Install dependencies
npm install

# 2. Create a .env file with:
#    PORT=3000
#    DATABASE_URL=postgresql://user:password@localhost:5432/santosh_chat
#    SESSION_SECRET=your_secret_key

# 3. Create the database (PostgreSQL)
#    CREATE DATABASE santosh_chat;
#    Then run the SQL from src/config/query.md to create tables

# 4. Start the server
npm start

# 5. Open in browser
http://localhost:3000

# Default admin login: admin / admin123
```

---

## 🔗 Key URLs

| Page | URL | Purpose |
|------|-----|---------|
| 🏠 Home | `/` | Landing page |
| 🔐 Admin Login | `/admin/login` | Admin sign-in |
| 📊 Dashboard | `/admin/dashboard` | Manage groups |
| 💬 Browse Groups | `/chat/groups` | See all active groups |
| 🏠 Chat Room | `/chat/room/:id` | Live chat |

---

## 🧪 What I learned from this project

- How to build a **real-time web application** using WebSockets
- How to structure a **full-stack project** (frontend + backend + database)
- How to implement **admin authentication** with session management
- How to use **PostgreSQL** for data storage and retrieval
- How to make a **responsive UI** with CSS
- How to handle **real-time features** like typing indicators and live user count
- How to implement **access control** (enabling/disabling features for users)

---

*Thank you for reviewing my project! 🙏*
