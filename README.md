<div align="center">
  
  <!-- Animated Header -->
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=700&size=32&duration=3000&pause=500&color=2ECC71&center=true&vCenter=true&width=500&lines=%F0%9F%92%AC+Santosh+Chat;Real-Time+Group+Chat+App;Built+with+%E2%9D%A4%EF%B8%8F+for+College" alt="Typing SVG" />

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
    <img src="https://img.shields.io/badge/WebSocket-FF4081?style=for-the-badge&logo=websocket&logoColor=white" alt="WebSocket"/>
    <img src="https://img.shields.io/badge/EJS-8B4513?style=for-the-badge&logo=ejs&logoColor=white" alt="EJS"/>
  </p>

  <p>
    <img src="https://img.shields.io/github/license/yourusername/santosh-chat?style=flat-square&color=2ECC71" alt="License"/>
    <img src="https://img.shields.io/badge/status-active-brightgreen?style=flat-square&color=2ecc71" alt="Status: Active"/>
    <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square&color=3498db" alt="Version 1.0.0"/>
    <img src="https://img.shields.io/badge/PRs-welcome-orange?style=flat-square&color=e67e22" alt="PRs Welcome"/>
  </p>

  <hr width="60%" style="border: 1px solid #2ecc71" />

  <h3>🚀 A real-time group chat platform with <strong style="color:#2ecc71">admin dashboards</strong> & <strong style="color:#3498db">instant messaging</strong></h3>

  <br />
