# 💻 Healthcare Frontend

This is the **React.js frontend** for the Healthcare Management System. It connects to a Django REST API backend and provides a secure, user-friendly interface for managing patients, doctors, and their assignments.

---

## 🚀 Features

- 🔐 JWT Authentication (Login/Register)
- 🧑‍⚕️ Manage Patients & Doctors (Add, List, Delete)
- 🔁 Assign/Unassign Doctors to Patients
- 🔒 Protected Routes using `ProtectedRoute`
- 🍞 Toast Notifications for user feedback
- ❗ Token Expiry Handling (auto redirect to login)
- 🎨 Responsive design using Tailwind CSS

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Axios**
- **Tailwind CSS (via CDN)**
- **React Toastify**
- **JWT (via localStorage)**

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/healthcare-frontend.git
cd healthcare-frontend
```

### 2. Install dependencies

```bash
npm install
```

---

## ▶️ Running the App

```bash
npm start
```

App will run at:  
`http://localhost:3000/`

---

## 🔗 Connect to Backend

Make sure your backend is running at:

```txt
http://127.0.0.1:8000/api/
```

And CORS is enabled for `http://localhost:3000` in your Django settings.

---

## 🔒 Authentication Flow

- On login, a JWT `access_token` is stored in `localStorage`
- Token is attached to every API request using Axios interceptors
- Expired tokens trigger automatic logout and redirection to login
- Protected pages are guarded with a `ProtectedRoute` component

---

## 📂 Project Structure

```bash
📦 src
├── components/
│   └── Navbar.js
│   └── ProtectedRoute.js
├── pages/
│   └── Login.js
│   └── Register.js
│   └── Dashboard.js
│   └── Patients.js
│   └── Doctors.js
│   └── Mappings.js
├── services/
│   └── api.js
├── App.js
└── index.js
```

---

## 🔗 Related Repositories

- 🛠️ Backend: [healthcare-backend](https://github.com/alamayaz/healthcare-backend)

---

## 🙌 Author

Built by **Ayaz Alam**  
Frontend powered by React + Tailwind ✨  
Feel free to fork, star ⭐, and contribute!
