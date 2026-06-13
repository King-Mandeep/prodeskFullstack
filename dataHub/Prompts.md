# Prompts.md

This document records the development decisions and implementation planning followed during Sprint 09.

---

## Initial Project Planning

Objective was to build a backend REST API server capable of performing CRUD operations for a blog resource.

Key decision:

Instead of writing all logic inside a single server file, separate the project into multiple layers.

Planned architecture:

* Server layer
* Routes layer
* Controller layer
* Data storage layer

---

## Server Architecture Decision

The initial Express server was configured to listen on port 5000.

Instead of defining all endpoints directly in server.js, routes were moved to a dedicated route file.

Reason:

This keeps server initialization separate from request handling logic.

---

## REST Endpoint Planning

Five standard REST endpoints were identified.

Required endpoints:

* GET /posts
* GET /posts/:id
* POST /posts
* PUT /posts/:id
* DELETE /posts/:id

Initial implementation used static JSON responses to verify route connectivity before implementing actual logic.

---

## Data Storage Design

Database integration was intentionally avoided because the sprint required local in-memory storage only.

Decision:

Use a dedicated JavaScript array as temporary storage.

Created:

blogStore.js

Reason:

Separating storage logic makes the structure cleaner than declaring variables inside the main server file.

---

## Controller Architecture

Instead of writing route logic directly inside the route definitions, controllers were introduced.

Created controller functions for:

* createPost
* getAllPosts
* getPostById
* updatePost
* deletePost

Reason:

This makes route definitions cleaner and improves maintainability.

---

## CRUD Logic Implementation

POST

* Read request body
* Create new object
* Generate unique ID using Date.now()
* Push object into array

GET

* Return full array of stored posts

GET by ID

* Find matching object using route parameter

PUT

* Find existing object
* Replace updated values

DELETE

* Find matching object
* Remove from array

---

## Testing Process

All endpoints were tested using Postman.

Testing sequence:

1. Create a new post
2. Retrieve all posts
3. Retrieve single post
4. Update existing post
5. Delete existing post

Additional test performed:

Attempting invalid ID lookup to verify error handling.

---

## Code Organization Decisions

Final structure used:

* Separate route file
* Separate controller file
* Separate data storage file

Avoided writing all logic inside one file.

Reason:

Cleaner project organization and easier debugging.

---

## Final Verification

Verified:

* Server starts successfully
* All endpoints respond correctly
* CRUD operations modify in-memory storage correctly
* API tested through Postman
* Ready for deployment

---

## Closing Notes

The focus during development was understanding backend request flow and keeping the codebase modular instead of building everything inside a single Express server file.
