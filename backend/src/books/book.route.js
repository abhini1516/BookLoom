const express = require('express')
const router = express.Router();

// post a book
//post = when submit something frontend to db
//get = when get something back from db
//put/patch = when edit or update something
//delete = when delete something
router.post("/create-book",async (req,res)=> {
console.log(req.body)
})

module.exports = router;
//http://localhost:5000/api/books/create-book