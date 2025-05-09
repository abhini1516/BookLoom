const express = require('express');
const router = express.Router();

router.post("/admin",async (req,res) => {
    const {username,password} = req.body;
    try {
        const admin =await User.findOne({username});

    } catch (error) {
        console.error("Error creating admin:", error);
        res.status(401).send({message:"Invaild credentials"});
    }
})
module.exports=router;