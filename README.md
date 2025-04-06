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
- 🐳 Docker containerization support

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Axios**
- **Tailwind CSS (via CDN)**
- **React Toastify**
- **JWT (via localStorage)**
- **Docker**

---

## 📦 Installation

### Option 1: Standard Installation

#### 1. Clone the repo

```bash
git clone https://github.com/yourusername/healthcare-frontend.git
cd healthcare-frontend
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Set up environment variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` to set your API URL:

```
REACT_APP_API_URL=http://127.0.0.1:8000/api/
```

### Option 2: Docker Installation

#### 1. Clone the repo

```bash
git clone https://github.com/yourusername/healthcare-frontend.git
cd healthcare-frontend
```

#### 2. Set up environment variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` to set your API URL:

```
REACT_APP_API_URL=http://your-backend-host:8000/api/
```

If running on the same host, use:
- For Linux/Mac: `http://host.docker.internal:8000/api/`
- For Docker Compose networks: Use the service name, e.g., `http://healthcare-backend:8000/api/`

#### 3. Build and run with Docker Compose

```bash
docker-compose up -d
```

---

## ▶️ Running the App

### Standard Method

```bash
npm start
```

App will run at:  
`http://localhost:3000/`

### Docker Method

```bash
docker-compose up -d
```

App will run at:  
`http://localhost:3000/`

---

## 🔗 Connect to Backend

Make sure your backend is running and accessible from the frontend. Update the `.env` file with the correct API URL.

```env
REACT_APP_API_URL=http://127.0.0.1:8000/api/
```

And ensure CORS is enabled for your frontend URL in your Django settings.

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
