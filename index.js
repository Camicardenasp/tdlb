const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PUERTO = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://cami:Vale2000@listatareas.2oaaf7x.mongodb.net/todolist?retryWrites=true&w=majority", connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(process.env.PORT||PUERTO, () => {
    console.log("The server is listening on port " + PUERTO);
});