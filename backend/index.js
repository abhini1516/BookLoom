const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');



const port = process.env.PORT || 5000;
//mcr9rRQ1qS7X9X0x
require('dotenv').config()


//middleware
app.use(express.json());
app.use(cors(
   {
     origin: ['http://localhost:5173'],
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     credentials: true,
   }
));

// app.post('/orders', (req, res) => {
//   // Logic for creating an order
//   const orderData = req.body;
//   // Insert into database or process the order
//   res.status(201).json({ message: 'Order created successfully', order: orderData });
// });

//routes
const bookRoutes = require("./src/books/book.route")
const orderRoutes = require("./src/orders/order.route")
const userRoutes = require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")

app.use("/api/books",bookRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/auth",userRoutes)
app.use("/api/admin",adminRoutes)

// MongoDB connection
async function main() {
  await mongoose.connect(process.env.DB_URL);
  console.log("MongoDB connected successfully!");
}
main().catch(err => console.log(err));

// Test route (outside main)
app.get("/", (req, res) => {
  res.send("Book Store Server is running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

