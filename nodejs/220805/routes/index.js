const express = require("express");
const userRouter = express.Router();
const user = require("../controller/VisitorController");

userRouter.get("/", user.index); 
userRouter.get("/register", user.register); 

userRouter.post("/register", user.post_register);

userRouter.get("/login", user.login);
userRouter.post("/login", user.post_login);


module.exports = userRouter; 