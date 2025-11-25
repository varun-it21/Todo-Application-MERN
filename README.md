# 📌 TODO Application – MERN Stack

A fully functional **TODO Application** built using the **MERN stack**:  
**MongoDB**, **Express.js**, **React.js**, and **Node.js**.

This project supports complete **CRUD operations**, features a modern responsive UI, and includes clean backend APIs.

---

## 📁 Project Structure

Todo-Application-MERN/
│
├── todo-backend/ # Backend (Node.js + Express + MongoDB)
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
│
└── todo-frontend/ # Frontend (React.js)
├── src/
├── public/
├── package.json
└── README.md

yaml
Copy code

---

## 🚀 Features

### ✔ Backend (Node + Express + MongoDB)
- Create Todo  
- Read All Todos  
- Update Todo  
- Delete Todo  
- RESTful JSON API  
- Mongoose schema validation  
- CORS enabled  

### 🎨 Frontend (React)
- Add tasks (title + description)  
- Edit tasks inline  
- Delete tasks  
- Modern Bootstrap UI  
- Fully responsive layout  

---

## ⚙️ Tech Stack

### **Frontend**
- React.js  
- Bootstrap  
- Fetch API / Axios  

### **Backend**
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/varun-it21/Todo-Application-MERN.git
cd Todo-Application-MERN
🖥 Backend Setup
bash
Copy code
cd todo-backend
npm install
node server.js
Backend will run at:
👉 http://localhost:8000

💻 Frontend Setup
bash
Copy code
cd todo-frontend/myapp
npm install
npm start
Frontend will run at:
👉 http://localhost:3000

🔗 API Endpoints
Method	Endpoint	Description
GET	/todos	Get all todos
POST	/todos	Add new todo
PUT	/todos/:id	Update todo
DELETE	/todos/:id	Delete todo

📝 Folder Explanation
todo-backend
Contains Express server, routes, MongoDB models, and API logic.

todo-frontend
React UI with Bootstrap styling and API integration.

