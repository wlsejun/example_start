const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({
    dest: "uploads/"
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", test, test2, function(req,res) {
    res.render("index");
});
app.post("/upload", upload.single('userfile'), function(req,res) {
   console.log(req.body);
   console.log(req.file);
   res.send("Upload");
});
app.post("/upload/array", upload.array('userfile'), function(req,res) {
    console.log(req.body);
    console.log(req.files);
    res.send("Upload Array");
    
});
app.post("/upload/fields", upload.fields([{name: 'userfile'}, {name: 'userfile'}, {name: 'userfile'}]), function(req,res) {
    console.log(req.body);
    console.log(req.files);
    res.send("Upload Array");
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