# 🛍️ Shoppey — Full Stack E-Commerce App

A modern, full-stack e-commerce application built with **React.js** and **Node.js**. Shoppey offers a seamless shopping experience with secure authentication, cloud-based user profile image uploads, and a fully responsive design.

**Live Demo:** [https://shoppey-e-commerce-app.vercel.app](https://shoppey-e-commerce-app.vercel.app)

---

## ✨ Features

- **User Authentication** — Secure registration and login with JWT-based sessions
- **Product Listings** — Browse products with images, descriptions, and pricing
- **Shopping Cart** — Add, remove, and update items with real-time price totals
- **Cloud Image Uploads** — Product images hosted via Cloudinary
- **Search & Filter** — Find products by category, price range, and ratings
- **Responsive Design** — Works seamlessly on desktop and mobile

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — UI and state management
- **Tailwind CSS** — Utility-first styling
- **Zustand** — Global state management
- **Axios** — HTTP requests
- **React Router DOM** — Client-side routing
- **Cloudinary** — User Profile display

### Backend
- **Node.js + Express** — REST API
- **MongoDB + Mongoose** — Database
- **JWT** — Authentication
- **Cloudinary** — User Profile storage

---

## 📁 Project Structure

```
shoppey/
├── backend/
│   ├── index.mjs         # Express server entry point
│   ├── routes/           # API routes
│   ├── models/           # Mongoose models
│   └── controllers/      # Route controllers
├── src/                  # React frontend
│   ├── components/
│   ├── pages/
│   ├── store/            # Zustand store
│   └── utils/
├── vite.config.js
├── vercel.json
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB database (local or Atlas)
- Cloudinary account

### 1. Clone the Repository
```bash
git clone https://github.com/rimsha-shoukat/shoppey-E-commerce-app.git
cd shoppey-E-commerce-app
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### 4. Set Up Environment Variables

Create a `.env` file in the **root folder** (frontend):
```env
VITE_API_URL=http://localhost:5000/api
VITE_CLOUD_NAME=your_cloudinary_cloud_name
VITE_PRESET_NAME=your_cloudinary_preset_name
```

Create a `.env` file in the **backend folder**:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:5173
```

### 5. Run the App

Start the backend:
```bash
cd backend
node index.mjs
```

Start the frontend (in a new terminal):
```bash
npm run dev
```

App runs at `http://localhost:5173`

---

## ☁️ Deploying to Vercel

### Environment Variables (Vercel Dashboard)

| Variable | Where Used |
|---|---|
| `VITE_API_URL` | Frontend — set to your Vercel URL + `/api` |
| `VITE_CLOUD_NAME` | Frontend |
| `VITE_PRESET_NAME` | Frontend |
| `PORT` | Backend |
| `MONGO_URI` | Backend |
| `JWT_SECRET` | Backend |
| `CORS_ORIGIN` | Backend — set to your Vercel frontend URL |

---

## 📬 Contact

Built by **Rimsha Shoukat**

- GitHub: [@rimsha-shoukat](https://github.com/rimsha-shoukat)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/rimsha-shoukat/)

---

> Thank you for checking out Shoppey! ⭐ If you like it, consider giving it a star on GitHub.

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

Whether it's fixing a bug, improving the UI, or adding a new feature — all contributions are welcome. Feel free to open an issue first to discuss what you'd like to change!
