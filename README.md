# 🐳 Project 4 — Docker Compose 3-Tier Application

## 📌 Overview
A fully containerized 3-tier web application built and 
deployed using Docker Compose.
All three tiers run as separate containers and communicate 
through a shared Docker network.

---

## 🏗️ Architecture

Browser
↓
Nginx (Port 80) — Reverse Proxy
↓
Frontend (Port 8080) — HTML + Tailwind CSS
↓
Backend (Port 5000) — Node.js + Express API

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, Tailwind CSS |
| Backend | Node.js, Express |
| Reverse Proxy | Nginx |
| Containerization | Docker, Docker Compose |

---

## ⚙️ How to Run

### Prerequisites
- Docker installed
- Docker Desktop running

### Step 1 — Clone the repo
```bash
git clone https://github.com/Kajal429/Docker-Decompose-3-tier-application.git
cd Docker-Decompose-3-tier-application
```

### Step 2 — Start all containers
```bash
docker compose up -d
```

### Step 3 — Open in browser
Frontend → http://localhost:8080
Backend → http://localhost:5000
Nginx → http://localhost:80


### Step 4 — Stop all containers
```bash
docker compose down
```

## 🐳 Docker Commands Used

| Command | What it does |
|---|---|
| `docker compose up -d` | Start all containers in background |
| `docker compose down` | Stop and remove all containers |
| `docker compose ps` | Check status of all containers |
| `docker compose logs` | See output from all containers |
| `docker images` | List all Docker images |
| `docker network ls` | List Docker networks |



























