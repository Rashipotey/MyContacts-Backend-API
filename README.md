# MyContacts Backend API

## Overview
The `mycontacts-backend-api` is a Node.js Express-based RESTful API for managing contacts. It includes user authentication, JWT token-based authorization, and full CRUD operations for contact management. Users can register, log in, and manage their contacts through protected routes.

## Project Introduction & Setup
This API serves as the backend for a contact management application where users can:
- Register and log in
- Manage (create, read, update, delete) their contacts
- Secure routes with JWT authentication
- Use Postman or browser to test the api.

The API follows REST conventions and uses MongoDB for data storage.

### Setup Process
1. **Create an Express Server**
   The project begins by setting up an Express server to handle HTTP requests.
   
2. **Contacts CRUD Routes**
   The API has routes for creating, reading, updating, and deleting contacts, ensuring users can fully manage their contact information.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (or MongoDB Atlas for cloud database)

### Steps to Install
1. Clone the repository:

   ```bash
   git clone https://github.com/Rashipotey/mycontacts-backend-api.git
   cd mycontacts-backend-api

# Install dependencies:
npm install
Create a .env file in the root directory and add your environment variables:

# Protecting Routes
Routes that require authentication (such as contacts management) are protected by JWT tokens. A middleware verifies the JWT on each request, ensuring only logged-in users can access these routes.

# Mongoose Schemas
User Schema: Stores user information including email, password (hashed), and JWT authentication.

# Work Flow 
![API Workflow](./assets/flow%20diagram.png)
