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
    origin: ['http://localhost:5173/'],
    
    credentials: true,
  }
));

//routes
const bookRoutes = require("./src/books/book.route")
app.use("/api/books",bookRoutes)

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
  console.log(`Example app listening on port ${port}`);
});

