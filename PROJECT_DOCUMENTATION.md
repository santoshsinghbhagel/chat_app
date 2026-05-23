# SANTOSH CHAT — Real-Time Group Chat Application

## Comprehensive Project Documentation

**Submitted By:** Santosh Singh Bhagel  
**Project Type:** Web Application (College Mini-Project)  
**Technologies:** Node.js, Express, PostgreSQL, WebSocket, EJS  
**Year:** 2026

---

## TABLE OF CONTENTS

1. [Abstract](#1-abstract)
2. [Introduction](#2-introduction)
3. [Project Objectives](#3-project-objectives)
4. [Scope and Limitations](#4-scope-and-limitations)
5. [Technology Stack](#5-technology-stack)
   - 5.1 [Node.js](#51-nodejs)
   - 5.2 [Express Framework](#52-express-framework)
   - 5.3 [PostgreSQL Database](#53-postgresql-database)
   - 5.4 [WebSocket Protocol](#54-websocket-protocol)
   - 5.5 [EJS Templating Engine](#55-ejs-templating-engine)
   - 5.6 [Bcrypt Hashing](#56-bcrypt-hashing)
   - 5.7 [Express-Session](#57-express-session)
   - 5.8 [Font Awesome Icons](#58-font-awesome-icons)
   - 5.9 [Google Fonts — Inter](#59-google-fonts--inter)
   - 5.10 [Nodemon Dev Tool](#510-nodemon-dev-tool)
6. [System Architecture](#6-system-architecture)
   - 6.1 [High-Level Overview](#61-high-level-overview)
   - 6.2 [Client-Server Architecture](#62-client-server-architecture)
   - 6.3 [Request-Response Flow](#63-request-response-flow)
   - 6.4 [WebSocket Data Flow](#64-websocket-data-flow)
7. [Database Design](#7-database-design)
   - 7.1 [Entity Relationship Diagram](#71-entity-relationship-diagram)
   - 7.2 [Table: admins](#72-table-admins)
   - 7.3 [Table: groups](#73-table-groups)
   - 7.4 [Table: messages](#74-table-messages)
   - 7.5 [Database Relationships](#75-database-relationships)
   - 7.6 [SQL Setup Scripts](#76-sql-setup-scripts)
8. [Project Structure](#8-project-structure)
   - 8.1 [Directory Layout](#81-directory-layout)
   - 8.2 [File-by-File Breakdown](#82-file-by-file-breakdown)
9. [Module Descriptions](#9-module-descriptions)
   - 9.1 [Server Entry Point (server.js)](#91-server-entry-point-serverjs)
   - 9.2 [Database Configuration (db.js)](#92-database-configuration-dbjs)
   - 9.3 [Admin Controller (adminController.js)](#93-admin-controller-admincontrollerjs)
   - 9.4 [Chat Controller (chatController.js)](#94-chat-controller-chatcontrollerjs)
   - 9.5 [Auth Middleware (authMiddleware.js)](#95-auth-middleware-authmiddlewarejs)
   - 9.6 [WebSocket Handler (wsHandler.js)](#96-websocket-handler-wshandlerjs)
   - 9.7 [Admin Routes (adminRoutes.js)](#97-admin-routes-adminroutesjs)
   - 9.8 [Chat Routes (chatRoutes.js)](#98-chat-routes-chatroutesjs)
   - 9.9 [Client-Side Chat Script (chat.js)](#99-client-side-chat-script-chatjs)
   - 9.10 [CSS Styling (style.css)](#910-css-styling-stylecss)
10. [View Templates](#10-view-templates)
    - 10.1 [Home Page (home.ejs)](#101-home-page-homeejs)
    - 10.2 [Admin Login (login.ejs)](#102-admin-login-loginejs)
    - 10.3 [Admin Dashboard (dashboard.ejs)](#103-admin-dashboard-dashboardejs)
    - 10.4 [Groups List (groups.ejs)](#104-groups-list-groupsejs)
    - 10.5 [Join Page (join.ejs)](#105-join-page-joinejs)
    - 10.6 [Chat Room (room.ejs)](#106-chat-room-roomejs)
    - 10.7 [Error Page (error.ejs)](#107-error-page-errorejs)
    - 10.8 [Partials — Header (header.ejs)](#108-partials--header-headerejs)
    - 10.9 [Partials — Footer (footer.ejs)](#109-partials--footer-footerejs)
11. [API Endpoints](#11-api-endpoints)
    - 11.1 [Admin Routes](#111-admin-routes)
    - 11.2 [Chat Routes](#112-chat-routes)
    - 11.3 [WebSocket Events](#113-websocket-events)
12. [Features In Detail](#12-features-in-detail)
    - 12.1 [Admin Authentication](#121-admin-authentication)
    - 12.2 [Session Management](#122-session-management)
    - 12.3 [Group CRUD Operations](#123-group-crud-operations)
    - 12.4 [Real-Time Messaging](#124-real-time-messaging)
    - 12.5 [Typing Indicators](#125-typing-indicators)
    - 12.6 [Online User Count](#126-online-user-count)
    - 12.7 [Message History](#127-message-history)
    - 12.8 [Group Enable/Disable](#128-group-enabledisable)
    - 12.9 [Responsive Design](#129-responsive-design)
    - 12.10 [Connection Status & Reconnection](#1210-connection-status--reconnection)
13. [Installation and Setup](#13-installation-and-setup)
    - 13.1 [Prerequisites](#131-prerequisites)
    - 13.2 [Step 1: Clone the Repository](#132-step-1-clone-the-repository)
    - 13.3 [Step 2: Install Dependencies](#133-step-2-install-dependencies)
    - 13.4 [Step 3: Configure Environment Variables](#134-step-3-configure-environment-variables)
    - 13.5 [Step 4: Setup PostgreSQL Database](#135-step-4-setup-postgresql-database)
    - 13.6 [Step 5: Run the Application](#136-step-5-run-the-application)
    - 13.7 [Step 6: Access the Application](#137-step-6-access-the-application)
14. [User Guide](#14-user-guide)
    - 14.1 [For Guests (Chat Users)](#141-for-guests-chat-users)
    - 14.2 [For Administrators](#142-for-administrators)
15. [Security Considerations](#15-security-considerations)
    - 15.1 [Password Hashing (Bcrypt)](#151-password-hashing-bcrypt)
    - 15.2 [Session-Based Authentication](#152-session-based-authentication)
    - 15.3 [SQL Injection Prevention](#153-sql-injection-prevention)
    - 15.4 [Input Validation](#154-input-validation)
    - 15.5 [Environment Variables](#155-environment-variables)
    - 15.6 [XSS Protection](#156-xss-protection)
16. [Performance Optimizations](#16-performance-optimizations)
    - 16.1 [Database Query Optimization](#161-database-query-optimization)
    - 16.2 [WebSocket Efficiency](#162-websocket-efficiency)
    - 16.3 [CSS and Asset Loading](#163-css-and-asset-loading)
    - 16.4 [Message History Pagination](#164-message-history-pagination)
    - 16.5 [Connection Reconnection Strategy](#165-connection-reconnection-strategy)
17. [Testing the Application](#17-testing-the-application)
    - 17.1 [Manual Testing Scenarios](#171-manual-testing-scenarios)
    - 17.2 [Testing Admin Login](#172-testing-admin-login)
    - 17.3 [Testing Group Management](#173-testing-group-management)
    - 17.4 [Testing Chat Functionality](#174-testing-chat-functionality)
    - 17.5 [Testing Real-Time Features](#175-testing-real-time-features)
    - 17.6 [Testing Error Handling](#176-testing-error-handling)
18. [Future Enhancements](#18-future-enhancements)
    - 18.1 [User Registration System](#181-user-registration-system)
    - 18.2 [Private Messaging](#182-private-messaging)
    - 18.3 [File and Image Sharing](#183-file-and-image-sharing)
    - 18.4 [Message Reactions and Emoji Support](#184-message-reactions-and-emoji-support)
    - 18.5 [Message Search and Filtering](#185-message-search-and-filtering)
    - 18.6 [Rate Limiting and Spam Protection](#186-rate-limiting-and-spam-protection)
    - 18.7 [Mobile Application](#187-mobile-application)
    - 18.8 [Push Notifications](#188-push-notifications)
    - 18.9 [Dark Mode Theme](#189-dark-mode-theme)
    - 18.10 [Chat Bots and Automation](#1810-chat-bots-and-automation)
19. [Known Issues and Troubleshooting](#19-known-issues-and-troubleshooting)
    - 19.1 [Common Issues](#191-common-issues)
    - 19.2 [Troubleshooting Steps](#192-troubleshooting-steps)
20. [Glossary of Terms](#20-glossary-of-terms)
21. [References](#21-references)
22. [Conclusion](#22-conclusion)
23. [Appendix A — Complete Project Code Listing](#23-appendix-a--complete-project-code-listing)
24. [Appendix B — Database SQL Schema](#24-appendix-b--database-sql-schema)
25. [Appendix C — Package Dependencies](#25-appendix-c--package-dependencies)

---

## 1. ABSTRACT

**Santosh Chat** is a real-time group chat web application developed as a college mini-project. The application enables administrators to create and manage chat groups, while guests can browse available groups, enter a temporary nickname, and participate in live group conversations. The platform leverages WebSocket technology for instant message delivery, PostgreSQL for persistent data storage, and Express.js for robust server-side routing and middleware management. The application follows a clean, green-themed UI design with responsive layouts, typing indicators, online user counts, and automatic reconnection capabilities.

This documentation provides a comprehensive overview of the system architecture, database design, module specifications, installation procedures, user guides, and future enhancement possibilities. The project demonstrates the practical application of full-stack web development concepts including server-side rendering, real-time communication protocols, session-based authentication, and relational database management.

---

## 2. INTRODUCTION

In the modern digital era, real-time communication has become an essential part of how people interact online. From social media platforms to collaborative work environments, the ability to send and receive messages instantly has transformed digital communication. Santosh Chat aims to demonstrate the core principles of building a real-time chat application using widely adopted web technologies.

The application is designed with two primary user roles:

1. **Administrators** — Users who have access to the admin panel. They can log in securely, create new chat groups, edit group details, enable or disable groups, and delete groups. All administrative actions are protected by session-based authentication.

2. **Guests** — Any visitor to the website. Guests can browse the list of publicly available groups, choose a group to join, enter a temporary nickname (no registration required), and participate in real-time conversations with other guests in the same group.

The core technical challenge addressed by this project is the implementation of real-time bidirectional communication between clients and the server. This is achieved using the WebSocket protocol, which provides full-duplex communication channels over a single TCP connection. Unlike traditional HTTP polling mechanisms, WebSocket allows the server to push new messages to all connected clients instantly without requiring clients to repeatedly request new data.

The project also demonstrates several other important software engineering concepts:

- **Model-View-Controller (MVC) Architecture** — Separation of concerns between data access (controllers), presentation (views), and routing (routes).
- **Session Management** — Server-side session storage for maintaining authenticated state across HTTP requests.
- **Database Normalization** — Relational database design with foreign key constraints and cascading deletes.
- **Secure Password Storage** — Using bcrypt hashing algorithm to securely store administrator passwords.
- **Responsive Web Design** — CSS media queries and flexible layouts that adapt to different screen sizes.
- **Client-Side JavaScript** — Dynamic DOM manipulation, event handling, and WebSocket communication from the browser.

---

## 3. PROJECT OBJECTIVES

The primary objectives of the Santosh Chat project are:

1. **Real-Time Communication:** Implement a WebSocket-based messaging system that delivers messages to all participants in a chat group instantly without requiring page refreshes or polling.

2. **Admin Management:** Provide a secure administrative interface where authorized users can create, read, update, and delete (CRUD) chat groups with session-based authentication.

3. **Guest Accessibility:** Allow any website visitor to browse and join chat groups without requiring account creation or personal information beyond a temporary nickname.

4. **Persistent Message Storage:** Store all chat messages in a PostgreSQL database with proper relational integrity, ensuring message history is available when users join a group.

5. **Responsive User Interface:** Design a clean, modern, and responsive UI that works well on desktop computers, tablets, and mobile devices.

6. **User Experience Features:** Include typing indicators to show when other users are composing messages, display online user counts for each chat room, and provide automatic reconnection if the WebSocket connection drops.

7. **Security:** Protect admin routes with session middleware, hash passwords using bcrypt, prevent SQL injection through parameterized queries, and validate all user inputs.

8. **Error Handling:** Provide user-friendly error pages for 404 (Not Found) and 500 (Server Error) conditions, and display meaningful error messages on the login page.

---

## 4. SCOPE AND LIMITATIONS

### Scope

The Santosh Chat application covers the following functional areas:

- Admin login/logout with bcrypt password verification and session management.
- Admin dashboard displaying all existing groups with inline editing capabilities.
- Group creation with name, description, and enabled/disabled status.
- Group editing to update name, description, and status.
- Group deletion with cascade deletion of associated messages.
- Public listing of enabled groups accessible to all visitors.
- Guest nickname selection before joining a chat room.
- Real-time message sending and receiving via WebSocket.
- Message persistence in PostgreSQL database.
- Message history retrieval (last 50 messages) on joining a chat room.
- Typing indicators showing when other users are typing.
- Online user count display for each active chat room.
- Connection status indicator (Connected, Connecting, Disconnected, Error).
- Automatic WebSocket reconnection with exponential backoff.
- Responsive design for desktop, tablet, and mobile viewports.
- Custom error pages for 404 and 500 HTTP status codes.
- Flash message notifications for admin actions.

### Limitations

The current version of the application has the following limitations:

- No user registration system for guests (nickname-only identification, no account persistence).
- No private messaging between individual users.
- No file or image sharing capabilities.
- No message editing or deletion functionality.
- No message search or filtering features.
- No rate limiting or spam protection mechanisms.
- No persistent user profiles or avatars.
- No email verification or password recovery for admins.
- No audit logging of admin actions.
- No automated test suite (manual testing only).
- Single server instance (no horizontal scaling or load balancing).
- No SSL/TLS encryption enforced (HTTP instead of HTTPS).
- No database connection pooling optimization beyond default pg Pool.
- Maximum message history limited to the last 50 messages per group.
- No support for message reactions, emoji pickers, or rich text formatting.

---

## 5. TECHNOLOGY STACK

The Santosh Chat application is built using a combination of technologies chosen for their reliability, performance, and ease of use. The following sections describe each technology in detail.

### 5.1 Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. Node.js uses the V8 JavaScript engine (the same engine that powers Google Chrome) to provide fast and efficient server-side execution.

**Why Node.js?**
- Non-blocking, event-driven architecture ideal for real-time applications.
- Single programming language (JavaScript) for both client and server.
- Large ecosystem of open-source packages available through npm.
- Excellent support for WebSocket implementations.
- High performance for I/O-intensive operations like chat messaging.

**Version Used:** Node.js 18+ (recommended)
**Runtime Environment:** Server-side JavaScript

### 5.2 Express Framework

Express.js is a minimal and flexible web application framework for Node.js that provides a robust set of features for building web applications and APIs. It serves as the foundation for handling HTTP requests, routing, middleware, and template rendering.

**Why Express?**
- Simplifies routing with intuitive route definitions and parameters.
- Middleware architecture allows easy integration of session management, body parsing, and error handling.
- Compatible with a wide range of template engines including EJS.
- Mature, well-documented framework with extensive community support.
- Lightweight and unopinionated, allowing flexibility in project structure.

**Version Used:** Express 5.2.1
**Key Middleware Used:**
- `express.urlencoded()` — Parses URL-encoded form data.
- `express.json()` — Parses JSON request bodies.
- `express.static()` — Serves static files from the public directory.
- `express-session` — Manages server-side sessions.

### 5.3 PostgreSQL Database

PostgreSQL is a powerful, open-source object-relational database system known for its reliability, feature robustness, and performance. It has over 30 years of active development and is widely used in production environments.

**Why PostgreSQL?**
- ACID-compliant with strong data integrity guarantees.
- Support for advanced SQL features including foreign keys, cascading deletes, and constraints.
- Excellent performance with proper indexing and query optimization.
- JSON support for semi-structured data if needed.
- Active community and regular security updates.

**Version Used:** PostgreSQL 14+
**Node.js Driver:** `pg` (node-postgres) version 8.21.0 — The official PostgreSQL client for Node.js.

**Connection Management:**
- Connection pooling using `pg.Pool` for efficient database connections.
- Environment variable-based configuration for database URL.
- Automatic connection error handling and graceful shutdown.

### 5.4 WebSocket Protocol

WebSocket is a computer communications protocol that provides full-duplex communication channels over a single TCP connection. Unlike HTTP which follows a request-response pattern, WebSocket allows the server to push data to clients at any time, making it ideal for real-time applications.

**Why WebSocket?**
- Enables real-time bidirectional communication between client and server.
- Low latency compared to HTTP polling or long-polling techniques.
- Efficient — reduces overhead by maintaining a persistent connection.
- Standardized protocol supported by all modern web browsers.
- Lightweight — minimal header overhead after initial handshake.

**Library Used:** `ws` version 8.21.0 — A simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation for Node.js.

**WebSocket Server Features:**
- Room-based message broadcasting to multiple clients.
- Connection tracking with group ID and guest name metadata.
- Typing event handling (non-persistent).
- Online user count broadcasting.
- Graceful disconnection handling and cleanup.

### 5.5 EJS Templating Engine

EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It compiles templates into JavaScript functions for efficient rendering on the server.

**Why EJS?**
- Simple syntax — use plain JavaScript within HTML templates.
- No steep learning curve — writes like standard HTML with embedded JavaScript tags.
- Supports partials for reusable components (header, footer).
- Fast compilation and rendering performance.
- Compatible with Express.js view engine system.

**EJS Tags Used:**
- `<%` — Script tag for control-flow (loops, conditionals).
- `<%=` — Outputs escaped HTML (prevents XSS).
- `<%-` — Outputs unescaped HTML (use with caution).

**Version Used:** EJS 5.0.2

### 5.6 Bcrypt Hashing

bcrypt is a password-hashing function designed by Niels Provos and David Mazières. It incorporates a salt to protect against rainbow table attacks and is an adaptive function that can be configured to remain slow over time as computing power increases.

**Why bcrypt?**
- Built-in salt generation prevents rainbow table attacks.
- Adaptive cost factor allows increasing hash complexity over time.
- Well-vetted algorithm with no known vulnerabilities.
- Simple API in Node.js with the `bcrypt` package.

**Version Used:** bcrypt 6.0.0
**Cost Factor:** 10 (default, provides good security with reasonable performance)
**Usage in Application:** Hashing admin passwords and comparing login credentials.

### 5.7 Express-Session

express-session is a middleware for Express.js that manages session data on the server. It creates a session object on the server for each user and stores a session ID cookie on the client for subsequent request identification.

**Why express-session?**
- Server-side session storage (more secure than client-side).
- Simple integration with Express middleware pipeline.
- Configurable session storage backends.
- Automatic session ID generation and cookie management.

**Configuration:**
- `secret` — Session signing secret (from environment variable).
- `resave: false` — Prevents session being saved back if not modified.
- `saveUninitialized: false` — Only saves session when data is added.
- Session data stored in memory (default storage, suitable for development).

### 5.8 Font Awesome Icons

Font Awesome is a comprehensive icon library that provides scalable vector icons that can be customized with CSS. The application uses Font Awesome 6 Free icons for UI elements throughout the interface.

**Why Font Awesome?**
- Extensive collection of professionally designed icons.
- CSS-based scaling and coloring for easy customization.
- Font-based icons work seamlessly with text alignment.
- Free tier provides sufficient icons for the application.

**Icons Used:**
- `fa-comments` — Brand icon in navbar.
- `fa-lock` — Login page icon.
- `fa-users` — Group-related icons.
- `fa-gauge-high` — Dashboard icon.
- `fa-plus` — Create button.
- `fa-floppy-disk` — Save button.
- `fa-trash` — Delete button.
- `fa-paper-plane` — Send message button.
- `fa-arrow-right` — Navigation arrows.
- `fa-spinner` — Loading indicator.
- `fa-circle` — Status indicator dots.
- `fa-wifi` — Connection status.
- And many more.

### 5.9 Google Fonts — Inter

Inter is a versatile typeface designed specifically for computer screens. It features a tall x-height, open apertures, and generous spacing for excellent readability at various sizes.

**Why Inter?**
- Optimized for screen readability with clean, modern design.
- Multiple weights available (400, 500, 600, 700) for typographic hierarchy.
- Free to use with no licensing restrictions.
- Fast loading from Google Fonts CDN.

**Weights Used:** 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

### 5.10 Nodemon Dev Tool

Nodemon is a development tool that automatically restarts the Node.js application when file changes are detected in the project directory.

**Why Nodemon?**
- Eliminates the need to manually stop and restart the server during development.
- Monitors all relevant file extensions for changes.
- Configurable ignore patterns for build artifacts.

**Version Used:** Nodemon 3.1.14
**Usage:** `npm run dev` — Starts the server with Nodemon for development.

---

## 6. SYSTEM ARCHITECTURE

### 6.1 High-Level Overview

The Santosh Chat application follows a client-server architecture with two communication channels:

1. **HTTP Protocol** — Used for standard web page requests, form submissions, and AJAX API calls. All HTTP communication is handled by the Express.js server.

2. **WebSocket Protocol** — Used for real-time bidirectional communication. Once the client loads a chat room page, it establishes a WebSocket connection that remains open for the duration of the user's session in that room.

The architecture can be visualized in three layers:

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                        │
│                                                         │
│   Browser (Chrome, Firefox, Edge, etc.)                 │
│   ┌─────────────────────────────────────┐               │
│   │  EJS Templates (HTML/CSS)           │               │
│   │  Client-Side JavaScript (chat.js)   │               │
│   │  Font Awesome Icons                 │               │
│   │  Google Fonts (Inter)               │               │
│   └─────────────────────────────────────┘               │
└─────────────────────────────────────────────────────────┘
                         ↕ HTTP / WebSocket
┌─────────────────────────────────────────────────────────┐
│                     SERVER LAYER                        │
│                                                         │
│   Node.js + Express.js                                  │
│   ┌─────────────────────────────────────┐               │
│   │  HTTP Server (server.js)            │               │
│   │  Express Middleware Pipeline        │               │
│   │  ┌──────────────────────────────┐   │               │
│   │  │ Static Files → Body Parser → │   │               │
│   │  │ Session → Flash → Routes    │   │               │
│   │  └──────────────────────────────┘   │               │
│   │  ┌──────────────────────────────┐   │               │
│   │  │ Admin Routes → Auth Middleware│   │              │
│   │  │ Chat Routes                   │   │              │
│   │  └──────────────────────────────┘   │               │
│   │  ┌──────────────────────────────┐   │               │
│   │  │ WebSocket Server (ws)        │   │              │
│   │  │ Room Management             │   │               │
│   │  │ Message Broadcasting        │   │               │
│   │  └──────────────────────────────┘   │               │
│   └─────────────────────────────────────┘               │
└─────────────────────────────────────────────────────────┘
                         ↕ SQL Queries
┌─────────────────────────────────────────────────────────┐
│                   DATA LAYER                            │
│                                                         │
│   PostgreSQL Database                                   │
│   ┌─────────────────────────────────────┐               │
│   │  admins Table                      │               │
│   │  groups Table                      │               │
│   │  messages Table                    │               │
│   └─────────────────────────────────────┘               │
└─────────────────────────────────────────────────────────┘
```

### 6.2 Client-Server Architecture

The application uses a layered architecture pattern:

**Presentation Layer (Client-Side):**
- The browser renders EJS templates as HTML pages.
- Client-side JavaScript (`chat.js`) manages WebSocket connections, DOM updates, and user interactions.
- CSS provides visual styling with a green-and-white theme.

**Application Layer (Server-Side):**
- Express.js handles HTTP requests, route matching, middleware execution, and template rendering.
- The WebSocket server (`ws`) manages persistent connections, room membership, and message broadcasting.
- Controllers contain business logic for admin operations and chat functionality.

**Data Layer (Database):**
- PostgreSQL stores persistent data in three normalized tables.
- The `pg` library manages database connections and executes parameterized queries.
- Connection pooling optimizes database resource usage.

### 6.3 Request-Response Flow

The following sequence describes a typical HTTP request flow:

1. User enters a URL in the browser or clicks a link.
2. Browser sends an HTTP request to the server (GET or POST).
3. Express.js receives the request and passes it through the middleware pipeline:
   - Static file middleware checks for matching files in `public/`.
   - Body parser middleware parses request bodies (for POST requests).
   - Session middleware loads session data from the session store.
   - Flash middleware makes flash messages available to templates.
4. Route matching determines which controller function handles the request.
5. Controller function executes business logic (querying database, processing data).
6. Controller renders an EJS template with the processed data.
7. Express sends the rendered HTML response back to the browser.
8. Browser displays the HTML page with CSS styling.

### 6.4 WebSocket Data Flow

The following sequence describes the WebSocket communication flow:

1. Client loads the chat room page (`/chat/room/:id?name=...`).
2. Client-side JavaScript creates a WebSocket connection to the server.
3. Server receives the connection, parses query parameters (groupId, name), and adds the client to the appropriate room.
4. Server broadcasts the updated online count to all clients in the room.
5. Client fetches message history via HTTP GET `/chat/history/:id`.
6. When a user sends a message:
   - Client sends JSON `{ content: "message text" }` over WebSocket.
   - Server saves the message to the PostgreSQL database.
   - Server broadcasts the saved message to all clients in the same room.
   - Each client receives the message and appends it to the chat display.
7. When a user is typing:
   - Client sends `{ type: "typing" }` over WebSocket.
   - Server relays the typing event to all other clients in the room.
   - Receiving clients show a typing indicator.
8. When a user disconnects:
   - Client's `close` event fires on the server.
   - Server removes the client from the room.
   - If room becomes empty, server deletes the room.
   - Server broadcasts updated online count.

---

## 7. DATABASE DESIGN

### 7.1 Entity Relationship Diagram

The database consists of three related entities:

```
┌──────────────┐
│    admins    │
├──────────────┤
│ id (PK)      │──────┐
│ username     │      │
│ password     │      │
│ created_at   │      │
└──────────────┘      │
                      │ one-to-many
                      │ (created_by)
┌──────────────┐      │
│    groups    │      │
├──────────────┤      │
│ id (PK)      │◄─────┘
│ name         │
│ description  │
│ is_enable    │
│ created_by   │──────┐
│ created_at   │      │
└──────────────┘      │
                      │ one-to-many
                      │ (group_id)
┌──────────────┐      │
│   messages   │      │
├──────────────┤      │
│ id (PK)      │      │
│ group_id     │◄─────┘
│ sender       │
│ content      │
│ sent_at      │
└──────────────┘
```

**Relationships:**
- One admin can create many groups (1:N).
- One group can have many messages (1:N).
- Deleting a group CASCADE deletes all associated messages.

### 7.2 Table: admins

The `admins` table stores administrator account information.

**Purpose:** Authenticate admin users and track which admin created each group.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Auto-incrementing unique identifier |
| username | VARCHAR(100) | UNIQUE, NOT NULL | Admin login username |
| password | VARCHAR(255) | NOT NULL | Bcrypt-hashed password |
| created_at | TIMESTAMP | DEFAULT NOW() | Account creation timestamp |

**Indexes:** Unique index on `username` (created automatically by UNIQUE constraint).

**Default Data:** A default admin user is inserted with username `admin` and password `admin123` (bcrypt-hashed).

**SQL Definition:**
```sql
CREATE TABLE admins (
  id         SERIAL PRIMARY KEY,
  username   VARCHAR(100) UNIQUE NOT NULL,
  password   VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 7.3 Table: groups

The `groups` table stores chat group information.

**Purpose:** Define chat rooms that guests can join. Admins manage group lifecycle.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Auto-incrementing unique identifier |
| name | VARCHAR(150) | UNIQUE, NOT NULL | Display name of the group |
| description | TEXT | — | Optional description of the group's purpose |
| is_enable | CHAR(1) | DEFAULT 'y', CHECK IN ('y', 'n') | Whether the group is active and visible |
| created_by | INT | REFERENCES admins(id) | Foreign key to the admin who created the group |
| created_at | TIMESTAMP | DEFAULT NOW() | Group creation timestamp |

**Constraints:**
- `name` must be unique across all groups.
- `is_enable` only accepts 'y' (enabled) or 'n' (disabled).
- `created_by` references the `admins` table (enforces referential integrity).

**SQL Definition:**
```sql
CREATE TABLE groups (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(150) UNIQUE NOT NULL,
  description TEXT,
  is_enable   CHAR(1) DEFAULT 'y' CHECK (is_enable IN ('y', 'n')),
  created_by  INT REFERENCES admins(id),
  created_at  TIMESTAMP DEFAULT NOW()
);
```

### 7.4 Table: messages

The `messages` table stores individual chat messages.

**Purpose:** Persist all sent messages for history retrieval and display.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Auto-incrementing unique identifier |
| group_id | INT | REFERENCES groups(id) ON DELETE CASCADE | Foreign key to the group the message belongs to |
| sender | VARCHAR(100) | NOT NULL | Guest's nickname (not a foreign key, as guests are not registered users) |
| content | TEXT | NOT NULL | Message text content |
| sent_at | TIMESTAMP | DEFAULT NOW() | Timestamp when the message was sent |

**Constraints:**
- `group_id` references `groups(id)` with `ON DELETE CASCADE` — deleting a group automatically deletes all its messages.
- `sender` is a VARCHAR(100) (not a foreign key) because guests are unregistered.

**SQL Definition:**
```sql
CREATE TABLE messages (
  id         SERIAL PRIMARY KEY,
  group_id   INT REFERENCES groups(id) ON DELETE CASCADE,
  sender     VARCHAR(100) NOT NULL,
  content    TEXT NOT NULL,
  sent_at    TIMESTAMP DEFAULT NOW()
);
```

### 7.5 Database Relationships

**Admin to Groups (One-to-Many):**
- One admin can create multiple groups.
- The `created_by` foreign key in `groups` references `admins(id)`.
- Deleting an admin is restricted if they have created groups (referential integrity).

**Groups to Messages (One-to-Many):**
- One group can have many messages.
- The `group_id` foreign key in `messages` references `groups(id)`.
- `ON DELETE CASCADE` ensures that deleting a group removes all its messages automatically, preventing orphaned records.

**Data Integrity Rules:**
1. Every group must have a valid admin as its creator.
2. Every message must belong to an existing group.
3. Group names and admin usernames must be unique.
4. The `is_enable` field only accepts `'y'` or `'n'` values.
5. Deleting a group automatically removes all its messages.
6. Timestamps are automatically recorded for all new records.

### 7.6 SQL Setup Scripts

The following SQL statements are required to initialize the database (stored in `src/config/query.md`):

**Step 1: Create the database**
```sql
CREATE DATABASE santosh_chat;
```

**Step 2: Create tables**
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
```

**Step 3: Insert default admin**
```sql
INSERT INTO admins (username, password)
VALUES ('admin', '$2b$10$<bcrypt_hash_of_admin123>');
```

---

## 8. PROJECT STRUCTURE

### 8.1 Directory Layout

The project follows a structured directory layout that separates concerns into logical modules:

```
santosh-cahtting-app/
│
├── .env                            # Environment variables (gitignored)
├── .gitignore                      # Git ignore rules
├── package.json                    # Project metadata and dependencies
├── package-lock.json               # Dependency lock file
├── server.js                       # Application entry point
├── README.md                       # Project README
├── PROJECT_DOCUMENTATION.md        # This documentation
│
├── public/                         # Static files served to clients
│   ├── css/
│   │   └── style.css               # Global stylesheet
│   └── js/
│       └── chat.js                 # Client-side chat logic
│
├── src/                            # Server-side source code
│   ├── config/
│   │   ├── db.js                   # Database connection pool
│   │   └── query.md                # SQL setup instructions
│   ├── controllers/
│   │   ├── adminController.js      # Admin route handlers
│   │   └── chatController.js       # Chat route handlers
│   ├── middleware/
│   │   └── authMiddleware.js       # Session authentication guard
│   ├── routes/
│   │   ├── adminRoutes.js          # Admin route definitions
│   │   └── chatRoutes.js           # Chat route definitions
│   └── websocket/
│       └── wsHandler.js            # WebSocket server setup
│
└── views/                          # EJS template files
    ├── home.ejs                    # Landing page
    ├── error.ejs                   # Error pages (404, 500)
    ├── admin/
    │   ├── login.ejs               # Admin login form
    │   └── dashboard.ejs           # Admin dashboard
    ├── chat/
    │   ├── groups.ejs              # Public group listing
    │   ├── join.ejs                # Nickname input page
    │   └── room.ejs                # Chat room interface
    └── partials/
        ├── header.ejs              # Shared page header
        └── footer.ejs              # Shared page footer
```

### 8.2 File-by-File Breakdown

| File | Type | Lines (approx) | Purpose |
|------|------|----------------|---------|
| `server.js` | JavaScript | ~55 | Entry point, Express setup, middleware, routes, error handlers |
| `.env` | Config | ~3 | Environment variables (PORT, DATABASE_URL, SESSION_SECRET) |
| `.gitignore` | Config | ~5 | Files excluded from version control |
| `package.json` | JSON | ~25 | Project metadata and npm dependencies |
| `public/css/style.css` | CSS | ~900 | All visual styling and responsive design |
| `public/js/chat.js` | JavaScript | ~320 | Client-side WebSocket management and chat UI logic |
| `src/config/db.js` | JavaScript | ~18 | PostgreSQL connection pool configuration |
| `src/config/query.md` | Markdown | ~25 | SQL commands for database setup |
| `src/controllers/adminController.js` | JavaScript | ~130 | Admin login, logout, dashboard, group CRUD |
| `src/controllers/chatController.js` | JavaScript | ~115 | Home, groups listing, join, room, history |
| `src/middleware/authMiddleware.js` | JavaScript | ~8 | Session check for admin route protection |
| `src/routes/adminRoutes.js` | JavaScript | ~18 | Admin route definitions |
| `src/routes/chatRoutes.js` | JavaScript | ~12 | Chat route definitions |
| `src/websocket/wsHandler.js` | JavaScript | ~120 | WebSocket server, room management, messaging |
| `views/home.ejs` | EJS | ~65 | Landing page with hero section and CTA cards |
| `views/error.ejs` | EJS | ~25 | Error page template |
| `views/admin/login.ejs` | EJS | ~30 | Admin login form |
| `views/admin/dashboard.ejs` | EJS | ~110 | Admin dashboard with group management |
| `views/chat/groups.ejs` | EJS | ~55 | Public group listing |
| `views/chat/join.ejs` | EJS | ~40 | Nickname input page |
| `views/chat/room.ejs` | EJS | ~80 | Chat room interface |
| `views/partials/header.ejs` | EJS | ~110 | Shared header with navbar and flash messages |
| `views/partials/footer.ejs` | EJS | ~70 | Shared footer with client-side scripts |

---

## 9. MODULE DESCRIPTIONS

### 9.1 Server Entry Point (server.js)

**File:** `server.js`

The `server.js` file is the main entry point of the application. It initializes the Express application, configures middleware, sets up routes, and starts the HTTP and WebSocket servers.

**Key Components:**

1. **Environment Variables:**
   - Uses `dotenv` package to load configuration from `.env` file.
   - Provides fallback values for SESSION_SECRET and PORT.

2. **HTTP Server Creation:**
   - Creates an HTTP server using Node.js built-in `http` module.
   - Passes the Express app as the request handler.
   - This unified server allows both HTTP and WebSocket to run on the same port.

3. **Express Configuration:**
   - Sets EJS as the view engine.
   - Configures the views directory path.
   - Registers middleware in order:
     - Static file serving from `public/` directory.
     - URL-encoded body parser for form submissions.
     - JSON body parser for API requests.
     - Session middleware with secret from environment variable.
     - Flash message middleware that makes session flash data available to views.

4. **Routes Registration:**
   - Mounts admin routes at `/admin` prefix.
   - Mounts chat routes at `/` root prefix.

5. **Error Handlers:**
   - 404 catch-all handler for unmatched routes.
   - 500 error handler for unhandled exceptions.

6. **Server Initialization:**
   - Starts listening on the configured port (default 3000).
   - Logs the server URL on startup.

**Code Walkthrough:**
```javascript
// Load environment variables
require('dotenv').config();

// Import dependencies
const express = require('express');
const session = require('express-session');
const http = require('http');
const path = require('path');
const setupWebSocket = require('./src/websocket/wsHandler');

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Initialize WebSocket server
setupWebSocket(server);

// Configure EJS template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pipeline
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret_fallback',
  resave: false,
  saveUninitialized: false,
}));

// Flash message middleware
app.use((req, res, next) => {
  res.locals.flash = req.session.flash || null;
  delete req.session.flash;
  res.locals.currentPath = req.path;
  next();
});

// Mount routes
app.use('/admin', require('./src/routes/adminRoutes'));
app.use('/', require('./src/routes/chatRoutes'));

// 404 handler
app.use((req, res) => {
  res.status(404).render('error', { ... });
});

// 500 error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).render('error', { ... });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

### 9.2 Database Configuration (db.js)

**File:** `src/config/db.js`

This module creates and exports a PostgreSQL connection pool configured through environment variables.

**Key Components:**

1. **Connection Pool:**
   - Uses `pg.Pool` to create a pool of reusable database connections.
   - Connection string is read from `DATABASE_URL` environment variable.
   - Pools improve performance by avoiding repeated connection creation.

2. **Event Handlers:**
   - `pool.on('connect')` — Logs successful database connections.
   - `pool.on('error')` — Handles unexpected pool errors by logging and exiting.

3. **Exported Interface:**
   - `query(text, params)` — Executes a parameterized SQL query.
   - Parameters prevent SQL injection by separating query text from user data.

**Code Walkthrough:**
```javascript
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Connected to PostgreSQL Database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
```

### 9.3 Admin Controller (adminController.js)

**File:** `src/controllers/adminController.js`

This controller handles all admin-related HTTP requests including authentication and group management.

**Exported Functions:**

1. **getLoginPage (GET /admin/login):**
   - If already authenticated, redirects to dashboard.
   - Otherwise, renders the login form with no error.

2. **postLogin (POST /admin/login):**
   - Validates username and password presence.
   - Queries database for matching username.
   - Uses bcrypt.compare to verify password against stored hash.
   - On success, creates session with admin id and username.
   - Sets flash success message and redirects to dashboard.
   - On failure, re-renders login form with error message.

3. **logout (GET /admin/logout):**
   - Destroys the current session.
   - Redirects to login page.

4. **getDashboard (GET /admin/dashboard):**
   - Requires authentication (via isAdmin middleware).
   - Queries all groups ordered by creation date (newest first).
   - Renders dashboard with admin info and groups list.

5. **createGroup (POST /admin/groups):**
   - Validates group name is present.
   - Inserts new group with name, description, admin id, and status.
   - Handles unique constraint violations (duplicate group name).
   - Sets flash message and redirects to dashboard.

6. **updateGroup (POST /admin/groups/:id/update):**
   - Validates updated group name.
   - Updates group fields in database.
   - Returns success or error flash message.
   - Handles unique constraint violations.

7. **deleteGroup (POST /admin/groups/:id/delete):**
   - Deletes group by id.
   - Sets flash success with the deleted group name.
   - Handles not-found case gracefully.

**Key Design Decisions:**
- All group management actions redirect to dashboard after completion.
- Flash messages provide immediate user feedback.
- Error handling for database constraint violations (PostgreSQL error code 23505).
- Parameterized queries prevent SQL injection.

### 9.4 Chat Controller (chatController.js)

**File:** `src/controllers/chatController.js`

This controller handles all guest-facing chat-related HTTP requests.

**Exported Functions:**

1. **getHome (GET /):**
   - Queries count of enabled groups.
   - Renders home page with the group count.

2. **listGroups (GET /chat/groups):**
   - Queries all enabled groups, ordered by creation date.
   - Renders groups listing page.

3. **joinPage (GET /chat/join/:id):**
   - Validates group ID is numeric.
   - Queries for the specific group (must be enabled).
   - Renders join page showing group info and nickname form.

4. **chatRoom (GET /chat/room/:id?name=...):**
   - Validates nickname is provided.
   - Truncates nickname to 30 characters max.
   - Validates group ID is numeric.
   - Queries for the specific group (must be enabled).
   - Renders chat room with group info and guest name.

5. **getHistory (GET /chat/history/:id):**
   - Validates group ID is numeric.
   - Queries last 50 messages for the group, ordered chronologically.
   - Returns messages as JSON array.
   - Used by client-side JavaScript to populate initial chat display.

**Key Design Decisions:**
- Guest names are validated and length-limited (30 chars) for consistency.
- All inputs are validated server-side.
- Only enabled groups are accessible to guests.
- Message history returns the most recent 50 messages in chronological order.

### 9.5 Auth Middleware (authMiddleware.js)

**File:** `src/middleware/authMiddleware.js`

This middleware function protects admin routes by checking for a valid session.

**Function:**

1. **isAdmin (req, res, next):**
   - Checks if `req.session.admin` exists.
   - If authenticated, calls `next()` to proceed to the route handler.
   - If not authenticated, redirects to `/admin/login`.

**Code Walkthrough:**
```javascript
module.exports.isAdmin = (req, res, next) => {
  if (req.session && req.session.admin) {
    return next();
  }
  return res.redirect('/admin/login');
};
```

**Usage:**
```javascript
const { isAdmin } = require('../middleware/authMiddleware');
router.get('/dashboard', isAdmin, adminController.getDashboard);
```

This middleware is applied to all admin routes except login and logout.

### 9.6 WebSocket Handler (wsHandler.js)

**File:** `src/websocket/wsHandler.js`

This module sets up the WebSocket server and handles all real-time communication.

**Key Components:**

1. **WebSocket Server Creation:**
   - Creates a WebSocket server attached to the HTTP server.
   - WebSocket and HTTP share the same port.

2. **Room Management:**
   - Uses a `Map` called `rooms` to track connected clients per group.
   - Keys are group IDs (strings).
   - Values are `Set` objects containing WebSocket connections.
   - This allows efficient broadcasting to all clients in a specific group.

3. **Connection Handler:**
   - Parses query parameters (`groupId`, `name`) from the connection URL.
   - Validates required parameters; closes connection if missing.
   - Attaches metadata (`groupId`, `guestName`) to each WebSocket object.
   - Adds client to the appropriate room.
   - Broadcasts updated online count to all room clients.

4. **Message Handler (ws.on('message')):**
   - Parses incoming JSON messages.
   - Handles different message types:
     - **Typing Events:** `{ type: 'typing' }` or `{ type: 'stop_typing' }` — Relays to other clients in the room (not back to sender).
     - **Chat Messages:** `{ content: '...' }` — Checks if group is enabled, saves to database, broadcasts to all room clients.
   - Error handling for malformed JSON and database errors.

5. **Close Handler (ws.on('close')):**
   - Removes client from the room.
   - Cleans up empty rooms.
   - Broadcasts updated online count.

6. **broadcastUserCount Helper:**
   - Sends `{ type: 'user_count', count: N }` to all clients in a room.
   - Used when users connect or disconnect.

**Key Design Decisions:**
- Typing indicators are ephemeral (not stored in database).
- Group disabled check happens before saving/broadcasting messages.
- Error messages are sent back to individual clients, not broadcast.
- Room cleanup prevents memory leaks from abandoned groups.
- Exponential backoff for reconnection is handled client-side.

**WebSocket Message Protocols:**

| Direction | Message Type | Payload | Description |
|-----------|-------------|---------|-------------|
| Client → Server | chat | `{ content: "hello" }` | Send a chat message |
| Client → Server | typing | `{ type: "typing" }` | User started typing |
| Client → Server | stop_typing | `{ type: "stop_typing" }` | User stopped typing |
| Server → All | message | `{ id, group_id, sender, content, sent_at }` | New chat message |
| Server → Others | typing | `{ type: "typing", sender: "name" }` | Someone is typing |
| Server → Others | stop_typing | `{ type: "stop_typing", sender: "name" }` | Someone stopped typing |
| Server → All | user_count | `{ type: "user_count", count: N }` | Updated online count |
| Server → Client | error | `{ type: "error", message: "..." }` | Server error notification |

### 9.7 Admin Routes (adminRoutes.js)

**File:** `src/routes/adminRoutes.js`

This module defines all admin-related routes and maps them to controller functions.

**Route Definitions:**

| HTTP Method | Path | Middleware | Controller | Description |
|-------------|------|------------|------------|-------------|
| GET | `/admin/login` | None | `getLoginPage` | Display login form |
| POST | `/admin/login` | None | `postLogin` | Process login credentials |
| GET | `/admin/logout` | None | `logout` | Destroy session and redirect |
| GET | `/admin/dashboard` | `isAdmin` | `getDashboard` | Show admin dashboard |
| POST | `/admin/groups` | `isAdmin` | `createGroup` | Create a new group |
| POST | `/admin/groups/:id/update` | `isAdmin` | `updateGroup` | Update existing group |
| POST | `/admin/groups/:id/delete` | `isAdmin` | `deleteGroup` | Delete a group |

**Protected Routes:**
Routes with `isAdmin` middleware will redirect unauthenticated users to `/admin/login`. This ensures that only logged-in administrators can manage groups.

### 9.8 Chat Routes (chatRoutes.js)

**File:** `src/routes/chatRoutes.js`

This module defines all guest-facing chat routes.

**Route Definitions:**

| HTTP Method | Path | Controller | Description |
|-------------|------|------------|-------------|
| GET | `/` | `getHome` | Landing page |
| GET | `/chat/groups` | `listGroups` | Browse enabled groups |
| GET | `/chat/join/:id` | `joinPage` | Nickname input for a group |
| GET | `/chat/room/:id` | `chatRoom` | Chat room interface |
| GET | `/chat/history/:id` | `getHistory` | Message history JSON API |

**Query Parameters:**
- `/chat/room/:id?name=guestname` — The `name` query parameter carries the guest's chosen nickname.
- `/chat/history/:id` — Returns JSON data, used by client-side JavaScript.

### 9.9 Client-Side Chat Script (chat.js)

**File:** `public/js/chat.js`

This JavaScript file runs in the browser and manages the chat room user experience.

**Key Functions:**

1. **DOM Initialization:**
   - Waits for `DOMContentLoaded` event before executing.
   - Retrieves references to key DOM elements: messages container, form, input, buttons, status indicators.
   - Reads hidden input values for `groupId` and `guestName`.

2. **Helper Functions:**
   - `formatTime(dateString)` — Converts ISO timestamp to 12-hour time format.
   - `setConnectionStatus(state, label)` — Updates the connection status indicator UI.
   - `showError(message)` — Displays auto-dismissing error messages in the chat area.
   - `appendMessage(msg, animate)` — Adds a message bubble to the chat display with optional entrance animation.
   - `escapeHtml(text)` — Sanitizes user-generated text to prevent XSS attacks.

3. **Typing Indicator System:**
   - `updateTypingIndicator()` — Shows/hides the typing indicator based on active typers.
   - `handleTypingEvent(sender)` — Records when a user starts typing and updates the indicator.
   - `handleStopTyping(sender)` — Removes a user from typing state.
   - `sendTypingEvent()` — Sends typing notification to the server.
   - `sendStopTyping()` — Sends stop-typing notification to the server.
   - Automatic cleanup of stale typing users every 2 seconds.

4. **WebSocket Connection:**
   - `connectWebSocket()` — Establishes a new WebSocket connection with query parameters.
   - Handles `onopen`, `onmessage`, `onerror`, and `onclose` events.
   - `onmessage` — Parses JSON and handles different message types (typing, user_count, error, chat messages).
   - `onclose` — Implements automatic reconnection with exponential backoff.
   - Exponential backoff: `min(1000 * 2^attempt, 10000)` milliseconds.
   - Maximum 5 reconnection attempts before showing a permanent error.

5. **Message History:**
   - Fetches `/chat/history/:groupId` via HTTP GET on page load.
   - Populates the chat display with existing messages.
   - Handles empty state and error states.

6. **Form and Input Handling:**
   - Form submit handler sends message via WebSocket.
   - Input event handler detects typing and sends typing events.
   - Supports Enter key to send messages.

7. **Online/Offline Detection:**
   - Listens for browser `online` and `offline` events.
   - Automatically attempts reconnection when connection is restored.
   - Shows offline warning when browser goes offline.

8. **Cleanup:**
   - `beforeunload` event handler ensures clean WebSocket disconnection.
   - Sends stop-typing notification on page leave.
   - Clears any pending reconnection timers.

### 9.10 CSS Styling (style.css)

**File:** `public/css/style.css`

The stylesheet defines the visual appearance of the entire application using CSS custom properties for maintainable theming.

**Key Design Principles:**

1. **CSS Custom Properties (Variables):**
   - Defined in `:root` for consistent theming.
   - Color palette centered around green primary (`#22c55e`).
   - Surface, text, border, and status colors are all defined as variables.
   - Shadow and border-radius tokens for consistent visual design.

2. **Layout:**
   - Flexbox and CSS Grid for responsive layouts.
   - Sticky navbar for persistent navigation.
   - Full-height chat container with flex column layout.
   - Max-width container for content centering.

3. **Component Styles:**
   - **Buttons:** Primary green, outline, danger variants with hover effects and loading state.
   - **Cards:** Rounded corners, subtle shadows, hover elevation effects.
   - **Forms:** Styled inputs with green focus ring, inline form layouts.
   - **Flash Messages:** Animated sliding notifications at the top of the page.
   - **Chat Messages:** Speech-bubble style with sender-specific alignment.
   - **Typing Indicator:** Animated bouncing dots animation.
   - **Connection Status:** Color-coded badges (green=connected, yellow=connecting, red=error, gray=disconnected).

4. **Animations:**
   - `fadeIn` — Page content entrance animation.
   - `flashSlideIn` — Flash message appearance animation.
   - `messageFadeIn` — Message bubble entrance animation.
   - `typingBounce` — Typing indicator dot bounce animation.
   - `pulse` — Connection status and online indicator pulse animation.
   - Button loading spinner animation.

5. **Responsive Design:**
   - Breakpoints at 768px (tablet) and 480px (mobile).
   - Condensed nav layout on mobile (hide text labels, show only icons).
   - Full-width form elements on mobile.
   - Reduced padding and font sizes on smaller screens.
   - Chat container adjusts height for mobile viewports.
   - Group grids collapse to single column on mobile.

---

## 10. VIEW TEMPLATES

### 10.1 Home Page (home.ejs)

**File:** `views/home.ejs`

The landing page of the application features a modern hero section and two call-to-action cards.

**Key Sections:**

1. **Hero Section:**
   - Badge indicating "Real-time Communication".
   - Large gradient heading "Welcome to Santosh Chat".
   - Descriptive paragraph about the app's purpose.
   - Statistics bar showing the number of active groups.

2. **Action Cards:**
   - **Join a Chat Card:** Green-themed with gradient background, icon, description, and "View Groups" button.
   - **Admin Portal Card:** Neutral card with lock icon, description, and "Admin Login" button.

3. **Design Details:**
   - Inline styles for component-specific styling.
   - CSS custom properties are used throughout.
   - Hover animations on cards (scale and translate effects).
   - Dynamic group count display using EJS template variable.

### 10.2 Admin Login (login.ejs)

**File:** `views/admin/login.ejs`

A clean, centered login form for admin authentication.

**Features:**
- Centered card layout with lock icon.
- Username and password input fields with labels.
- Login button (full-width).
- Error message display (conditionally rendered).
- Uses `auth-container` and `form-card` CSS classes for consistent styling.

### 10.3 Admin Dashboard (dashboard.ejs)

**File:** `views/admin/dashboard.ejs`

The main admin interface for managing chat groups.

**Sections:**

1. **Dashboard Header:**
   - Gradient background with welcome message.
   - Admin username display.
   - Logout button with glass-effect styling.

2. **Create Group Sidebar:**
   - Sticky positioning for persistent access.
   - Group name input (required).
   - Description input.
   - Status dropdown (Active/Inactive).
   - Create button with submit handler.

3. **Manage Groups Main Area:**
   - Summary header showing total group count.
   - Conditional rendering: shows empty state message or group list.
   - Each group is displayed in an editable card with:
     - Name input field.
     - Description input field.
     - Status dropdown (Enabled/Disabled).
     - "Save Changes" button.
     - "Delete" button with JavaScript confirmation dialog.

4. **Responsive Layout:**
   - Two-column grid on desktop (sidebar + main content).
   - Stacks to single column on mobile.

### 10.4 Groups List (groups.ejs)

**File:** `views/chat/groups.ejs`

Public-facing page that displays all enabled chat groups.

**Features:**
- Page header with badge and description.
- Responsive grid layout for group cards.
- Empty state with dashed-border placeholder when no groups exist.
- Each group card shows:
   - Group icon (users icon on gradient background).
   - Group name.
   - Description (truncated to 2 lines).
   - "Join Chat" button with arrow icon.
- Hover effects: translate up and box-shadow enhancement.
- Inline styles for card-specific animations.

### 10.5 Join Page (join.ejs)

**File:** `views/chat/join.ejs`

Page where guests enter their nickname before joining a chat room.

**Features:**
- Centered card with decorative background icon.
- Group name displayed in heading.
- Group description shown.
- Nickname input field with placeholder.
- "Enter Chat Room" button.
- "Back to groups" link.
- Subtle hover and focus styles on input field.

### 10.6 Chat Room (room.ejs)

**File:** `views/chat/room.ejs`

The main chat interface where real-time messaging happens.

**Key Sections:**

1. **Chat Header:**
   - Group icon with gradient background.
   - Group name and description.
   - Online count badge with live updates.
   - Connection status indicator.
   - Current guest name badge.
   - "Leave" button with navigation to groups page.

2. **Messages Area:**
   - Scrollable container for message history.
   - Loading indicator during history fetch.
   - Messages displayed as bubbles with animation.

3. **Typing Indicator:**
   - Hidden by default, shown when other users are typing.
   - Displays "X is typing...", "X and Y are typing...", or "X and N others are typing...".

4. **Input Area:**
   - Rounded text input with placeholder.
   - Send button with paper plane icon.
   - Focus and hover styling.

5. **Hidden Inputs:**
   - `groupId` — Passes group ID to client-side JavaScript.
   - `guestName` — Passes guest name to client-side JavaScript.

6. **External Script:**
   - Loads `/js/chat.js` for client-side chat logic.

### 10.7 Error Page (error.ejs)

**File:** `views/error.ejs`

A generic error page that handles both 404 (Not Found) and 500 (Server Error) responses.

**Features:**
- Dynamic icon based on error code (compass for 404, warning triangle for 500).
- Large error code display.
- Error message heading.
- Error description text.
- Action buttons: "Go Home", "Try Again", "Go Back".
- Routing logic via JavaScript `location` methods.

### 10.8 Partials — Header (header.ejs)

**File:** `views/partials/header.ejs`

The shared page header that appears on every page.

**Features:**

1. **HTML Document Setup:**
   - DOCTYPE, lang attribute, meta tags for character set and viewport.
   - Title: "Santosh Chat".
   - External resources: Google Fonts (Inter), Font Awesome CDN, custom CSS.

2. **Premium Navbar:**
   - Glass-effect sticky navigation bar.
   - Brand name with chat icon.
   - Navigation links: "Groups" link with active state detection.
   - "Admin Panel" button with active state detection.
   - Active class is applied based on `currentPath` local variable.

3. **Flash Messages:**
   - Fixed-position toast notifications in the top-right corner.
   - Success and error variants with color-coded borders.
   - Slide-in animation from the right.
   - Auto-dismiss after 4 seconds.
   - Manual close button.
   - JavaScript for animation and removal.

4. **Offline Banner:**
   - Hidden by default, shown when browser goes offline.
   - Warning icon and message.
   - Visibility controlled by JavaScript `online`/`offline` events.

### 10.9 Partials — Footer (footer.ejs)

**File:** `views/partials/footer.ejs`

The shared page footer with global client-side functionality.

**Features:**

1. **Footer Content:**
   - Copyright notice: "© 2026 Santosh Chatting App. All Rights Reserved."
   - Centered layout with muted text color.

2. **Global JavaScript:**
   - **Button Loading State:** Automatically adds loading spinners to all form submit buttons (except chat form). Disables buttons during form submission and re-enables after 10 seconds fallback.
   - **Network Detection:** Listens for browser online/offline events and toggles the offline banner visibility.
   - **HTML Escaping:** `escapeHtml()` helper function for safe string injection.
   - **Flash Scrolling:** Auto-scrolls to flash messages on page load.

---

## 11. API ENDPOINTS

### 11.1 Admin Routes

All admin routes are prefixed with `/admin`.

| Method | Endpoint | Auth | Request Body | Response | Description |
|--------|----------|------|-------------|----------|-------------|
| GET | `/admin/login` | No | — | Login form HTML | Display login page |
| POST | `/admin/login` | No | `{ username, password }` | Redirect to dashboard or re-render login | Authenticate admin |
| GET | `/admin/logout` | No | — | Redirect to login | Destroy session |
| GET | `/admin/dashboard` | Yes | — | Dashboard HTML with groups list | Main admin panel |
| POST | `/admin/groups` | Yes | `{ name, description, is_enable }` | Redirect to dashboard | Create new group |
| POST | `/admin/groups/:id/update` | Yes | `{ name, description, is_enable }` | Redirect to dashboard | Update existing group |
| POST | `/admin/groups/:id/delete` | Yes | — | Redirect to dashboard | Delete group and messages |

**Auth Legend:** "Yes" means the route is protected by `isAdmin` middleware.

### 11.2 Chat Routes

Chat routes are mounted at the root `/` and do not require authentication.

| Method | Endpoint | Query Params | Response | Description |
|--------|----------|-------------|----------|-------------|
| GET | `/` | — | Home page HTML | Landing page with stats |
| GET | `/chat/groups` | — | Groups listing HTML | Browse enabled groups |
| GET | `/chat/join/:id` | — | Join page HTML | Enter nickname for a group |
| GET | `/chat/room/:id` | `name` (required) | Chat room HTML | Real-time chat interface |
| GET | `/chat/history/:id` | — | JSON array of messages | Fetch last 50 messages |

### 11.3 WebSocket Events

The WebSocket server listens on the same port as HTTP. Clients connect with query parameters.

**Connection URL:** `ws://host:port?groupId=X&name=Y`

**Client → Server Messages:**

| Type | Payload | Description |
|------|---------|-------------|
| Chat message | `{ content: "text" }` | Send a message to the group |
| Typing | `{ type: "typing" }` | Notify that user is typing |
| Stop typing | `{ type: "stop_typing" }` | Notify that user stopped typing |

**Server → Client Messages:**

| Type | Payload | Description |
|------|---------|-------------|
| Chat message | `{ id, group_id, sender, content, sent_at }` | New message (broadcast to all) |
| Typing | `{ type: "typing", sender: "name" }` | Someone is typing (sent to others) |
| Stop typing | `{ type: "stop_typing", sender: "name" }` | Someone stopped typing (sent to others) |
| User count | `{ type: "user_count", count: N }` | Updated online count |
| Error | `{ type: "error", message: "text" }` | Error notification (sent to individual) |

---

## 12. FEATURES IN DETAIL

### 12.1 Admin Authentication

The admin authentication system uses bcrypt password hashing and server-side sessions.

**Login Flow:**
1. Admin navigates to `/admin/login`.
2. Admin enters username and password in the form.
3. Form submits via POST to `/admin/login`.
4. Server queries the `admins` table by username.
5. If user exists, bcrypt compares the provided password against the stored hash.
6. On successful comparison:
   - Session is created with `{ id, username }` data.
   - Flash success message is stored.
   - Admin is redirected to `/admin/dashboard`.
7. On failure:
   - Generic "Invalid username or password" message is shown (no information leakage).
   - Login form is re-rendered.

**Security Features:**
- Passwords are never stored in plain text.
- Bcrypt cost factor of 10 makes brute-force attacks computationally expensive.
- Generic error messages prevent username enumeration.
- Sessions are server-side, not stored in cookies.
- Session secret is configurable via environment variables.

### 12.2 Session Management

Session management uses `express-session` middleware with in-memory storage.

**Session Lifecycle:**
1. When a user visits the site for the first time, Express creates a new session.
2. A session ID cookie is sent to the browser.
3. On subsequent requests, the browser sends the session ID cookie.
4. Express matches the session ID to the in-memory session store.
5. After successful login, admin data is stored in the session.
6. The `isAdmin` middleware checks for session data on protected routes.
7. Logout destroys the session, removing the data from the store.

**Configuration:**
- `secret`: Signed with a configurable secret (from SESSION_SECRET env var).
- `resave: false`: Session is not saved if nothing was modified.
- `saveUninitialized: false`: No session is saved until data is added (prevents unnecessary session creation).

### 12.3 Group CRUD Operations

Administrators have full CRUD (Create, Read, Update, Delete) control over chat groups.

**Create:**
- Form in the dashboard sidebar.
- Required: Group name.
- Optional: Description, Status.
- Validates against duplicate names (PostgreSQL unique constraint error code 23505).
- Sets flash success/error message.

**Read:**
- Dashboard queries all groups ordered by creation date (newest first).
- Each group is displayed in an editable card.
- Public groups page only shows enabled groups.

**Update:**
- Inline editing within each group card.
- Editable fields: name, description, status.
- Validates name is not empty.
- Handles duplicate name conflicts.
- Updates with `RETURNING *` to confirm the update.

**Delete:**
- Delete button with JavaScript confirmation dialog.
- Shows warning about permanent message loss.
- Deletes group from database (CASCADE deletes all messages).
- Returns deleted group name for confirmation message.

### 12.4 Real-Time Messaging

The core feature of the application — instant message delivery using WebSocket.

**Message Lifecycle:**
1. User types a message and presses Enter or clicks Send.
2. Client-side JavaScript captures the form submission.
3. Message content is sent as JSON over WebSocket.
4. Server receives the message and checks if the group is still enabled.
5. If enabled, server saves the message to the PostgreSQL database.
6. Server broadcasts the saved message (with id, sender, content, timestamp) to ALL connected clients in the same group.
7. Each client receives the message and appends it to the chat display with an entrance animation.
8. The sender's browser also receives the broadcast (echo confirmation), ensuring consistent message ordering.

**Features:**
- Messages are saved to database before broadcasting to ensure persistence.
- Group enable/disable status is checked before each message.
- Messages are sanitized client-side using HTML escaping.
- Sender identification is embedded in each message for UI styling.

### 12.5 Typing Indicators

Typing indicators provide visual feedback when other users are composing messages.

**How It Works:**
1. When a user starts typing in the message input field, the client sends a `{ type: "typing" }` message over WebSocket.
2. The server relays this event to all OTHER clients in the room (not back to the sender).
3. Receiving clients display a typing indicator with the sender's name.
4. When the user stops typing (after 2 seconds of inactivity or when the input is empty), the client sends `{ type: "stop_typing" }`.
5. The server relays the stop event to other clients.
6. A periodic cleanup (every 2 seconds) removes stale typing users.

**Display Format:**
- 1 typer: "Santosh is typing..."
- 2 typers: "Santosh and Priya are typing..."
- 3+ typers: "Santosh and 2 others are typing..."

**Design:**
- Typing indicator includes animated bouncing dots for visual appeal.
- Indicators are ephemeral (not stored in database).
- No typing events are sent back to the typing user.

### 12.6 Online User Count

The application displays how many users are currently connected to each chat room.

**How It Works:**
1. When a client connects via WebSocket, they are added to a room-specific Set.
2. The server broadcasts the updated count to all clients in that room.
3. When a client disconnects, they are removed from the set.
4. If the set becomes empty, the room is deleted from the rooms Map.
5. The count is displayed in the chat header with a green dot indicator.

**Display:**
- Shows "[count] online" with a pulsing green dot.
- Styling changes when multiple users are online (darker background).

### 12.7 Message History

When a user joins a chat room, they can see the last 50 messages that were sent in that group.

**How It Works:**
1. On page load, client-side JavaScript makes an HTTP GET request to `/chat/history/:groupId`.
2. The server queries the database for the last 50 messages in ascending chronological order.
3. The query uses a subquery: `SELECT * FROM (SELECT * FROM messages WHERE group_id = $1 ORDER BY sent_at DESC LIMIT 50) AS sub ORDER BY sent_at ASC`.
4. The result is returned as a JSON array.
5. Client-side JavaScript iterates through the array and appends each message to the chat display (without animation).
6. If no messages exist, an empty state message is shown.
7. On error, a retry button is displayed.

**Design Decisions:**
- Limit of 50 messages prevents large data transfers on initial load.
- Messages are shown without entrance animation for a cleaner initial experience.
- Chronological order ensures conversation coherence.

### 12.8 Group Enable/Disable

Administrators can enable or disable groups, controlling their visibility and availability.

**Effects of Disabling:**
- The group is hidden from the public groups listing page (`/chat/groups`).
- Direct access to `/chat/join/:id` returns a 404 error.
- Direct access to `/chat/room/:id` returns a 404 error.
- Existing chat sessions cannot send new messages (WebSocket returns an error message).
- Message history is still preserved in the database.
- Admin can re-enable the group at any time.

**Implementation:**
- The `is_enable` column in the `groups` table uses a `CHAR(1)` with CHECK constraint (`'y'` or `'n'`).
- All guest-facing queries include `WHERE is_enable = 'y'`.
- WebSocket message handler checks `is_enable` before saving.

### 12.9 Responsive Design

The application is fully responsive and works on desktop, tablet, and mobile devices.

**Responsive Breakpoints:**

| Breakpoint | Target Devices | Key Changes |
|------------|---------------|-------------|
| > 768px | Desktop | Full layout, multi-column grids, sidebars |
| ≤ 768px | Tablet, Mobile | Single-column layout, condensed header, full-width elements |
| ≤ 480px | Small mobile | Reduced padding, smaller fonts, minimal header |

**Specific Responsive Behaviors:**
- Navbar collapses text labels on mobile (shows only icons).
- Dashboard changes from 2-column to single column.
- Chat container adjusts height for mobile viewports.
- Group grid changes from multi-column to single column.
- Form elements become full-width on mobile.
- Buttons stack vertically in small spaces.
- Table elements become horizontally scrollable.

### 12.10 Connection Status & Reconnection

The application provides visual feedback about WebSocket connection status and automatically reconnects if the connection drops.

**Status States:**

| State | Color | Indicator | Description |
|-------|-------|-----------|-------------|
| Connected | Green | Solid circle | WebSocket is active |
| Connecting | Yellow | Pulsing circle | Attempting to connect/reconnect |
| Disconnected | Gray | Muted circle | Connection lost, attempting reconnect |
| Error | Red | Solid circle | Max reconnection attempts reached |

**Reconnection Strategy:**
- Exponential backoff: `1000 * 2^attempt` milliseconds, capped at 10 seconds.
- Maximum 5 reconnection attempts.
- On each attempt, the status shows "Reconnecting in Xs...".
- After all attempts fail, a permanent error message is displayed with a suggestion to refresh.

**Additional Features:**
- Browser online/offline detection triggers reconnection attempts.
- Cleanup on page unload prevents unnecessary reconnection attempts.
- Send button is disabled when disconnected.

---

## 13. INSTALLATION AND SETUP

### 13.1 Prerequisites

Before installing the application, ensure the following software is installed on your system:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (Node Package Manager, comes with Node.js)
   - Verify installation: `npm --version`

3. **PostgreSQL** (v14 or higher)
   - Download from: https://www.postgresql.org/download/
   - Verify installation: `psql --version`

4. **Git** (optional, for version control)
   - Download from: https://git-scm.com/downloads

5. **A modern web browser** (Chrome, Firefox, Edge, or Safari)

### 13.2 Step 1: Clone the Repository

```bash
git clone https://github.com/santoshsinghbhagel/chat_app.git
cd chat_app
```

If you downloaded the ZIP file instead, extract it to a folder and navigate to that folder in your terminal.

### 13.3 Step 2: Install Dependencies

```bash
npm install
```

This command reads the `package.json` file and installs all required dependencies:

**Production Dependencies:**
- `express` — Web framework
- `ejs` — Template engine
- `pg` — PostgreSQL client
- `ws` — WebSocket library
- `bcrypt` — Password hashing
- `express-session` — Session management
- `dotenv` — Environment variable loading

**Development Dependencies:**
- `nodemon` — Auto-restart during development

### 13.4 Step 3: Configure Environment Variables

Create a `.env` file in the root project directory:

```env
PORT=3000
DATABASE_URL=postgresql://username:password@localhost:5432/santosh_chat
SESSION_SECRET=your_strong_secret_key_here
```

Replace the following values:
- `username` — Your PostgreSQL username (default: `postgres`)
- `password` — Your PostgreSQL password
- `your_strong_secret_key_here` — A random string for session signing

**Example:**
```env
PORT=3000
DATABASE_URL=postgresql://postgres:mypassword@localhost:5432/santosh_chat
SESSION_SECRET=abc123xyz789secretkey
```

### 13.5 Step 4: Setup PostgreSQL Database

**Option A: Using psql command line**

1. Connect to PostgreSQL:
   ```bash
   psql -U postgres
   ```

2. Create the database:
   ```sql
   CREATE DATABASE santosh_chat;
   ```

3. Connect to the new database:
   ```sql
   \c santosh_chat;
   ```

4. Create tables:
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
   ```

5. Insert default admin user:
   ```sql
   INSERT INTO admins (username, password)
   VALUES ('admin', '<bcrypt_hash_of_admin123>');
   ```

6. Exit psql:
   ```sql
   \q
   ```

**Option B: Refer to the setup file**
The SQL commands are also available in `src/config/query.md` for reference.

### 13.6 Step 5: Run the Application

**Development Mode (with auto-restart):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

You should see the following output:
```
Server running on http://localhost:3000
Connected to PostgreSQL Database
```

### 13.7 Step 6: Access the Application

Open your web browser and navigate to:

- **Home Page:** `http://localhost:3000`
- **Admin Login:** `http://localhost:3000/admin/login`
- **Groups Listing:** `http://localhost:3000/chat/groups`

**Default Admin Credentials:**
- Username: `admin`
- Password: `admin123`

---

## 14. USER GUIDE

### 14.1 For Guests (Chat Users)

**Objective:** Join a chat room and start messaging.

**Step-by-Step Instructions:**

**Step 1: Navigate to the Home Page**
- Open `http://localhost:3000` in your browser.
- You will see the Santosh Chat landing page with two options: "Join a Chat" and "Admin Portal".

**Step 2: Browse Active Groups**
- Click on "View Groups" button in the "Join a Chat" card.
- Alternatively, click the "Groups" link in the navigation bar.
- You will see a grid of all active (enabled) chat groups.
- If no groups are available, an empty state message will be displayed.

**Step 3: Select a Group**
- Browse through the available groups.
- Click "Join Chat" on the group you want to enter.

**Step 4: Enter Your Nickname**
- You will see the group name and description.
- Enter a temporary nickname in the input field.
- The nickname is used to identify you in the chat room.
- Click "Enter Chat Room" to proceed.

**Step 5: Start Chatting**
- You will enter the chat room with the full interface.
- Existing messages (last 50) will be loaded and displayed.
- Type your message in the text input at the bottom.
- Press Enter or click the Send button (paper plane icon) to send your message.
- Your messages appear on the right side (green bubbles).
- Other users' messages appear on the left side (white bubbles).

**Step 6: Observe Real-Time Features**
- **Typing Indicator:** When another user is typing, you will see "X is typing..." at the bottom of the chat.
- **Online Count:** The number of users currently online is displayed in the header.
- **Connection Status:** A green dot indicates you are connected.

**Step 7: Leave the Chat Room**
- Click the "Leave" button in the header.
- Confirm that you want to leave.
- You will be redirected to the groups listing page.

### 14.2 For Administrators

**Objective:** Manage chat groups through the admin panel.

**Step-by-Step Instructions:**

**Step 1: Access the Admin Login**
- Navigate to `http://localhost:3000/admin/login`.
- Alternatively, click the "Admin Panel" button in the navigation bar.

**Step 2: Log In**
- Enter your admin credentials:
  - Username: `admin`
  - Password: `admin123`
- Click "Login".
- On success, you will be redirected to the Admin Dashboard.

**Step 3: Create a New Group**
- On the dashboard, locate the "Create New Group" form on the left sidebar.
- Enter a unique group name (required).
- Optionally, enter a description for the group.
- Choose the group status:
  - **Active (Enabled):** Group is visible and available for chatting.
  - **Inactive (Disabled):** Group is hidden and cannot be used.
- Click "Create Group".
- A success flash message will appear, and the group will appear in the "Manage Groups" list.

**Step 4: Edit an Existing Group**
- In the "Manage Existing Groups" section, find the group you want to edit.
- You can modify:
  - **Group Name:** Change the group's display name.
  - **Description:** Update the group description.
  - **Status:** Toggle between Enabled and Disabled.
- Click "Save Changes" to apply your updates.
- A success flash message will confirm the update.

**Step 5: Delete a Group**
- In the group card, click the "Delete" button (red).
- A confirmation dialog will appear warning that all messages will be permanently deleted.
- Click "OK" to confirm deletion.
- The group and all its messages will be permanently removed.

**Step 6: Enable/Disable a Group**
- Set the group's status to "Disabled" and click "Save Changes".
- Disabled groups will no longer appear in the public groups list.
- Users currently in the group will not be able to send new messages.
- You can re-enable the group at any time by setting status to "Enabled" and saving.

**Step 7: Log Out**
- Click the "Logout" button in the dashboard header.
- Your session will be destroyed, and you will be redirected to the login page.

---

## 15. SECURITY CONSIDERATIONS

### 15.1 Password Hashing (Bcrypt)

The application uses the bcrypt hashing algorithm to securely store administrator passwords.

**Why Bcrypt?**
- Bcrypt automatically generates a unique salt for each password, preventing rainbow table attacks.
- The cost factor (work factor) can be increased over time to compensate for faster hardware.
- Bcrypt is designed to be slow, making brute-force attacks computationally expensive.
- The algorithm is well-vetted and has been widely used in production systems.

**Implementation:**
- During admin creation (via SQL INSERT), the password is pre-hashed using bcrypt before storage.
- During login, the provided password is compared against the stored hash using `bcrypt.compare()`.
- The raw password is never stored or logged.

### 15.2 Session-Based Authentication

Admin authentication is managed through server-side sessions.

**Security Features:**
- Session data is stored on the server, not in cookies.
- The session ID is stored in a signed cookie (prevents tampering).
- The session secret is configured via environment variable (not hardcoded).
- Admin routes are protected by the `isAdmin` middleware.
- Sessions are destroyed on logout.

**Best Practices Followed:**
- `saveUninitialized: false` — Prevents creating sessions for unauthenticated users.
- `resave: false` — Reduces unnecessary session store writes.
- Session secret should be a long, random string in production.

### 15.3 SQL Injection Prevention

The application uses parameterized queries to prevent SQL injection attacks.

**What is SQL Injection?**
SQL injection is a code injection technique where an attacker inserts malicious SQL statements into input fields. Without proper protection, an attacker could execute arbitrary SQL commands on the database.

**How We Prevent It:**
- All database queries use parameterized syntax: `WHERE username = $1`, `[username]`.
- User input is never concatenated directly into SQL strings.
- The `pg` library handles proper escaping and parameter substitution.
- Example of safe code:
  ```javascript
  // SAFE: Parameterized query
  db.query('SELECT * FROM admins WHERE username = $1', [username]);
  
  // UNSAFE: String concatenation (never used in this project)
  db.query(`SELECT * FROM admins WHERE username = '${username}'`);
  ```

### 15.4 Input Validation

User inputs are validated both client-side and server-side.

**Client-Side Validation:**
- HTML5 form validation (`required` attribute on inputs).
- JavaScript form event handling prevents submission of empty messages.

**Server-Side Validation:**
- Username and password presence check during login.
- Group name presence and non-empty check during creation/update.
- Group ID format validation (must be numeric).
- Guest name length limit (max 30 characters).
- Message content sent via WebSocket is validated.

### 15.5 Environment Variables

Sensitive configuration is stored in environment variables, not in the source code.

**Environment Variables Used:**
- `DATABASE_URL` — Database connection string (contains username and password).
- `SESSION_SECRET` — Secret key for session cookie signing.
- `PORT` — Server port number (defaults to 3000).

**Best Practices:**
- `.env` file is in `.gitignore` to prevent accidental commits.
- Each developer creates their own `.env` file.
- In production, environment variables are set through the hosting platform.

### 15.6 XSS Protection

Cross-Site Scripting (XSS) attacks are prevented through multiple mechanisms.

**EJS Template Escaping:**
- The `<%=` tag in EJS automatically escapes HTML characters.
- User-generated content is rendered using escaped output.

**Client-Side Sanitization:**
- The `escapeHtml()` function in `chat.js` converts special characters to HTML entities.
- User-generated content is escaped before being inserted into the DOM.
- Example:
  ```javascript
  const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };
  ```

**Additional Protection:**
- Input length limits prevent oversized payload attacks.
- JSON parsing with try-catch prevents malformed message handling.

---

## 16. PERFORMANCE OPTIMIZATIONS

### 16.1 Database Query Optimization

The application implements several database optimizations:

**Parameterized Queries:**
- All queries use parameters (`$1`, `$2`, etc.) which allows PostgreSQL to cache query plans.
- Reduces query compilation overhead for repeated queries.

**Efficient History Retrieval:**
- Message history query uses a subquery pattern:
  ```sql
  SELECT * FROM (
    SELECT * FROM messages WHERE group_id = $1 ORDER BY sent_at DESC LIMIT 50
  ) AS sub ORDER BY sent_at ASC;
  ```
- This retrieves only the most recent 50 messages, avoiding full table scans.

**Connection Pooling:**
- The `pg.Pool` module maintains a pool of reusable database connections.
- Eliminates the overhead of creating a new connection for each query.
- Pool configuration is managed by the PostgreSQL client.

### 16.2 WebSocket Efficiency

The WebSocket implementation is optimized for performance:

**Room-Based Broadcasting:**
- Clients are organized into room-specific Sets in a Map.
- Messages are only broadcast to clients in the same group room.
- No unnecessary data transfer to clients in other rooms.

**Typing Events:**
- Typing indicators are ephemeral (not stored in the database).
- Minimal payload size: `{ type: "typing", sender: "name" }`.
- Periodic cleanup prevents stale typing states.

**Efficient Disconnection Handling:**
- Client removal from room is O(1) (Set.delete).
- Empty room cleanup prevents memory leaks.
- Online count broadcasting only happens when count changes.

### 16.3 CSS and Asset Loading

Front-end performance is optimized through:

**CDN Resources:**
- Google Fonts loaded from CDN (fast, cached globally).
- Font Awesome loaded from CDN (minimized, cached).

**Minimal Dependencies:**
- No JavaScript framework overhead (vanilla JS for client-side).
- No CSS preprocessors (pure CSS with custom properties).
- Single CSS file loads all styles.

**External Resources:**
- Google Fonts preconnect for faster font loading.
- Font Awesome stylesheet loaded with async (default by CDN).

### 16.4 Message History Pagination

The message history feature is designed to prevent performance issues:

**Limit 50 Messages:**
- Only the most recent 50 messages are loaded on page join.
- Prevents large data transfers for groups with extensive history.
- Users can scroll to see older messages (future enhancement: lazy loading).

**Optimized Query:**
- Uses descending order with LIMIT, then ascending for chronological display.
- Avoids scanning the entire messages table.

### 16.5 Connection Reconnection Strategy

The WebSocket reconnection strategy balances responsiveness with server load:

**Exponential Backoff:**
- First retry: 1 second delay.
- Second retry: 2 seconds.
- Third retry: 4 seconds.
- Fourth retry: 8 seconds.
- Fifth (and final) retry: 10 seconds (capped).

**Maximum Retries:**
- Limited to 5 attempts to prevent infinite reconnection loops.
- After 5 failed attempts, user is notified to refresh the page.

---

## 17. TESTING THE APPLICATION

### 17.1 Manual Testing Scenarios

The following test scenarios validate the core functionality of the application.

### 17.2 Testing Admin Login

**Test Case 1: Successful Login**
1. Navigate to `/admin/login`.
2. Enter username: `admin`, password: `admin123`.
3. Click "Login".
4. **Expected:** Redirected to dashboard with success flash message "Welcome back, admin!".

**Test Case 2: Invalid Password**
1. Navigate to `/admin/login`.
2. Enter username: `admin`, password: `wrongpassword`.
3. Click "Login".
4. **Expected:** Login page re-renders with error "Invalid username or password".

**Test Case 3: Invalid Username**
1. Navigate to `/admin/login`.
2. Enter username: `nonexistent`, password: `admin123`.
3. Click "Login".
4. **Expected:** Login page re-renders with error "Invalid username or password".

**Test Case 4: Empty Fields**
1. Navigate to `/admin/login`.
2. Leave both fields empty and click "Login".
3. **Expected:** Error message "Please enter both username and password".

**Test Case 5: Already Logged In**
1. Log in successfully first.
2. Navigate to `/admin/login` again.
3. **Expected:** Redirected to dashboard (no need to login twice).

### 17.3 Testing Group Management

**Test Case 6: Create Group**
1. Log in to admin dashboard.
2. Enter a unique group name, e.g., "General Chat".
3. Add a description.
4. Click "Create Group".
5. **Expected:** Success flash message, new group appears in the list.

**Test Case 7: Duplicate Group Name**
1. Try creating a group with the same name as an existing group.
2. **Expected:** Error flash message "A group named 'General Chat' already exists."

**Test Case 8: Edit Group Name**
1. Change the name of an existing group.
2. Click "Save Changes".
3. **Expected:** Success flash message with updated name.

**Test Case 9: Empty Group Name**
1. Clear the name field of a group.
2. Click "Save Changes".
3. **Expected:** Error flash message "Group name cannot be empty."

**Test Case 10: Disable a Group**
1. Set a group's status to "Disabled".
2. Click "Save Changes".
3. **Expected:** Group is no longer visible on `/chat/groups` page.

**Test Case 11: Re-enable a Group**
1. Set the same group's status back to "Enabled".
2. Click "Save Changes".
3. **Expected:** Group appears on `/chat/groups` page again.

**Test Case 12: Delete a Group**
1. Click "Delete" on a group.
2. Confirm deletion in the dialog.
3. **Expected:** Success flash message, group disappears from list.

**Test Case 13: Access Dashboard Without Login**
1. Logout from admin.
2. Navigate to `/admin/dashboard` directly.
3. **Expected:** Redirected to `/admin/login`.

### 17.4 Testing Chat Functionality

**Test Case 14: View Groups List**
1. Navigate to `/chat/groups`.
2. **Expected:** Grid of enabled groups displayed.
3. If no groups exist, empty state message "No groups available right now."

**Test Case 15: Join a Group**
1. Click "Join Chat" on a group.
2. **Expected:** Redirected to join page with group name and description.

**Test Case 16: Enter Nickname**
1. Enter a nickname: "TestUser".
2. Click "Enter Chat Room".
3. **Expected:** Redirected to chat room.

**Test Case 17: Join Without Nickname**
1. Click "Enter Chat Room" with empty nickname.
2. **Expected:** Browser validation prevents submission (required attribute).

**Test Case 18: View Message History**
1. Join a group with existing messages.
2. **Expected:** Last 50 messages are displayed.

**Test Case 19: Empty Group**
1. Join a group with no messages.
2. **Expected:** Empty state message "No messages yet. Start the conversation by sending a message!"

**Test Case 20: Join Disabled Group**
1. Try accessing `/chat/join/{id}` for a disabled group.
2. **Expected:** 404 error page "Group not found".

### 17.5 Testing Real-Time Features

**Test Case 21: Send a Message**
1. Open two browser windows on the same chat room.
2. In window 1, type a message and send it.
3. **Expected:** Message appears in both windows immediately.

**Test Case 22: Message Formatting**
1. Send a message with special characters: `<script>alert('test')</script>`.
2. **Expected:** Characters are escaped and displayed as text, not executed.

**Test Case 23: Typing Indicator**
1. In window 1, start typing in the message input.
2. **Expected:** Window 2 shows "TestUser is typing...".

**Test Case 24: Multiple Typers**
1. Have two users type simultaneously.
2. **Expected:** Indicator shows "User1 and User2 are typing...".

**Test Case 25: Online Count**
1. Open the chat room in one window.
2. **Expected:** Online count shows "1 online".
3. Open the same room in another window.
4. **Expected:** Both windows show "2 online".

**Test Case 26: Send to Disabled Group**
1. Admin disables the group while a user is in the chat room.
2. User tries to send a message.
3. **Expected:** Error message "This group has been disabled by the admin. You cannot send messages."

### 17.6 Testing Error Handling

**Test Case 27: 404 Page**
1. Navigate to a non-existent URL, e.g., `/nonexistent`.
2. **Expected:** 404 error page with "Page not found" message.

**Test Case 28: Invalid Group ID**
1. Navigate to `/chat/join/abc` (non-numeric ID).
2. **Expected:** 404 error page with "Invalid group ID."

**Test Case 29: Server Disconnection**
1. While in a chat room, stop the Node.js server.
2. **Expected:** Connection status changes to "Disconnected".

**Test Case 30: Browser Offline**
1. While in a chat room, go offline (disable network).
2. **Expected:** Offline banner appears at the top of the page.

---

## 18. FUTURE ENHANCEMENTS

### 18.1 User Registration System

**Current Limitation:** Guests are identified only by temporary nicknames. There is no persistent user identity.

**Proposed Enhancement:**
- Implement a user registration system with email verification.
- Allow users to create permanent accounts with profiles.
- Support profile pictures, bios, and message history across sessions.
- Implement "Forgot Password" functionality with email reset.

**Technical Approach:**
- New `users` table in the database.
- JWT-based authentication alongside session management.
- Multer middleware for file upload (profile pictures).
- Nodemailer for email verification and password reset emails.

### 18.2 Private Messaging

**Current Limitation:** All messaging is group-based. No direct user-to-user communication.

**Proposed Enhancement:**
- Add private messaging between registered users.
- Implement a contacts/friends system.
- Support one-on-one video/audio calls (WebRTC).

**Technical Approach:**
- New `conversations` and `private_messages` tables.
- WebSocket rooms for private conversations.
- Contact request/accept workflow.

### 18.3 File and Image Sharing

**Current Limitation:** Only text messages are supported.

**Proposed Enhancement:**
- Allow users to upload and share files and images.
- Generate thumbnail previews for images.
- Support drag-and-drop file uploads.
- Set file size limits and scan for malware.

**Technical Approach:**
- Multer middleware for file handling.
- Cloud storage integration (AWS S3, Cloudinary).
- File type validation and size enforcement.
- Image thumbnail generation with Sharp library.

### 18.4 Message Reactions and Emoji Support

**Current Limitation:** Messages are plain text with no reactions or emoji support.

**Proposed Enhancement:**
- Add emoji picker for message input.
- Support message reactions (like, love, laugh, etc.).
- Enable rich text formatting (bold, italic, code blocks).
- Support GIF search and integration.

**Technical Approach:**
- Emoji picker library (EmojiMart or similar).
- New `reactions` table for message reactions.
- Rich text editor (TipTap, Quill, or similar).

### 18.5 Message Search and Filtering

**Current Limitation:** No way to search through message history.

**Proposed Enhancement:**
- Add full-text search across messages in a group.
- Support filtering by sender, date range, or content.
- Implement advanced PostgreSQL full-text search (tsvector/tsquery).

**Technical Approach:**
- PostgreSQL GIN index on messages content.
- Full-text search query integration.
- REST API endpoint with search parameters.

### 18.6 Rate Limiting and Spam Protection

**Current Limitation:** No protection against message flooding or spam.

**Proposed Enhancement:**
- Implement rate limiting on WebSocket message sends.
- Add spam detection using content filtering.
- Implement user blocking and reporting features.
- Add CAPTCHA for admin login.

**Technical Approach:**
- express-rate-limit middleware for HTTP routes.
- Custom rate limiter for WebSocket messages.
- Content moderation API integration.

### 18.7 Mobile Application

**Current Limitation:** The application is web-only with responsive design.

**Proposed Enhancement:**
- Develop native mobile applications for iOS and Android.
- Use React Native or Flutter for cross-platform development.
- Maintain WebSocket-based communication for real-time features.

**Technical Approach:**
- RESTful API expansion for mobile consumption.
- React Native with the same WebSocket protocol.
- Push notification integration (Firebase Cloud Messaging).

### 18.8 Push Notifications

**Current Limitation:** No notifications when the application is not open.

**Proposed Enhancement:**
- Send browser push notifications for new messages.
- Implement email notifications for offline users.
- Support customizable notification preferences.

**Technical Approach:**
- Web Push API with service workers.
- Firebase Cloud Messaging for mobile.
- Notification preferences in user settings.

### 18.9 Dark Mode Theme

**Current Limitation:** Only a light (green and white) theme exists.

**Proposed Enhancement:**
- Add dark mode with automatic detection based on system preference.
- Provide manual theme toggle in the UI.
- Ensure proper contrast and accessibility in both themes.

**Technical Approach:**
- CSS custom properties overriding for dark theme.
- `prefers-color-scheme` media query for auto-detection.
- Local storage for theme preference persistence.

### 18.10 Chat Bots and Automation

**Current Limitation:** No automated responses or bot integration.

**Proposed Enhancement:**
- Add a built-in chat bot for common commands.
- Support webhook integration for external services.
- Implement auto-moderation for inappropriate content.

**Technical Approach:**
- Bot service worker with WebSocket connection.
- Command parsing and response generation.
- Third-party API integration for external data.

---

## 19. KNOWN ISSUES AND TROUBLESHOOTING

### 19.1 Common Issues

**Issue 1: PostgreSQL Connection Error**
- **Symptoms:** Server fails to start, "error: password authentication failed" message.
- **Cause:** Incorrect DATABASE_URL in `.env` file.
- **Solution:** Verify PostgreSQL credentials and database URL. Ensure PostgreSQL service is running.

**Issue 2: Port Already in Use**
- **Symptoms:** "EADDRINUSE: address already in use" error.
- **Cause:** Another application is using port 3000.
- **Solution:** Change the PORT in `.env` file, or stop the other application using the port.

**Issue 3: Group Name Duplication**
- **Symptoms:** "A group named X already exists" error when creating a group.
- **Cause:** Another group with the same name exists.
- **Solution:** Choose a unique name for the group.

**Issue 4: WebSocket Connection Fails**
- **Symptoms:** Connection status shows "Error" in the chat room.
- **Cause:** Server is not running or network issues.
- **Solution:** Ensure the server is running. Check for firewall or proxy issues.

**Issue 5: Messages Not Appearing**
- **Symptoms:** Sent message doesn't appear in other users' browsers.
- **Cause:** Group might be disabled by admin, or WebSocket connection is broken.
- **Solution:** Check if the group is enabled. Refresh the page to reconnect.

**Issue 6: Login Redirect Loop**
- **Symptoms:** Browser keeps redirecting between login and dashboard.
- **Cause:** Session cookie issues or session store corruption.
- **Solution:** Clear browser cookies and try logging in again.

**Issue 7: Missing Dependencies**
- **Symptoms:** "Cannot find module 'express'" or similar errors.
- **Cause:** `npm install` was not run.
- **Solution:** Run `npm install` to install all dependencies.

**Issue 8: bcrypt Installation Fails**
- **Symptoms:** `npm install` fails with bcrypt compilation errors.
- **Cause:** Missing build tools or Python for node-gyp.
- **Solution:** Install build tools (Windows: `npm install --global windows-build-tools`).

### 19.2 Troubleshooting Steps

**Step 1: Check Server Status**
```bash
# Check if the server is running
curl http://localhost:3000

# Or check for Node.js process
ps aux | grep node
```

**Step 2: Verify Database Connection**
```bash
# Test database connection using psql
psql -U postgres -d santosh_chat -c "SELECT version();"
```

**Step 3: Check Logs**
```bash
# Run the server with more verbose output
npm run dev

# Check for error messages in the console
```

**Step 4: Validate Environment Variables**
```bash
# Ensure .env file exists and is correctly formatted
cat .env
```

**Step 5: Verify Dependencies**
```bash
# Check if all dependencies are installed
npm list --depth=0
```

**Step 6: Clear Session Data**
```bash
# Restart the server to clear in-memory sessions
npm run dev
```

---

## 20. GLOSSARY OF TERMS

**ACID** — A set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee reliable processing of database transactions.

**AJAX** — Asynchronous JavaScript and XML. A technique for making HTTP requests from client-side JavaScript without reloading the page.

**API** — Application Programming Interface. A set of defined rules for communication between software components.

**Bcrypt** — A password-hashing function designed to be computationally expensive, protecting against brute-force attacks.

**Cascade Delete** — A database referential action that automatically deletes child records when a parent record is deleted.

**CDN** — Content Delivery Network. A distributed network of servers that delivers content to users based on their geographic location.

**CRUD** — Create, Read, Update, Delete. The four basic operations for persistent storage.

**CSS** — Cascading Style Sheets. A stylesheet language used to describe the presentation of HTML documents.

**DOM** — Document Object Model. A programming interface for HTML documents, representing the page as nodes and objects.

**EJS** — Embedded JavaScript. A template engine that generates HTML using plain JavaScript.

**Environment Variables** — Variables whose values are set outside a program, typically through the operating system or a .env file.

**Express** — A minimal web application framework for Node.js.

**Flash Message** — A one-time notification message displayed after a user action (e.g., success or error message).

**Foreign Key** — A database constraint that establishes a link between two tables.

**Full-Duplex** — Communication in which data can flow in both directions simultaneously.

**HTTP** — Hypertext Transfer Protocol. The foundation protocol for data communication on the web.

**JSON** — JavaScript Object Notation. A lightweight data interchange format.

**JWT** — JSON Web Token. A compact, URL-safe token format for transmitting authentication data.

**Middleware** — Software that sits between the request and response in a web application, performing processing or checks.

**MVC** — Model-View-Controller. A software architectural pattern separating application logic, data, and presentation.

**Node.js** — A JavaScript runtime built on Chrome's V8 engine for server-side applications.

**npm** — Node Package Manager. The default package manager for Node.js.

**Parameterized Query** — A database query where parameters are passed separately from the SQL code, preventing SQL injection.

**Pool** — A cache of database connections maintained for reuse, improving performance.

**PostgreSQL** — An open-source, object-relational database management system.

**Primary Key** — A unique identifier for each record in a database table.

**REST** — Representational State Transfer. An architectural style for designing networked applications.

**Session** — A semi-permanent interactive information exchange between a user and a server.

**SQL** — Structured Query Language. A domain-specific language for managing relational databases.

**SQL Injection** — A security vulnerability where malicious SQL statements are inserted into input fields.

**TCP** — Transmission Control Protocol. A core protocol of the internet providing reliable, ordered data delivery.

**URL** — Uniform Resource Locator. The address of a resource on the internet.

**WebSocket** — A protocol providing full-duplex communication channels over a single TCP connection.

**XSS** — Cross-Site Scripting. A security vulnerability where attackers inject malicious scripts into web pages.

---

## 21. REFERENCES

1. **Node.js Documentation**
   - https://nodejs.org/en/docs/
   - Node.js API reference and guides.

2. **Express.js Documentation (v5)**
   - https://expressjs.com/
   - Official Express.js framework documentation.

3. **PostgreSQL Documentation**
   - https://www.postgresql.org/docs/
   - Comprehensive PostgreSQL database documentation.

4. **Node-PostgreSQL (pg) Documentation**
   - https://node-postgres.com/
   - Documentation for the pg library used for PostgreSQL connection.

5. **WebSocket Protocol (RFC 6455)**
   - https://datatracker.ietf.org/doc/html/rfc6455
   - The WebSocket protocol specification.

6. **ws Library Documentation**
   - https://github.com/websockets/ws
   - Documentation for the ws WebSocket library for Node.js.

7. **EJS Documentation**
   - https://ejs.co/
   - Embedded JavaScript templating documentation.

8. **Bcrypt Documentation**
   - https://github.com/kelektiv/node.bcrypt.js
   - Bcrypt hashing library for Node.js.

9. **Express-Session Documentation**
   - https://github.com/expressjs/session
   - Session middleware for Express.

10. **Font Awesome Icons**
    - https://fontawesome.com/
    - Icon library and documentation.

11. **Google Fonts — Inter**
    - https://fonts.google.com/specimen/Inter
    - Inter typeface by Rasmus Andersson.

12. **MDN Web Docs**
    - https://developer.mozilla.org/
    - Web technology documentation (HTML, CSS, JavaScript).

13. **CSS-Tricks Guides**
    - https://css-tricks.com/
    - CSS tutorials and guides, including Flexbox and Grid.

---

## 22. CONCLUSION

The Santosh Chat application successfully demonstrates the implementation of a real-time group communication platform using modern web technologies. The project covers a comprehensive set of features including:

- **Secure admin authentication** using bcrypt password hashing and session management.
- **Full CRUD operations** for chat group management through an intuitive dashboard.
- **Real-time messaging** delivered through WebSocket protocol with instant broadcasting.
- **Rich user experience** with typing indicators, online user counts, and connection status.
- **Persistent message storage** in PostgreSQL with efficient history retrieval.
- **Responsive design** that works across desktop, tablet, and mobile devices.
- **Security best practices** including parameterized queries, input validation, and XSS prevention.

The project follows the MVC architectural pattern with clear separation between controllers, views, and routes. The codebase is organized, well-commented, and follows consistent conventions, making it maintainable and extensible.

Through the development of this project, the following concepts were practically applied:

1. **Full-Stack Web Development:** Building both server-side and client-side components of a web application.
2. **Real-Time Communication:** Implementing WebSocket protocol for bidirectional, low-latency data transfer.
3. **Database Design:** Creating normalized relational database schemas with proper constraints and relationships.
4. **Authentication and Authorization:** Implementing secure login systems and route protection.
5. **User Interface Design:** Creating responsive, visually appealing interfaces with modern CSS techniques.
6. **Error Handling:** Implementing graceful error recovery and user-friendly error messages.
7. **Client-Server Architecture:** Understanding the interaction between browser, server, and database layers.

The project has several planned future enhancements that would transform it into a production-ready application, including user registration, private messaging, file sharing, and mobile application support. These enhancements have been documented with proposed technical approaches to guide future development.

In conclusion, Santosh Chat serves as an excellent demonstration of real-time web application development and provides a solid foundation for further expansion and learning.

---

## 23. APPENDIX A — COMPLETE PROJECT CODE LISTING

This appendix contains the complete source code for all major project files. The code is organized by module and includes inline comments explaining key functionality.

### A.1 server.js — Server Entry Point

```javascript
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const http = require('http');
const path = require('path');
const setupWebSocket = require('./src/websocket/wsHandler');

const app = express();
const server = http.createServer(app);

// Setup WebSocket
setupWebSocket(server);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'secret_fallback',
  resave: false,
  saveUninitialized: false,
}));

// Flash message middleware
app.use((req, res, next) => {
  res.locals.flash = req.session.flash || null;
  delete req.session.flash;
  res.locals.currentPath = req.path;
  next();
});

// Routes
const adminRoutes = require('./src/routes/adminRoutes');
const chatRoutes = require('./src/routes/chatRoutes');

app.use('/admin', adminRoutes);
app.use('/', chatRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('error', { 
    code: 404, 
    message: 'Page not found',
    description: 'The page you are looking for does not exist or has been moved.'
  });
});

// 500 handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).render('error', {
    code: 500,
    message: 'Server error',
    description: 'Something went wrong. Please try again later.'
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

### A.2 src/config/db.js — Database Connection

```javascript
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Connected to PostgreSQL Database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
```

### A.3 src/controllers/adminController.js — Admin Logic

```javascript
const bcrypt = require('bcrypt');
const db = require('../config/db');

exports.getLoginPage = (req, res) => {
  if (req.session && req.session.admin) {
    return res.redirect('/admin/dashboard');
  }
  res.render('admin/login', { error: null });
};

exports.postLogin = async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.render('admin/login', { error: 'Please enter both username and password' });
  }

  try {
    const result = await db.query('SELECT * FROM admins WHERE username = $1', [username]);
    if (result.rows.length === 0) {
      return res.render('admin/login', { error: 'Invalid username or password' });
    }

    const admin = result.rows[0];
    const match = await bcrypt.compare(password, admin.password);

    if (match) {
      req.session.admin = { id: admin.id, username: admin.username };
      req.session.flash = { type: 'success', message: 'Welcome back, ' + admin.username + '!' };
      return res.redirect('/admin/dashboard');
    } else {
      return res.render('admin/login', { error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).render('error', {
      code: 500,
      message: 'Server error',
      description: 'Something went wrong. Please try again later.'
    });
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
};

exports.getDashboard = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM groups ORDER BY created_at DESC');
    res.render('admin/dashboard', { admin: req.session.admin, groups: result.rows });
  } catch (error) {
    console.error('Dashboard error:', error);
    req.session.flash = { type: 'error', message: 'Could not load dashboard. Database error.' };
    res.redirect('/admin/login');
  }
};

exports.createGroup = async (req, res) => {
  const { name, description } = req.body;
  
  if (!name || !name.trim()) {
    req.session.flash = { type: 'error', message: 'Group name is required.' };
    return res.redirect('/admin/dashboard');
  }

  try {
    await db.query(
      'INSERT INTO groups (name, description, created_by, is_enable) VALUES ($1, $2, $3, $4)',
      [name.trim(), description ? description.trim() : '', req.session.admin.id, req.body.is_enable || 'y']
    );
    req.session.flash = { type: 'success', message: `Group "${name}" created successfully!` };
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Create group error:', error);
    if (error.code === '23505') {
      req.session.flash = { type: 'error', message: `A group named "${name}" already exists.` };
    } else {
      req.session.flash = { type: 'error', message: 'Failed to create group. Please try again.' };
    }
    res.redirect('/admin/dashboard');
  }
};

exports.updateGroup = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  if (!name || !name.trim()) {
    req.session.flash = { type: 'error', message: 'Group name cannot be empty.' };
    return res.redirect('/admin/dashboard');
  }

  try {
    const result = await db.query(
      'UPDATE groups SET name = $1, description = $2, is_enable = $3 WHERE id = $4 RETURNING *',
      [name.trim(), description ? description.trim() : '', req.body.is_enable || 'y', id]
    );
    if (result.rows.length === 0) {
      req.session.flash = { type: 'error', message: 'Group not found.' };
    } else {
      req.session.flash = { type: 'success', message: `Group updated to "${name}" successfully!` };
    }
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Update group error:', error);
    if (error.code === '23505') {
      req.session.flash = { type: 'error', message: `A group named "${name}" already exists.` };
    } else {
      req.session.flash = { type: 'error', message: 'Failed to update group.' };
    }
    res.redirect('/admin/dashboard');
  }
};

exports.deleteGroup = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM groups WHERE id = $1 RETURNING name', [id]);
    if (result.rows.length > 0) {
      req.session.flash = { type: 'success', message: `Group "${result.rows[0].name}" deleted.` };
    } else {
      req.session.flash = { type: 'error', message: 'Group not found.' };
    }
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Delete group error:', error);
    req.session.flash = { type: 'error', message: 'Failed to delete group.' };
    res.redirect('/admin/dashboard');
  }
};
```

### A.4 src/websocket/wsHandler.js — WebSocket Server

```javascript
const WebSocket = require('ws');
const db = require('../config/db');

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });
  const rooms = new Map();

  wss.on('connection', (ws, req) => {
    const urlParams = new URL(req.url, `http://${req.headers.host}`).searchParams;
    const groupId = urlParams.get('groupId');
    const name = urlParams.get('name');

    if (!groupId || !name) {
      ws.close();
      return;
    }

    ws.groupId = groupId;
    ws.guestName = name;

    if (!rooms.has(groupId)) {
      rooms.set(groupId, new Set());
    }
    rooms.get(groupId).add(ws);
    broadcastUserCount(groupId, rooms.get(groupId).size);

    ws.on('message', async (message) => {
      try {
        const data = JSON.parse(message);
        
        if (data.type === 'typing' || data.type === 'stop_typing') {
          const roomClients = rooms.get(groupId);
          if (roomClients) {
            const payload = JSON.stringify({ type: data.type, sender: name });
            roomClients.forEach((client) => {
              if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(payload);
              }
            });
          }
          return;
        }

        const { content } = data;
        const groupCheck = await db.query("SELECT is_enable FROM groups WHERE id = $1", [groupId]);
        if (groupCheck.rows.length === 0 || groupCheck.rows[0].is_enable === 'n') {
          const errorPayload = JSON.stringify({
            type: 'error',
            message: 'This group has been disabled by the admin. You cannot send messages.'
          });
          if (ws.readyState === WebSocket.OPEN) ws.send(errorPayload);
          return;
        }

        const result = await db.query(
          'INSERT INTO messages (group_id, sender, content) VALUES ($1, $2, $3) RETURNING *',
          [groupId, name, content]
        );
        const savedMessage = result.rows[0];

        const roomClients = rooms.get(groupId);
        if (roomClients) {
          const payload = JSON.stringify(savedMessage);
          roomClients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) client.send(payload);
          });
        }
      } catch (err) {
        console.error('Error handling WS message:', err);
      }
    });

    ws.on('close', () => {
      const roomClients = rooms.get(groupId);
      if (roomClients) {
        roomClients.delete(ws);
        if (roomClients.size === 0) {
          rooms.delete(groupId);
        } else {
          broadcastUserCount(groupId, roomClients.size);
        }
      }
    });
  });

  function broadcastUserCount(groupId, count) {
    const roomClients = rooms.get(groupId);
    if (!roomClients) return;
    const payload = JSON.stringify({ type: 'user_count', count });
    roomClients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) client.send(payload);
    });
  }

  return wss;
};
```

---

## 24. APPENDIX B — DATABASE SQL SCHEMA

### B.1 Complete Database Setup Script

```sql
-- =====================================================
-- SANTOSH CHAT DATABASE SCHEMA
-- PostgreSQL Database Setup Script
-- =====================================================

-- Step 1: Create the database
-- Run this command as a PostgreSQL superuser
-- CREATE DATABASE santosh_chat;

-- Step 2: Connect to the database
-- \c santosh_chat;

-- =====================================================
-- Table: admins
-- Stores administrator account information
-- =====================================================
CREATE TABLE admins (
  id         SERIAL PRIMARY KEY,
  username   VARCHAR(100) UNIQUE NOT NULL,
  password   VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- Table: groups
-- Stores chat group information
-- =====================================================
CREATE TABLE groups (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(150) UNIQUE NOT NULL,
  description TEXT,
  is_enable   CHAR(1) DEFAULT 'y' CHECK (is_enable IN ('y', 'n')),
  created_by  INT REFERENCES admins(id),
  created_at  TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- Table: messages
-- Stores individual chat messages
-- =====================================================
CREATE TABLE messages (
  id         SERIAL PRIMARY KEY,
  group_id   INT REFERENCES groups(id) ON DELETE CASCADE,
  sender     VARCHAR(100) NOT NULL,
  content    TEXT NOT NULL,
  sent_at    TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- Indexes for performance
-- =====================================================
CREATE INDEX idx_messages_group_id ON messages(group_id);
CREATE INDEX idx_messages_sent_at ON messages(sent_at DESC);
CREATE INDEX idx_groups_created_by ON groups(created_by);
CREATE INDEX idx_groups_is_enable ON groups(is_enable);

-- =====================================================
-- Insert default admin user
-- Password: admin123 (bcrypt hashed)
-- =====================================================
INSERT INTO admins (username, password)
VALUES ('admin', '$2b$10$<your_bcrypt_hash_here>');

-- =====================================================
-- Verify the setup
-- =====================================================
SELECT 'Database setup complete!' AS status;
SELECT COUNT(*) AS admin_count FROM admins;
```

---

## 25. APPENDIX C — PACKAGE DEPENDENCIES

### C.1 package.json

```json
{
  "name": "santosh_cahtting_app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcrypt": "^6.0.0",
    "dotenv": "^17.4.2",
    "ejs": "^5.0.2",
    "express": "^5.2.1",
    "express-session": "^1.19.0",
    "pg": "^8.21.0",
    "ws": "^8.21.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
}
```

### C.2 Dependency Descriptions

| Package | Version | Type | Purpose |
|---------|---------|------|---------|
| express | ^5.2.1 | Production | Web framework for HTTP routing and middleware |
| ejs | ^5.0.2 | Production | Template engine for server-side HTML rendering |
| pg | ^8.21.0 | Production | PostgreSQL client for database connectivity |
| ws | ^8.21.0 | Production | WebSocket server and client implementation |
| bcrypt | ^6.0.0 | Production | Password hashing and verification |
| express-session | ^1.19.0 | Production | Session management middleware |
| dotenv | ^17.4.2 | Production | Environment variable loading from .env file |
| nodemon | ^3.1.14 | Development | Auto-restart server on file changes |

---

<div align="center">

**END OF PROJECT DOCUMENTATION**

---

*Santosh Chat — A Real-Time Group Chat Application*

*College Project Documentation — 2026*

*Built with Node.js, Express, PostgreSQL, WebSocket, and EJS*

</div>
