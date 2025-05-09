const express = require('express');
const Book = require('./book.model');
const {postABook, getAllBooks,getSingleBook,updateBook,deleteBook} = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();

//frontend => backend server => controller => book schema => database => send to the server => back to the frontend
// post a book
//post = when submit something frontend to db
//get = when get something back from db
//put/patch = when edit or update something
//delete = when delete something
router.post("/create-book",verifyAdminToken, postABook);
//get all books
router.get("/", getAllBooks);
// single book
router.get("/:id", getSingleBook);
//update a book endpoint
router.put("/edit/:id",verifyAdminToken, updateBook);
//delete a book
router.delete("/:id",verifyAdminToken, deleteBook);

module.exports = router;
//http://localhost:5000/api/books/create-book