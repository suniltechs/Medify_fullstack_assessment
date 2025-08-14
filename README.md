# Product Management App - Transform Your Product Workflow

A modern full-stack application for managing products with React frontend and Node.js/Express backend.

<img src="./Website Screenshots/1.png">

## Features

- **Product Management**
  - Create, read, update, and delete products
  - Product categorization and inventory tracking
  - Image uploads for products
  - Search and filter functionality

- **Modern UI**
  - Responsive design with Tailwind CSS
  - Animations with Framer Motion
  - Interactive components

- **Backend API**
  - RESTful API with Express.js
  - MySQL database with Sequelize ORM
  - File upload handling

## Technologies Used

### Frontend
- React 18
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- React Router (navigation)
- Axios (HTTP client)

### Backend
- Node.js
- Express.js
- MySQL
- Sequelize (ORM)
- Multer (file uploads)
- Dotenv (environment variables)

## Project Structure
```
product-management-app/
├── backend/ # Backend server code
│ ├── config/ # Database configuration
│ ├── controllers/ # Route controllers
│ ├── middleware/ # Custom middleware
│ ├── models/ # Sequelize models
│ ├── routes/ # API routes
│ ├── uploads/ # Uploaded images storage
│ ├── app.js # Express app setup
│ ├── .env # Environment variables
│ └── server.js # Server entry point
│
├── frontend/ # Frontend React app
│ ├── public/ # Static assets
│ ├── src/
│ │ ├── assets/ # Images, styles
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Page components
│ │ ├── services/ # API service layer
│ │ ├── App.jsx # Main app component
│ │ └── main.jsx # App entry point
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── vite.config.js # Vite configuration
└── README.md # This file
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
  </div>

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MySQL (v8+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/suniltechs/medify-fullstack-assessment.git
   cd medify-fullstack-assessment
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
    DB_NAME=product_management
    PORT=5000
    ```
    
  ### Database Setup
  
  1. Create a MySQL database:

     ```
     CREATE DATABASE product_management;
     USE product_management;

     CREATE TABLE products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(255) NOT NULL,
        stockQuantity INT NOT NULL,
        availability ENUM('in-stock', 'out-of-stock', 'pre-order', 'discontinued') NOT NULL DEFAULT 'in-stock',
        price DECIMAL(10,2) NOT NULL,
        image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
     ```
### Running the Application

  1. Start the backend server:
     
     ```
     cd backend
     npm run dev
     ```
2. Start the frontend development server:

   ```
   cd ../frontend
   npm run dev
   ```
3. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

### Deployment

1. Backend
   
   - Set up a MySQL database on your hosting provider
   - Configure environment variables in production
   - Use PM2 or similar process manager for Node.js
     
2. Frontend
   1. Build the production bundle:
      
      ```
      npm run build
      ```
   2. Deploy the dist folder to your hosting provider (Netlify, Vercel, etc.)
  
### Contributing

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

   




     
     


