# Gym Database

This project contains a MongoDB database structure for a gym management system.

## Folder Structure

- database/
  - seed.js       → Inserts initial data into MongoDB
  - queries.js    → Sample queries for filtering, sorting, etc.
  - schema.md     → Database schema explanation

## How to Run

1. Make sure MongoDB is running
2. Navigate to the project folder
3. Run:

   mongosh database/seed.js

4. Enter mongosh to query the database:

   mongosh

## Notes

- seed.js only inserts data
- Running seed.js again may duplicate data unless cleared
