const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

const router = require("./routers");
app.use("/app", router); 
// const router = require("./routers/board");
// app.use("/board", board); 

app.listen(port, ()=> {
    console.log( "Server Port : ", port );
})

