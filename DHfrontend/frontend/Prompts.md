# Prompts.md

This document records development planning and implementation decisions followed during Sprint 11.

---

## Project Understanding

The sprint objective was to integrate previously built backend and frontend systems into one connected fullstack application.

Previous backend project already had:

* Express server
* MongoDB Atlas connection
* REST API routes
* CRUD operations

The missing part was frontend integration.

Decision:

Instead of modifying previous unrelated frontend work, create a small dedicated frontend application focused only on blog management.

---

## Architecture Planning

Final architecture planned:

```text
React Frontend
      ↓
Axios HTTP Requests
      ↓
Express Backend
      ↓
MongoDB Atlas Cloud Database
```

Objective was to establish a complete MERN stack data pipeline.

---

## Frontend Setup Decision

A new Vite React project was created inside the existing backend project.

Reason:

Previous frontend projects were unrelated to the backend blog API structure.

Creating a smaller dedicated frontend reduced unnecessary complexity.

Installed dependencies:

* React
* Axios

---

## Backend Integration

Backend already existed from previous sprint.

No major backend architecture changes were required.

Only change introduced:

CORS middleware configuration.

Installed:

cors package

Reason:

Frontend and backend run on different ports and browser blocks cross-origin requests by default.

Configured backend to allow frontend origin.

---

## Data Fetching Logic

Initial requirement was replacing dummy frontend data with live API data.

Decision:

Use useEffect to fetch data immediately after component render.

API used:

GET /posts

Response data stored inside local React state.

Reason:

This allows frontend to display real database content instead of hardcoded objects.

---

## Create Post Functionality

Requirement:

Frontend should create new database documents.

Created a simple form with:

* title input
* content textarea
* submit button

Logic used:

On form submission, send POST request to backend.

API used:

POST /posts

After successful response:

Update local state immediately instead of refreshing page.

Reason:

Immediate UI updates improve frontend responsiveness.

---

## Delete Post Functionality

Requirement:

Delete documents directly from frontend.

Each post card included a delete button.

API used:

DELETE /posts/:id

After successful deletion:

Filter deleted post from React state.

Reason:

Keeps frontend synchronized with backend without additional fetch request.

---

## State Management Decisions

Sprint required handling asynchronous UI states.

Implemented:

Loading state

Shows temporary loading message while API request is pending.

Error state

Displays error message when backend connection fails.

Reason:

Application should provide user feedback during failed network requests.

---

## UI Decisions

No CSS framework was used.

Simple custom CSS styling was added.

Design focused on:

* clean layout
* readable cards
* simple form structure
* minimal styling

Reason:

The sprint focus was system integration rather than frontend design complexity.

---

## Final Verification

Verified successfully:

* Frontend fetches data from backend
* Backend stores data in MongoDB Atlas
* New posts are created successfully
* Posts are deleted successfully
* Loading state works during API fetch
* Error state appears when backend unavailable

---

## Final Result

Completed deliverable includes:

Phase 1 completed

* API integration
* useEffect data fetching
* CORS configuration

Phase 2 completed

* Create post from frontend
* Delete post from frontend
* Loading state
* Error handling

Phase 3 intentionally skipped.

Reason:

Primary sprint objectives were completed successfully.
