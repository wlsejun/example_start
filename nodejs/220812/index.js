const express = require('express');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.use(cookieParser('1234'));
app.use(session({
    secret : 'secret key',
    // resave : false,
    // saveUninitialized : true
}))

const cookieConfig = {
    maxAge: 30000,
    path: '/', //시작경로 ex) /get : get으로 시작하는 모든 쿠키를 볼 때
    httpOnly: true,
    signed: true, //암호화
};

app.get("/index", (req,res) => {
    req.session.name = "홍길동";
    res.cookie('key', 'value', cookieConfig);
    res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});

app.get("/get", (req,res)=> {
    console.log( req.session.name );
    console.log( req.cookies );
    res.send( req.cookies );
})
app.get("/cookie", (req,res) => {
    res.render("cookie");
})
app.get("/destroy", (req,res) => {
    req.session.destroy(function(err){
        res.send("삭제");
    })
    req.session.name = "";
})

app.listen(8000, ()=>{
    console.log( "Server : ", 8000 );
});