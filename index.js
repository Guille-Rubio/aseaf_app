const express = require('express');
const userRouter = express.Router('userRouter');
require('dotenv').config();
const app = express();
const cors = require('cors');
const path = require('path');
require('./config/mongodb_config');
const port = process.env.PORT || 5000;
const sequelize = require('sequelize');
const { connectSQL } = require('./config/sql_config');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

app.use("/", userRouter);

app.post("/prueba", (req, res) => {
  try {
    console.log("LLEGO")
    console.log(req.body)
    res.send("Hello")
  } catch (error) {
    console.log(error)
  }


})



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'))
})

app.use((req, res, next) => {
  return res.status(404).send({ message: 'Route' + req.url + ' Not found.' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})