</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🖥️ Screenshots](#️-screenshots)
- [⚙️ Tech Stack](#️-tech-stack)
- [📦 Prerequisites](#-prerequisites)
- [🔧 Installation](#-installation)
- [🚦 Usage](#-usage)
- [🗄️ Database Setup](#️-database-setup)
- [📁 Project Structure](#-project-structure)
- [🔄 Data Flow](#-data-flow)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

<div align="center">
  <table>
    <tr>
      <td align="center" width="50%">
        <h3>🔐 <strong>Admin Panel</strong></h3>
        <p>Secure login & session-based authentication</p>
        <ul align="left">
          <li>✅ Login/logout with bcrypt hashing</li>
          <li>✅ Create, edit & delete chat groups</li>
          <li>✅ Enable/disable groups</li>
          <li>✅ Dashboard overview</li>
        </ul>
      </td>
      <td align="center" width="50%">
        <h3>💬 <strong>Real-Time Chat</strong></h3>
        <p>WebSocket-powered instant messaging</p>
        <ul align="left">
          <li>✅ Browse public groups</li>
          <li>✅ Join with a temporary nickname</li>
          <li>✅ Live message broadcasting</li>
          <li>✅ Message history (last 50)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center" width="50%">
        <h3>🎨 <strong>Modern UI</strong></h3>
        <p>Clean, green & white themed design</p>
        <ul align="left">
          <li>✅ Responsive layout</li>
          <li>✅ Font Awesome icons</li>
          <li>✅ Inter font</li>
          <li>✅ Hover animations</li>
        </ul>
      </td>
      <td align="center" width="50%">
        <h3>🗄️ <strong>Database</strong></h3>
        <p>PostgreSQL with relational integrity</p>
        <ul align="left">
          <li>✅ Cascading deletes</li>
          <li>✅ Unique constraints</li>
          <li>✅ Timestamp tracking</li>
          <li>✅ bcrypt password storage</li>
        </ul>
      </td>
    </tr>
  </table>
</div>

---

## 🖥️ Screenshots

<div align="center">
  <p>
    <i>Home Page</i> &nbsp;&nbsp;|&nbsp;&nbsp;
    <i>Admin Login</i> &nbsp;&nbsp;|&nbsp;&nbsp;
    <i>Admin Dashboard</i> &nbsp;&nbsp;|&nbsp;&nbsp;
    <i>Chat Room</i>
  </p>
  <p>
    <code>🏠 Home → 🚪 Join → 💬 Chat</code>
  </p>
</div>

---

## ⚙️ Tech Stack

<div align="center">

| Layer | Technology | Badge |
|:------|:-----------|:-----:|
| **Frontend** | EJS Templates + Vanilla CSS/JS | ![](https://img.shields.io/badge/EJS-8B4513?style=flat-square&logo=ejs&logoColor=white) |
| **Backend** | Node.js + Express 5 | ![](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) |
| **Real-Time** | WebSocket (`ws`) | ![](https://img.shields.io/badge/WebSocket-FF4081?style=flat-square&logo=websocket&logoColor=white) |
| **Database** | PostgreSQL (`pg`) | ![](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) |
| **Icons** | Font Awesome 6 Free | ![](https://img.shields.io/badge/Font_Awesome-538DD7?style=flat-square&logo=fontawesome&logoColor=white) |
| **Font** | Google Fonts – Inter | ![](https://img.shields.io/badge/Inter-000000?style=flat-square&logo=googlefonts&logoColor=white) |

</div>

---

## 📦 Prerequisites

> ✅ **Node.js** v18 or higher  
> ✅ **PostgreSQL** v14 or higher  
> ✅ **npm** v9 or higher  
> ✅ A modern web browser (Chrome, Firefox, Edge)

---

## 🔧 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/santosh-chat.git
cd santosh-chat
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/santosh_chat
SESSION_SECRET=your_strong_secret_key_here
```

> ⚠️ Replace `user:password` with your PostgreSQL credentials.  
> ⚠️ Replace `SESSION_SECRET` with a random, secure string.

### 4️⃣ Setup the database

> See [Database Setup](#️-database-setup) below.

---

## 🚦 Usage

### 🚀 Start the server

```bash
# Development (auto-restart with nodemon)
npm run dev

# Production
npm start
```

### 🌐 Access the app

- **Home page:** [`http://localhost:3000`](http://localhost:3000)
- **Admin login:** [`http://localhost:3000/admin/login`](http://localhost:3000/admin/login)
- **Browse groups:** [`http://localhost:3000/groups`](http://localhost:3000/groups)

### 🔑 Default Admin Credentials

```
Username:  admin
Password:  admin123
```

---

## 🗄️ Database Setup

### Step 1: Create the database

```sql
CREATE DATABASE santosh_chat;
```

### Step 2: Create tables & seed admin

Connect to the `santosh_chat` database and run:

```sql
CREATE TABLE admins (
  id         SERIAL PRIMARY KEY,
  username   VARCHAR(100) UNIQUE NOT NULL,
  password   VARCHAR(255) NOT NULL,
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

INSERT INTO admins (username, password)
VALUES ('admin', '<your_bcrypt_hash_for_admin123>');
```

> 💡 The full SQL is also available in `src/config/query.md`.

---

## 📁 Project Structure

```text
📦 santosh-chat
├── 📂 public
│   ├── 📂 css
│   │   └── style.css           # All styling with CSS custom properties
│   └── 📂 js
│       └── chat.js             # Client-side WebSocket logic
├── 📂 src
│   ├── 📂 config
│   │   ├── db.js               # PostgreSQL connection pool
│   │   └── query.md            # SQL setup commands
│   ├── 📂 controllers
│   │   ├── adminController.js   # Admin auth & group CRUD
│   │   └── chatController.js    # Chat page rendering
│   ├── 📂 middleware
│   │   └── authMiddleware.js    # Session-based auth guard
│   ├── 📂 routes
│   │   ├── adminRoutes.js       # Admin panel routes
│   │   └── chatRoutes.js        # Guest chat routes
│   └── 📂 websocket
│       └── wsHandler.js         # WebSocket server logic
├── 📂 views
│   ├── 📂 admin
│   │   ├── login.ejs           # Admin login form
│   │   └── dashboard.ejs       # Admin group management
│   ├── 📂 chat
│   │   ├── groups.ejs          # Browse available groups
│   │   ├── join.ejs            # Enter nickname
│   │   └── room.ejs            # Real-time chat room
│   ├── 📂 partials
│   │   ├── header.ejs          # Shared header/nav
│   │   └── footer.ejs          # Shared footer
│   ├── home.ejs                # Landing page
│   └── error.ejs               # Error pages (404, 500)
├── server.js                   # Express server entry point
├── package.json
└── .env                        # Environment variables (gitignored)
```

---

## 🔄 Data Flow

```mermaid
sequenceDiagram
    participant G as 🧑 Guest
    participant B as 🌐 Browser
    participant S as 🖥️ Server
    participant W as 📡 WebSocket
    participant D as 🗄️ PostgreSQL

    G->>B: Select a group
    B->>S: GET /chat/room/:id?name=...
    S->>B: Render chat room
    
    B->>W: Connect WebSocket (?groupId=X&name=Y)
    W->>S: Join room
    
    G->>B: Type message & send
    B->>W: Send JSON { content }
    W->>D: INSERT INTO messages...
    W->>W: Broadcast to all in room
    
    B->>S: GET /chat/history/:id
    S->>D: SELECT last 50 messages
    S->>B: Render message history
```

---

## 🤝 Contributing

<p align="center">
  Contributions are welcome! 🌟
</p>

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing`)
5. 🔀 Open a Pull Request

---

## 📄 License

<div align="center">
  <p>
    <strong>Santosh Chat</strong> — A college project built with ❤️
  </p>
  <p>
    <sub>© 2026 · Made for learning & demonstration · All rights reserved</sub>
  </p>
</div>

---

<div align="center">
  
  [![Star this repo](https://img.shields.io/badge/⭐-Star_this_repo-2ECC71?style=for-the-badge)](https://github.com/yourusername/santosh-chat)
  [![Report Bug](https://img.shields.io/badge/🐛-Report_Bug-E74C3C?style=for-the-badge)](https://github.com/yourusername/santosh-chat/issues)
  [![Request Feature](https://img.shields.io/badge/💡-Request_Feature-3498DB?style=for-the-badge)](https://github.com/yourusername/santosh-chat/issues)

  <br />
  <sub>Built with 🟢 Node.js, 🐘 PostgreSQL, and ☕ lots of coffee</sub>
</div>
