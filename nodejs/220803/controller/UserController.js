exports.get_user = (req,res) => {
    res.send("Get User");
}
exports.index = (req, res) => {
    res.render("index");
}





/* 
app.get("/user/info",  (req,res) => {});
app.patch("/user/info",  (req,res) => {});
app.delete("/user/info",  (req,res) => {});
app.get("/user/register",  (req,res) => {});
app.post("/user/register",  (req,res) => {});
app.get("/user/login",  (req,res) => {});
app.post("/user/login",  (req,res) => {});
app.get("/user/login",  (req,res) => {});
app.post("/user/login",  (req,res) => {});

const userRouter = express.Router();
userRouter.get("/info", (req,res)=>{});
userRouter.patch("/info", (req,res)=>{});
userRouter.delete("/info", (req,res)=>{});
userRouter.get("/register", (req,res)=>{});
userRouter.post("/register", (req,res)=>{});
userRouter.get("/login", (req,res)=>{});
userRouter.post("/login", (req,res)=>{});
app.use("/user", userRouter)

const superRouter = express.Router();
superRouter.get("/login", (req,res)=>{});
superRouter.post("/login", (req,res)=>{});
app.use("/super", superRouter);
*/