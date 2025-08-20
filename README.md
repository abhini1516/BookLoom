# **📖 BookLoom : Your Ultimate Online Bookstore Experience**

BookLoom is a modern, full-featured online bookstore platform designed to bring your favorite books right to your fingertips. Powered by the robust MERN stack (MongoDB, Express.js, React, Node.js), BookLoom offers a seamless and secure way to browse, order, and manage books online with convenience and confidence.

***

## **✨ Core Features**

### For Users
- **Sign Up / Log In:** Options for traditional sign-up or Google OAuth login.
- **Browse Books:** Dynamic, searchable catalog of books.
- **Cart Management:** Add or remove books with a smooth cart experience.
- **Order Placement:** Checkout using COD with phone number and address entry.
- **Order History:** View all past orders after login for easy tracking.

### For Admins
- **Book Management:** Add new books, update details, or remove listings securely.
- **Dashboard Insights:** Access key statistics and manage bookstore operations efficiently.

***

## **📂 Project Structure**

```
bookstore/
├── backend/                          # Node.js API backend
│   ├── src/
│   │   ├── books/                   # APIs and logic for book management
│   │   ├── orders/                  # Order handling and processing
│   │   ├── users/                   # User authentication and profiles
│   │   ├── middleware/              # Security and authentication middleware
│   │   └── stats/                   # Admin statistics and analytics
│   ├── .env                        # Environment configs (sensitive keys)
│   ├── index.js                    # Backend server entry point
│   └── package.json                # Backend dependencies
│
└── frontend/                         # React-based frontend
    ├── src/
    │   ├── components/              # Reusable UI components
    │   ├── pages/                   # Page-level components by feature
    │   │   ├── books/               # Book browsing and management pages
    │   │   ├── dashboard/           # Admin dashboard UI
    │   │   └── home/                # Landing and home pages
    │   ├── assets/                  # Images and static files
    │   ├── redux/                   # Application state management
    │   ├── routers/                 # Frontend routing configuration
    │   ├── context/                 # React Context API setup
    │   └── firebase/                # Firebase config for authentication
    ├── public/                      # Public assets
    ├── package.json                 # Frontend dependencies
    └── vite.config.js               # Build and bundling config
```

***

## **🛠️ Installation & Setup Guide**

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/bookloom.git
cd bookloom
```

### 2️⃣ Backend Setup  
```bash
cd backend
npm install
```

### 3️⃣ Frontend Setup  
```bash
cd ../frontend
npm install
```

### 4️⃣ Running the Application  
- Start the backend server (from the backend folder):  
```bash
npm run start
```
- Start the frontend development server (from the frontend folder):  
```bash
npm run dev
```

Open your browser and navigate to **http://localhost:5173** to explore BookLoom!

***

## **🔄 System Design Overview**

```plaintext
[Home Page]
      ↓
[User Registration / Login]
      ↓
[Secure JWT Authentication → User Dashboard]
      ↓
[Browse Books → Add to Cart]
      ↓
[Checkout → Enter Phone & Address → Place Order]
      ↓
[Order Confirmation → Order Saved to Database]
      ↓
[View Past Orders]
      ↓
[Logout]

(Admin Workflow):
[Admin Login]
      ↓
[Admin Dashboard Access]
      ↓
[Manage Books (Add/Edit/Delete)]
      ↓
[View Store Statistics]
```

***



## 🖼️ Screenshots

### Home Page  
![Home Page](https://github.com/abhini1516/BookLoom/blob/main/Screenshot%20(48).png)

### Admin Dashboard  
![Dashboard](https://github.com/abhini1516/BookLoom/blob/main/Screenshot%20(49).png)

### Add Book Page  
![Add Book](https://github.com/abhini1516/bookloom/blob/main/addbook.png)

### Checkout Page  
![Checkout](https://github.com/abhini1516/bookloom/blob/main/checkout1.png)

***

## **📄 License**

This project is licensed under the **MIT License**.

***

## **🤝 Get Involved**

Interested in contributing or improving BookLoom? You can:  
- Fork the repository and submit pull requests.  
- Report issues or bugs.  
- Suggest new features or enhancements.  
- Help improve the documentation.  

Let’s build a better reading experience together!

***

## **📫 Contact & Connect**

- GitHub: [abhini1516](https://github.com/abhini1516)  
- LinkedIn: https://www.linkedin.com/in/abhini-s-220345281/ 
- Email: abhiniprojects7@gmail.com

***

