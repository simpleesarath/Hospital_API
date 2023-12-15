# Hospital_API
Hospital api fetchhing by postman
## Overview

The Hospital API is a backend application designed to manage doctors, patients, and medical reports for a hospital. It provides endpoints for user registration, login, creating medical reports, and retrieving reports.nd Notice that the name suggests that its a Hospital_API,So no need to work on UI design nd we can simply verifies the routes using postman

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Passport.js (for authentication)
- JWT (JSON Web Tokens) <hr>

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB <hr>

## Getting Started

1. Clone the repository:

   git clone https://github.com/simpleesarath/Hospital-API.git

Install dependencies:

          cd hospital-api
          npm install

2.Set up the MongoDB database:

      Create a MongoDB database and update the connection string in config/database.js.


3.Run the application:

        npm start
        The server will be running at http://localhost:8000.

4.API Endpoints

**Doctors**
POST /doctors/register: Register a new doctor.
![Screenshot (284)](https://github.com/simpleesarath/Hospital_API/assets/88574803/4ee892fe-dc03-4ccf-9a81-f1ea8c06edd4)


**Patients**
POST /patients/register: Register a new patient (requires JWT authentication).
![Screenshot (285)](https://github.com/simpleesarath/Hospital_API/assets/88574803/9b28b417-32d1-4486-a02e-65392a25c88f)

**Reports**
POST /patients/:id/create_report: Create a medical report for a patient (requires JWT authentication).
GET /patients/:id/all_report: Get all reports for a specific patient.
GET /reports/:status: Get all reports with a specific status.
![Screenshot (286)](https://github.com/simpleesarath/Hospital_API/assets/88574803/ae608b2f-8fc6-4e51-be18-0c82650b7786)

**Authentication**
POST /login: Authenticate and log in a user.
