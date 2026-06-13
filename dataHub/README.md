# Data Hub API

Data Hub API is a backend REST API project built using Node.js and Express.
The project focuses on understanding REST architecture, route handling, and CRUD operations using an in-memory data store.

This project was built as part of Sprint 09 (Backend Architecture Track).

---

## Live Deployment

https://prodeskfullstack.onrender.com

---

## Demo Video

https://drive.google.com/file/d/1Xg9a4MvBfwq5u0oBUMS1qyTmpbZt2bSr/view?usp=sharing

---

## Features

### REST API Endpoints

Implemented five standard REST endpoints for blog management.

* GET /posts → Retrieve all blog posts
* GET /posts/:id → Retrieve a single post by ID
* POST /posts → Create a new blog post
* PUT /posts/:id → Update an existing blog post
* DELETE /posts/:id → Delete a post by ID

---

## Data Storage

The application uses an in-memory JavaScript array to simulate a temporary database.

Example structure:

```json
{
  "id": 171234567890,
  "title": "Learning Express",
  "content": "Understanding backend APIs"
}
```

Since no database is connected, data resets when the server restarts.

---

## Tech Stack

* Node.js
* Express.js
* JavaScript (ES Modules)

---

## Project Structure

```text
data-hub-api/

src/

 ├── controllers/
 │      └── postController.js
 │
 ├── routes/
 │      └── postRoutes.js
 │
 ├── data/
 │      └── blogStore.js
 │
 └── server.js

package.json
README.md
Prompts.md
```

---

## Installation

Clone repository

```bash
git clone <repository-url>
cd data-hub-api
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Run production server

```bash
npm start
```

---

## API Testing

The endpoints were tested using Postman.

Tested operations:

* Creating a post
* Retrieving all posts
* Retrieving a single post
* Updating an existing post
* Deleting a post

---

## API Routes

### Create Post

```http
POST /posts
```

Request Body

```json
{
  "title": "Backend Learning",
  "content": "Learning Express CRUD operations"
}
```

---

### Get All Posts

```http
GET /posts
```

---

### Get Single Post

```http
GET /posts/:id
```

Example

```http
GET /posts/171234567890
```

---

### Update Post

```http
PUT /posts/:id
```

---

### Delete Post

```http
DELETE /posts/:id
```

---

## Learning Outcomes

During this project I practiced:

* Express server creation
* REST API architecture
* Route separation
* Controller separation
* CRUD operations
* Request body handling
* API testing using Postman

---

## Author

Mandeep Tiwari
