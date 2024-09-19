# React + Vite

CRUD Application

Overview

This is a CRUD (Create, Read, Update, Delete) application built with React.js and Bootstrap. The application allows users to manage a list of items with the ability to add, view, edit, and delete entries.
Currently, two official plugins are available:



Features

Create: Add new items to the list.
Read: View a list of items with details.
Update: Edit existing items.
Delete: Remove items from the list.

Technologies Used

React.js: A JavaScript library for building user interfaces.
Bootstrap: A CSS framework for developing responsive and mobile-first websites.
Axios: A promise-based HTTP client for making API requests.
React Router: For handling routing in the application.
json-server: Provides a quick way to create a RESTful API for testing and prototyping.

Installation

1.Clone the repository

git clone https://github.com/robandivya/crud-app.git
cd crud-app
2.Install dependencies
npm install
3.Run the mock server
npm run server
4.Run the application
npm run dev

Usage
Create: Use the form on the homepage to add a new item. Fill in the required fields and submit.
Read: View the list of items on the main page. Items will be displayed in a table format.
Update: Click the "Edit" button next to an item to update its details. Modify the fields and save the changes.
Delete: Click the "Delete" button next to an item to remove it from the list. A confirmation dialog will appear before deletion.

API Endpoints
The application uses json-server for the backend API with the following endpoints:

GET /items: Retrieve the list of items.
POST /items: Create a new item.
PUT /items/: Update an existing item.
DELETE /items/: Delete an item.

Contributing
Contributions are welcome! Please submit issues, create pull requests, or provide feedback.

License
This project is licensed under the MIT License - see the LICENSE file for details.





- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
