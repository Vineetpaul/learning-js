const express = require('express')
const router = require(express.Router);
const app = express();

// this middleware file is conatning 3 maiddlewares 
// 1 auth
// student middle
// admin middle

const auth = function (req,res,next){
console.log("Checking for authentication");
res.send("this is your page")
next();
}


const studentMiddle = function(req,res,next){
    console.log("Checking student access");

    if (!req.user) {
        return res.status(401).send("Authentication required");
    }

    if (req.user.role !== "student") {
        return res.status(403).send("Student access only");
    }

    next();
}