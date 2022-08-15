const express = require('express');
const usersRouter = express.Router();
const jwt = require('jsonwebtoken');
const {SECRET}= process.env;
const bcrypt = require('bcrypt');
const { getUser, createUser, getUsers} = require("../db/models/usersModel");

usersRouter.use(express.json());
//GET api/users
usersRouter.get("/", async (req, res, next) => {
    try {
        const users = await getUsers();

        res.send({
            users: users,
        })
    } catch(error) {
        console.log(error);
    }
})

// POST /api/users/register
usersRouter.post("/register", async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const _user = await getUserByUsername(username);
    //   const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, 10);
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
      const user = await createUser({
        username,
        hashedPassword
      });
      const token = jwt.sign({id: hashedPassword, username: username}, "neverTell");
    res.send({
        message: "thank you for signing up",
        token: token,
        user: {
            id: user.id,
            username: user.username
        }
      });
    } catch ({ name, message }) {
      next({ name, message });
    }
  });

// POST /api/users/login
usersRouter.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
    console.log("this is our username",username);
    if (!username || !password) {
      next({
        error: "error",
        name: "MissingCredentialsError",
        message: "Please supply both a username and password",
      });
    }
  
    try {
      const user = await getUser({username,password});
      
        if(!user){
          next({
            name: "bad information",
            message: "User does not exist, Please create account"
          })
        } else{
          const token = jwt.sign({id: user.id, username: user.username}, SECRET);
          
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
      console.log(error);
      next(error);
    }
  })

  // app.use((error, req, res, next) => {
   
  //   if (error.type == 'redirect')
  //       res.redirect('/error')
  
  //    else if (error.type == 'time-out') // arbitrary condition check
  //       res.status(408).send(error)
  //   else
  //       res.status(500).send(error)
  // })

module.exports = usersRouter;