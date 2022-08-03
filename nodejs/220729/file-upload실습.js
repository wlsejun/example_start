const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            console.log( "destination : ", req.body );
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext );
        },
    }),
    limits: {fileSize : 5*1024*1024 }
});

app.get("/", function(req,res) {
    res.render("index");
});
app.get("/register", function(req,res) {
    res.render("register");
});
app.post("/register", upload.single('userfile'), function(req,res) {
    res.render("result", { filename : req.file.filename });
});
app.post("/upload", upload.single('userfile'), function(req,res) {
    res.send("Upload");
});
app.post("/upload", upload.single('userfile'), function(req,res) {
    res.send("Upload");
});

function test(req, res, next) {
    console.log( "test함수 ");
    console.log( req.path );
    next();
}
function test2(req, res, next ) {
    console.log( "Test2 함수");
    next();
}
app.listen(port, ()=>{
    console.log("Server Port : ", port);
})