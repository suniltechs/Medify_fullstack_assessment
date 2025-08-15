# 🚀 ProductHub - Modern Product Management System

![ProductHub Banner](./Website%20Screenshots/1.png)

A sleek, full-stack product management solution with React-powered frontend and Node.js/Express backend. Built for efficiency and scalability.

## ✨ Key Features

### 🛠️ Product Operations
| Feature | Description |
|---------|-------------|
| **CRUD Operations** | Full product lifecycle management |
| **Smart Inventory** | Real-time stock tracking with status indicators |
| **Media Handling** | Drag & drop image uploads with preview |
| **Advanced Search** | Filter by name, category |

### 🎨 UI/UX Highlights
- **Responsive Design**: Flawless on all devices
- **Motion UI**: Smooth animations with Framer Motion

### ⚙️ Backend Power
- MySQL database with Sequelize ORM
- Optimized file upload handling
- Rate limiting and security middleware

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | Component-based UI |
| Vite | Blazing fast builds |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Interactive animations |
| React Query | Smart data fetching |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js 20 | Runtime environment |
| Express.js | API framework |
| MySQL 8 | Relational database |
| Sequelize | Type-safe ORM |
| Multer | Secure file uploads |

## 📁 Project Structure

```bash
producthub/
├── backend/          # API Server
│   ├── config/       # DB configurations
│   ├── controllers/  # Business logic
│   ├── middleware/   # Auth & validation
│   ├── models/       # Database models
│   ├── routes/       # API endpoints
│   └── services/     # Core business logic
│
├── frontend/         # React Application
│   ├── public/       # Static assets
│   └── src/
│       ├── assets/   # Global styles & images
│       ├── components/ # Reusable UI
│       ├── features/  # Feature-based modules
│       ├── hooks/     # Custom React hooks
│       └── utils/     # Helpers & constants
│
└── docs/             # Documentation assets
```

## 📸 App Screenshots
  <div align="center"> 
     <img src="./Website Screenshots/1.png" width="45%" alt="Desktop View"> 
     <img src="./Website Screenshots/2.jpeg" width="45%" alt="Mobile View"> 
     <img src="./Website Screenshots/3.png" width="45%" alt="Search Results"> 
     <img src="./Website Screenshots/4.png" width="45%" alt="Movie Details">
     <img src="./Website Screenshots/5.png" width="45%" alt="Movie Details">
     <img src="./Website Screenshots/6.png" width="45%" alt="Movie Details">
     <img src="./Website Screenshots/7.png" width="45%" alt="Movie Details">
     <img src="./Website Screenshots/8.png" width="45%" alt="Movie Details">
     <img src="./Website Screenshots/9.png" width="45%" alt="Movie Details">
     <img src="./Website Screenshots/10.png" width="45%" alt="Movie Details">
     <img src="./Website Screenshots/mobile_mode.png" width="90.5%" alt="Movie Details">
    
  </div>

## 🚀 Quick Start

### Prerequisites

- Node.js (v16+ recommended)
- MySQL (v8+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/suniltechs/Medify_fullstack_assessment.git
   cd Medify_fullstack_assessment
   ```
2. Install backend dependencies:

   ```
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   
   ```
   cd ../frontend
   npm install
   ```
4. Set up environment variables:

  - Create .env file in the root directory based on .env.example
  - Configure your MySQL database credentials

    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD= // Your MySql Password Here
    DB_NAME=product_manager
    PORT=5000
    ```
    
  ### Database Setup
  
1. Create a MySQL database:

   ```
    CREATE DATABASE IF NOT EXISTS product_manager;
    USE product_manager;
    
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(255) NOT NULL,
      stockQuantity INT NOT NULL,
      availability ENUM('in-stock', 'out-of-stock', 'pre-order', 'discontinued') NOT NULL DEFAULT 'in-stock',
      price DECIMAL(10, 2) NOT NULL,
      image VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      CHECK (stockQuantity >= 0),
      CHECK (price >= 0)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
   ```
     
### Running Locally

  1. Running Locally
     ```
     # Start backend (http://localhost:5000)
       npm run dev
        
     # Start frontend (http://localhost:5173)
       npm run dev
     ```
  2. Open your browser and navigate to:
  
     ```
     http://localhost:5173
     ```

### 🌐 Deployment

  #### Backend
 
 - Set up a MySQL database on your hosting provider
 - Configure environment variables in production
 - Use PM2 or similar process manager for Node.js
     
  #### Frontend
 1. Build the production bundle:
    
    ```
    npm run build
    ```
 2. Deploy the dist folder to your hosting provider (Netlify, Vercel, etc.)
  
### 🤝 Contributing

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### Developer

Developed by [Sunil Sowrirajan](https://www.linkedin.com/in/sunil-sowrirajan-40548826b/)

[![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?style=for-the-badge&logo=github)](https://github.com/suniltechs)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunil-sowrirajan-40548826b/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Website-green?style=for-the-badge)](https://sunilsowrirajan.netlify.app/)

   




     
     


