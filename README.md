<div align="center">

# 📺 TV Series Tracker

A full-stack **TV Series Tracker** application built with a **Node.js admin backend** and a **React frontend**.  
The project allows users to track TV series progress, calculate dynamic scores, and manage series and production companies through a dedicated admin panel.


[![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-Framework-lightgrey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.txt)

> **Admin App (Backend + Admin UI)**  
> https://tv-series-tracker.onrender.com  
>
> **TV Tracker (Frontend App)**  
> https://tv-series-tracker-two.vercel.app

</div>


## 🍿 Overview

The **TV Series Tracker** helps users keep track of TV shows they are watching and ranks them using a **custom scoring system**.

The project is split into **two applications**:

### 🔧 Admin App (Node.js + Express)
- Manages **TV series** and **production companies**
- Provides both:
  - An **admin dashboard UI**
  - A **REST-style API** consumed by the frontend

### 🎨 TV Tracker App (React)
- Public-facing React application
- Fetches data from the admin app APIs
- Displays series progress, ratings, and calculated scores

This separation mimics a **real production setup**, where a backend API serves multiple clients.

## ✨ Features

### 📊 TV Tracker (React App)
- View all tracked TV series
- Track **watch progress (%)**
- Display **IMDb rating**
- Calculate a **dynamic score** based on:
  - Watch progress
  - IMDb rating
  - Next-episode rating
- Smooth UI updates and animations
- Responsive, clean layout

### 🛠️ Admin App (Node.js)
- Add, edit, and delete TV series
- Manage production companies
- Server-side rendered admin UI using **Pug**
- API endpoints for frontend consumption
- MongoDB-backed persistent storage

## ⚙️ Tools & Technologies

### Backend (Admin App)
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Pug** (server-side templates)
- **REST-style APIs**

### Frontend (TV Tracker)
- **React**
- **Axios**
- **Vite**
- **CSS** (animations & layout)

### Deployment
- **Render** - Admin app & API
- **Vercel** - React frontend
- **MongoDB Atlas** - Database

## 🗂️ Project Structure

```
TV_Series_Tracker/
│
├── admin-app/                  # Node.js Admin App & API
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # Express routes (UI+API)
│   ├── views/                  # Pug templates
│   ├── public/                 # CSS and static assets
│   ├── server.js               # Backend entry point
│   └── package.json
│
├── tv-tracker/                 # React Frontend App
│   ├── src/
│   │   ├── components/         # UI components
│   │   ├── pages/              # Page-level components
│   │   ├── config/             # API configuration
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── README.md                   # Project documentation
└── LICENSE                     # MIT License
```

---

## 🔌 API Communication

The **React app communicates exclusively with the deployed admin app API**.

Example endpoints:
- `GET /admin/series/api/allSeries`
- `POST /admin/series/api/addSeries`
- `POST /admin/series/api/updateSeries`
- `POST /admin/series/api/deleteSeries`
- `GET /admin/companies/api/allCompanies`

CORS is enabled to allow secure cross-origin access.


## 📈 Benefits

- Demonstrates **real-world full-stack architecture**
- Clean separation between frontend and backend
- Practice with **REST APIs and React data fetching**
- MongoDB data modeling with relational references
- Deployment across multiple platforms
- Scalable foundation for future enhancements


## 🧠 Lessons Learned

- Designing APIs for multiple consumers
- Structuring Express apps for both UI and API use
- Managing shared data across separate applications
- Handling async data flow in React
- Deploying and debugging cross-origin applications
- Improving UX through animations and real-time updates


## 🚀 Future Enhancements

- Authentication for admin-only routes
- Role-based access control
- Public vs admin API separation
- Advanced filtering and sorting
- UI skeleton loaders and pagination
- Analytics-based feature insights


## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE.txt) file for details.
