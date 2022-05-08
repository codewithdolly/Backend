//general configuration
require("dotenv").config();
const mongoDBURL = process.env.mongodburl;
const PORT = 80 || 5000;

//importing NPM packages
const mongoose = require("mongoose");
const express = require("express");

//creating app server
const app = express();
//import schema modules
const User = require("./models/user");

//connecting database
// async function connectMongoDB(mongoDBURL) {
//   await mongoose.connect(mongoDBURL);
// }

async function connectMongoDB(){
    await mongoose
      .connect(mongoDBURL)
      .then(() => console.log("💻 Mondodb Connected"))
      .catch(err => console.error("Eroor while connecting MongoDB"+err));
    }
    connectMongoDB()

//creating general Routes
app.get("/", (req, res) => {
  // res.json({status:"app is running..."})
  // res.send(`Hello from server`)
  res.send(`<h1>Hello from server</h1>`);
});

//getting all users
app.get("/users", (req, res) => {
  //finding users
  User.find({}, (err, foundUsers) => {
    if (!err) {
      console.log(foundUsers);
      res.json(foundUsers).status(200)
      
    } else {
      console.log("went wrong...", err);
    }
  });

//   res.send("Users are coming...");
});

app.listen(PORT, console.log(`server running on port ${PORT}`));
