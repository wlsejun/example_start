const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();

app.set("view engine", "ejs");
app.use(cookieParser('1234'));

const cookieConfig = {
    maxAge: 30000,
    path: '/',
    httpOnly: true,
    signed: true, //암호화
};

app.get("/", (req,res) => {
    res.cookie('key', 'value', cookieConfig);
    res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});

app.get("/get", (req,res)=> {
    console.log( req.cookies );
    res.send( req.cookies );
})
app.get("/cookie", (req,res) => {
    res.render("cookie");
})

app.listen(8000, ()=>{
    console.log( "Server : ", 8000 );
});