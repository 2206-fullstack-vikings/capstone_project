const express = require('express');
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const {SECRET}= process.env;
const bcrypt = require('bcrypt');
const { getUser, createUser, getUsers} = require("../db/models/usersModel");

usersRouter.use(express.json());
//GET api/users
usersRouter.get("/", async (req, res, next) => {
    try {
        const users = await getUsers();

        res.send({
             users
        })
    } catch(error) {
        console.log(error);
    }
})

// POST /api/users/register
usersRouter.post("/register", async (req, res, next) => {
    const { name, username, password, email } = req.body;
    
    try {
      const _user = await getUser({username, password});
      
     
      if (password.length < 8) {
          res.send({
            error: "error",
            message: "Password Too Short!",
            name: "name",
          });
      }
      if (_user) {
          res.send({
            error: "error",
            message: "User already exists!",
            name: "name",
           });
      }

      
      const user = await createUser({ name, username, password, email });
     
      
      const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn:"1h"});
    res.send({
        message: "thank you for signing up",
        token,
        user
        
      });
    } catch ({ name, message }) {
      next({ name, message });
    }
  });

// POST /api/users/login
usersRouter.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
    
    
    if (!username || !password) {
      
      next({
        
        name: "MissingCredentialsError",
        message: "Please supply both a username and password",
      });
    }
  
    try {
      
      const user = await getUser({username, password});
      
        if(!user){
          
          next({
            name: "bad information",
            message: "Incorrect username and password"
          })
        }
         else {
         
          const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn:"1h"});
          
            res.send({ token, message: "you're logged in!",  user});
        }
      
          // if (await bcrypt.compare(password, user.password)) {
          //   res.send({
          //     message: "you're logged in!",
          //     token: token,
          //     user: user
          //   });
          // } else {
          //     next({
          //         message: "nope",
          //     })
          // }
    } catch (error) {
      // console.log(error);
      next(error);
    }
  })

  
module.exports = usersRouter;