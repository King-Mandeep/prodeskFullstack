# Fullstack Blog App

A fullstack MERN application built as part of Sprint 11 engineering deliverable.

The objective of this project was to integrate a React frontend application with an existing Express + MongoDB backend API and create a complete fullstack pipeline for performing CRUD operations.

The project demonstrates communication between frontend, backend server, and cloud database.

---

## Live Demo

https://prodesk-fullstack.vercel.app/

---


## Features Implemented

### Phase 1

* Connected React frontend with backend REST API
* Replaced dummy frontend data with real API data
* Used useEffect for initial API fetching
* Configured CORS middleware in Express backend for frontend communication

### Phase 2

* Created a frontend form for creating new blog posts
* Sent POST requests from frontend to backend API
* Stored data inside MongoDB Atlas cloud database
* Implemented delete functionality from frontend UI
* Added loading state while fetching data
* Added error state when API connection fails

---

## Tech Stack

Frontend

* React (Vite)
* Axios
* CSS

Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

## Project Structure

```text
project-root/

backend/

   src/
      config/
      models/
      controllers/
      routes/
      server.js


frontend/

   src/
      App.jsx
      App.css
      main.jsx
```

---

## Installation

Clone repository

```bash
git clone <repository-url>
cd project-folder
```

Backend setup

```bash
npm install
npm run dev
```

Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## API Endpoints Used

Get all posts

```http
GET /posts
```

Create post

```http
POST /posts
```

Delete post

```http
DELETE /posts/:id
```

---

## Workflow

Application flow

```text
Frontend React App
       ↓
Axios API Requests
       ↓
Express Backend Server
       ↓
MongoDB Atlas Database
       ↓
Data Persistence
```

---

## Testing

Backend API tested using Postman.

Frontend testing included:

* Data fetching from API
* Creating new posts
* Deleting posts
* Loading state testing
* Error state testing when backend unavailable

---

## Learning Outcomes

This project helped in understanding:

* Frontend and backend integration
* API communication using Axios
* CORS handling in Express
* MongoDB persistence in fullstack applications
* State management for async operations
* Managing loading and error UI states

---

## Author

Mandeep Tiwari
