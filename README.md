# MyContacts Backend API

## Overview
The `mycontacts-backend-api` is a Node.js Express-based RESTful API for managing contacts. It includes user authentication, JWT token-based authorization, and full CRUD operations for contact management. Users can register, log in, and manage their contacts through protected routes.

## Table of Contents
1. [Project Introduction & Setup](#project-introduction--setup)
2. [Installation](#installation)
3. [API Routes](#api-routes)
4. [User Authentication](#user-authentication)
5. [Error Handling](#error-handling)
6. [Database Setup](#database-setup)
7. [Contributing](#contributing)
8. [License](#license)

## Project Introduction & Setup
This API serves as the backend for a contact management application where users can:
- Register and log in
- Manage (create, read, update, delete) their contacts
- Secure routes with JWT authentication

The API follows REST conventions and uses MongoDB for data storage.

### Setup Process
1. **Create an Express Server**
   The project begins by setting up an Express server to handle HTTP requests.
   
2. **Thunder Client Setup**
   Thunder Client is used for testing API requests directly within Visual Studio Code.

3. **Contacts CRUD Routes**
   The API has routes for creating, reading, updating, and deleting contacts, ensuring users can fully manage their contact information.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (or MongoDB Atlas for cloud database)

### Steps to Install
1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mycontacts-backend-api.git
   cd mycontacts-backend-api
