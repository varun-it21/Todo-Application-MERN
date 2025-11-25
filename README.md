📌 TODO Application – MERN Stack

A fully functional TODO Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It supports Create, Read, Update, Delete (CRUD) operations with a clean UI.

📁 Project Structure
Todo-Application-MERN/
│
├── todo-backend/       # Backend (Node.js + Express + MongoDB)
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── todo-frontend/      # Frontend (React.js)
    ├── src/
    ├── public/
    ├── package.json
    └── README.md

🚀 Features
✔ Backend (Node + Express + MongoDB)

Add Todo

Get All Todos

Update Todo

Delete Todo

REST API with JSON

CORS Enabled

🎨 Frontend (React)

Add tasks with title + description

Edit task inline

Delete task

Modern Bootstrap UI

Responsive layout

⚙️ Tech Stack
Frontend

React.js

Axios

Bootstrap

Modern responsive UI

Backend

Node.js

Express.js

MongoDB

Mongoose

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/varun-it21/Todo-Application-MERN.git
cd Todo-Application-MERN

🖥 Backend Setup
cd todo-backend
npm install
node server.js


Backend runs on:

http://localhost:8000

💻 Frontend Setup
cd todo-frontend/myapp
npm install
npm start


Frontend runs on:

http://localhost:3000

🔗 API Endpoints
Method	Endpoint	Description
GET	/todos	Get all todos
POST	/todos	Add new todo
PUT	/todos/:id	Update todo
DELETE	/todos/:id	Delete todo
